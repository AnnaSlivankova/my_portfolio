import React, {forwardRef} from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar = ({isOpen, severity, callback}) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    callback(false)
  };

  return (
    <Stack spacing={2} sx={{width: '100%'}}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity} onClose={handleClose} sx={{width: '100%'}}>
          {severity === 'success' ? 'Your message was successfully delivered!' : 'Something was wrong and your message wasn\'t delivered. Please try it again!'}
        </Alert>
      </Snackbar>
    </Stack>
  );
}