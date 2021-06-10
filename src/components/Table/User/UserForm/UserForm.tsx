import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const UserForm = ({ open, onHandleClose, user }) => {

  return (
    <div>
      <Dialog open={open} onClose={onHandleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit {user.name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            value={user.name}
            fullWidth
          />
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={user.gender}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type="number"
            value={user.age}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={user.email}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onHandleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onHandleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserForm;