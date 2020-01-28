import React from "react"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      height: '50%',
    },
  },
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText("rgb(0, 117, 193)"),
    backgroundColor: "rgb(0, 117, 193)",
    '&:hover': {
      backgroundColor: "rgb(0, 132, 241)",
    },
  },
}))(Button);

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      justifyContent: 'center',
    }}
         id={'contactUs'}
    >
      <h1> Contact US </h1>
      <form className={classes.root}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              height: '50%',
            }}
            noValidate autoComplete="off"
      >
        <div style={{display: 'flex', flexDirection: 'column', width: '90%', alignItems: 'center'}}>
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Ex.gmail.com"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="Write Message"
            multiline
            rows="8"
            variant="outlined"
          />
          <ColorButton variant="contained" color="primary">
            Send
          </ColorButton>
        </div>
      </form>
    </div>
  )
}

export default ContactUs;