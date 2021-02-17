import React, { useState, useEffect } from 'react';
import ChatContentHeader from './ChatContentHeader';
import avatarLTK from 'assets/images/avatarkhoalt.jpg';
import { getOffset } from 'utils/common';
import './styles.scss';
import ChatFooter from './ChatFooter';
const ChatContent = () => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const ofTop = getOffset(document.getElementById('conversationContent')).top;
    const chatFooterEl = document.getElementById('chatFooter');
    setStyle({
      ...style,
      height: `calc(100vh - ${ofTop}px - ${
        chatFooterEl!.offsetHeight
      }px - 10px)`,
    });
  }, []);
  return (
    <div className='chat-wrapper'>
      <ChatContentHeader />
      <div
        className='conversation-content'
        id='conversationContent'
        style={style}>
        <div className='message-day'>
          <div
            className='message-divider sticky-top pb-2'
            data-label='Yesterday'>
            &nbsp;
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message self'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  First of all, you need to understand the subject matter
                  thoroughly. You need to know what is global warming, what
                  causes global warming, and what people should do to abate the
                  effects of global warming.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <span className='message-status'>Edited</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  If that is the case, then I already have an outline. To make
                  it easy for my audience to follow the presentation, I intend
                  to post the outline on the board at all time during my speech.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='message-day'>
          <div className='message-divider sticky-top pb-2' data-label='Today'>
            &nbsp;
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='message self'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  First of all, you need to understand the subject matter
                  thoroughly. You need to know what is global warming, what
                  causes global warming, and what people should do to abate the
                  effects of global warming.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <span className='message-status'>Edited</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='message'>
            <div className='message-wrapper'>
              <div className='message-content'>
                <span>
                  If that is the case, then I already have an outline. To make
                  it easy for my audience to follow the presentation, I intend
                  to post the outline on the board at all time during my speech.
                </span>
              </div>
            </div>
            <div className='message-options'>
              <div className='avatar avatar-sm'>
                <img alt='' src={avatarLTK} />
              </div>
              <span className='message-date'>9:12am</span>
              <div className='dropdown'>
                <svg
                  className='text-muted hw-20 dropdown-toggle'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatFooter />
    </div>
  );
};

export default ChatContent;
