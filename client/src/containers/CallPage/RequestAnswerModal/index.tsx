import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../selectors';
import { Button } from '@material-ui/core';
const RequestAnswerModal = () => {
  const dispatch = useDispatch();
  const isShowRequestAnswer = useSelector(selectors.selectIsShowRequestAnswer);
  const handleClose = () => {
    console.log('close');
  };
  return (
    <Dialog
      open={isShowRequestAnswer}
      // onClose={handleClose}
      aria-labelledby='draggable-dialog-title'>
      <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
        Subscribe
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleClose} color='primary'>
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestAnswerModal;
