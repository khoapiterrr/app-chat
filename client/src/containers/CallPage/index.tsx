import { Avatar, Button, IconButton } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from './selectors';
import CallEndIcon from '@material-ui/icons/CallEnd';
import VideocamIcon from '@material-ui/icons/Videocam';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import './styles.scss';
import useSearchInfo from 'Hooks/useSearchInfo';
import AvatarDefault from 'assets/images/default-avatar.png';
import { useParams } from 'react-router';
import { emitCheckListenerStatus } from './socket';
import authSelectors from 'containers/Auth/selectors';
import Peer from 'simple-peer';
import { useQuery } from 'Hooks/useQuery';
import getSocket from 'app/rootSocket';
interface ParamTypes {
  peerId: string | undefined;
}

const CallPage = () => {
  const { peerId } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const queryParams = useQuery();
  const [stream, setStream] = useState<any>();
  const localVideoRef = useRef<any>();
  const remoteVideoRef = useRef<any>();
  const caller = useSelector(authSelectors.selectCurrentUser);
  const listener = useSearchInfo(peerId as string);
  const [status, setStatus] = useState(queryParams.get('status'));
  const [callerSignal, setCallerSignal] = useState<any>();

  React.useEffect(() => {
    if (listener) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
          localVideoRef.current.srcObject = stream;
        });

      if (status === 'contacting') {
        emitCheckListenerStatus({ caller, listener, listenerId: peerId });
        // handleAnswerCall();
      }
      getSocket().on('send-peer-answer-to-caller', (data: any) => {
        if (!callerSignal) {
          setCallerSignal(data.signal);
        }
        setStatus('ReceivingCallSuccess');
      });
      // check status call
      getSocket().on('server-caller-listener-status', (payload: any) => {
        if (payload.status === 'offline') {
          // Nếu listener offline thì trả thông báo về cho caller
          window.close();
        }
      });
    }
  }, [peerId, listener]);

  const handleCallUser = () => {
    setStatus('calling');
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
      config: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
        ],
      },
    });
    peer.on('signal', (data) => {
      getSocket().emit('send-peer-to-request-call-user', {
        signalData: data,
        caller: caller,
        listenerId: peerId,
      });
    });

    peer.on('stream', (stream) => {
      remoteVideoRef.current.srcObject = stream;
    });

    getSocket().on('user-call-accepted', (signal: any) => {
      peer.signal(signal);
    });
  };

  const handleAnswerCall = () => {
    setStatus('calling');
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
      config: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
        ],
      },
    });

    peer.on('signal', (data) => {
      getSocket().emit('listener-user-send-peer', { signal: data, to: peerId });
    });

    peer.on('stream', (stream) => {
      remoteVideoRef.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  };

  const handleEndCall = () => {
    window.close();
  };
  return (
    <div className='callPage'>
      <div className='current-user-call'>
        {stream && (
          <video
            playsInline
            className='caller-video'
            ref={localVideoRef}
            autoPlay={true}
            muted={true}
            controls={false}></video>
        )}
      </div>
      <div className='listener-user-call'>
        {status === 'contacting' && (
          <div className='contacting'>
            <Avatar
              className='listener-avatar'
              src={listener?.avatar ?? AvatarDefault}
            />
            <br />
            <p className='listener-name'>{`${listener?.firstName} ${listener?.lastName}`}</p>
            <p>Calling...</p>
            <Button onClick={handleCallUser}>Connect</Button>
          </div>
        )}
        {status === 'ReceivingCallSuccess' && (
          <div className='contacting'>
            <Avatar
              className='listener-avatar'
              src={listener?.avatar ?? AvatarDefault}
            />
            <br />
            <p className='listener-name'>{`${listener?.firstName} ${listener?.lastName}`}</p>
            <p>Calling...</p>
            <Button onClick={handleAnswerCall}>Answer</Button>
          </div>
        )}
        {status === 'calling' && (
          <video
            playsInline
            className='listener-video'
            ref={remoteVideoRef}
            controls={false}
            autoPlay={true}></video>
        )}
      </div>
      <div className='action-call'>
        <IconButton className='icon-action-red' onClick={handleEndCall}>
          <CallEndIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CallPage;
