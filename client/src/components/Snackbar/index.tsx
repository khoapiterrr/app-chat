// components/SuccessSnackbar.js or whatever you wanna call it
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import { clearSnackbar } from 'containers/layout/actions';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function CustomSnackbar() {
  const dispatch = useDispatch();

  const { snackbarMessage, variant, snackbarOpen } = useSelector(
    (state: any) => state.layout,
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={snackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby='client-snackbar'>
      <Alert onClose={handleClose} severity={variant}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
}
