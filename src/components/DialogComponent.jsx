import React, { memo } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';

const DialogComponent = ({ open, onClose }) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
    
  return (
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => onClose}
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose}>Agree</Button>
        </DialogActions>
  </Dialog>
  )
}

export default memo(DialogComponent)