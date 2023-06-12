import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: 500,
    maxWidth: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



export default function ModalForm({ toggleForm, formState, submit }) {
  const [fullname, setFullName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [group, setGroup] = React.useState([]);
  const [assignprofile, setAssignProfile] = React.useState([]);



  
  const handleFullName = (e) =>{
    setFullName(e.target.value)
  }
  
  const handleUserName = (e) =>{
    setUserName(e.target.value)
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handleGroup = (e) => {
    setGroup(e.target.value)
  }

  const handleProfile = (e) => {
    setAssignProfile(e.target.value)
  }

  const handleClose = () => {
    console.log("Form Data: ", )
    toggleForm()
  };

  const handleSubmit = ()=>{
    const form_obj ={
      full_name: fullname,
      user_name: username,
      e_mail: email,
      group: group,
      assignprofile: assignprofile
    }
    toggleForm()
    submit(form_obj)
  }

  
  return (
    <div>
      <Button sx={{ backgroundColor: '#22a565', color: 'white' }} variant="outlined" onClick={handleClose}>
        <AddIcon />Add New
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={formState}
      >
        <BootstrapDialogTitle sx={{ backgroundColor: "#050e2d", color: "white" }} id="customized-dialog-title" onClose={handleClose}>
          Add New User
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <InputLabel shrink htmlFor="bootstrap-input">
            Full Name
          </InputLabel>
          <BootstrapInput value={fullname}  onChange={handleFullName} required error label="Error" placeholder="Enter full name" id="fullname-input" helpertext="Incorrect entry." />

          <InputLabel shrink htmlFor="userName-input">
            User Name
          </InputLabel>
          <BootstrapInput value={username}  onChange={handleUserName} error placeholder='Enter Username' label="Error" id="userName-input" helpertext="Incorrect entry." />

          <InputLabel shrink htmlFor="email-input">
            Email Address
          </InputLabel>
          <BootstrapInput value={email}  onChange={handleEmail} error placeholder='Enter user email address' label="Error" id="email-input" helpertext="Incorrect entry." />

          <InputLabel shrink htmlFor="user-group">
            User Group
          </InputLabel>

          <FormControl required sx={{ mt: 0, minWidth: 525 }}>
            <InputLabel id="user-group-label">Group User</InputLabel>
            <Select
              labelId="user-group-required-label"
              id="user-group-required"
              value={group}
              label="User Group *"
              onChange={handleGroup}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Active'}>Active</MenuItem>
              <MenuItem value={'Inactive'}>Inactive</MenuItem>
              <MenuItem value={'Locked'}>Locked</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>


          <InputLabel sx={{ mt: 2}} shrink htmlFor="assign-profile">
            Assign Profile
          </InputLabel>
          <FormControl required sx={{ mt: 0, minWidth: 525 }}>
            <InputLabel id="assign-profile">Assign Profile</InputLabel>
            <Select
              labelId="assign-profile-required-label"
              id="assign-profile-required"
              value={assignprofile}
              label="User Group *"
              onChange={handleProfile}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'profile1'}>profile1</MenuItem>
              <MenuItem value={'profile2'}>profile2</MenuItem>
              <MenuItem value={'profile3'}>profile3</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Save changes
          </Button>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

  // const [open, setOpen] = React.useState(false);
  // const [email, setEmail] = React.useState("")

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // // const handleClose = () => {
  // //   setOpen(false);
  // // };
  // const handleClose = () => {
  //   toggleForm()
  // }
  // const emailInp = (e) => {
  //   console.log("Email ", e.target.value)
  //   setEmail(e.target.value)
  // }

  // return (
  //   <div>
  //     <Button sx={{ backgroundColor: '#22a565', color: 'white' }} variant="outlined" onClick={handleClose}>
  //       <AddIcon />Add New
  //     </Button>
  //     <Dialog open={formState} >
  //       <DialogTitle>Subscribe</DialogTitle>
  //       <DialogContent>
  //         <DialogContentText>
  //           To subscribe to this website, please enter your email address here. We
  //           will send updates occasionally.
  //         </DialogContentText>
  //         <TextField
  //           autoFocus
  //           error
  //           margin="dense"
  //           id="name"
  //           label="Email Address"
  //           type="email"
  //           fullWidth
  //           variant="standard"
  //           helperText="Incorrect entry."
  //           value={email}
  //           onChange={emailInp}
  //         />
  //         <InputLabel htmlFor="input-with-icon-adornment">
  //           With a start adornment
  //         </InputLabel>
  //         <Input
  //           id="input-with-icon-adornment"
  //           startAdornment={
  //             <InputAdornment position="start">
  //               <AccountCircle />
  //             </InputAdornment>
  //           }
  //         />
  //       </DialogContent>
  //       <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
  //         <Button onClick={handleClose}>Cancel</Button>
  //         <Button onClick={handleClose}>Save</Button>
  //       </DialogActions>
  //     </Dialog>
  //   </div>
  // );

