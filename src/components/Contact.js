import * as React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import {
    Typography,
    Box,
    Divider,
} from "@material-ui/core"
import { TextField } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    mainContainer:{
    display: "flex",
    height: "100vh",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "space-around",
    height: "87vh",
    flexDirection: "column",
    padding: "15%",

},


}))


const Contact = () => {
    const classes = useStyles()
    /*
      function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_wl01e0g', form.current, 'iwRD4vw442rYGhcHW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <form className="contact-form" onSubmit={(e) => this.sendEmail(e)}>
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          placeholder="Enter Message"
          variant="outlined"
          multiline
          rowsMax={4}
          value={state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          placeholder="Enter your name"
          label="Name"
          variant="outlined"
          value={state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Email"
          placeholder="Enter email address"
          variant="outlined"
          value={state.email}
          onChange={(e) => this.handleChangeEmail(e)}
          error={state.emailError}
          required
          type="email"
        />
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Enter Subject"
          label="Subject"
          variant="outlined"
          value={state.subject}
          onChange={(e) => this.setState({ subject: e.target.value })}
          required
        />
        <br />
        <br />
        <br />
        <div className="button--container">
          <button type="submit" className="button button-primary">
            {state.buttonText}
          </button>
        </div>
      </form>

    )
  }*/
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Jamal Salvi',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    {/* --- METHOD TO SEND THE MAIL --- */}
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmitF = (e) => {
    e.preventDefault();

    send(
      'service_hjt0m1y',
      'template_wl01e0g',
      toSend,
      'iwRD4vw442rYGhcHW'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    
    <form onSubmit={onSubmitF}>
        <Box className={classes.mainContainer}>

        <Typography > Contact me </Typography>
        <Typography > Need to get in touch with me? fill out the form.</Typography>


        <Typography >Enter your name:</Typography>
        <TextField 
                    id="outlined-basic" 
                    name='from_name'
                    label="name" 
                    variant="outlined" 
                    style={{width: '-webkit-fill-available', height: 'auto'}}
                    onChange={handleChange}/>

        <Typography >Enter message:</Typography>
        <TextField 
                    id="outlined-basic" 
                    name='message'
                    label="message" 
                    variant="outlined" 
                    style={{width: '-webkit-fill-available', height: 'auto'}}
                    onChange={handleChange}/>
        <Typography >Enter your mail:</Typography>
        <Typography >Enter your mail:</Typography>
        <TextField 
                    id="outlined-basic" 
                    name='reply_to'
                    label="mail" 
                    variant="outlined" 
                    style={{width: '-webkit-fill-available', height: 'auto'}}
                    onChange={handleChange}/>

    

        <button type='submit' >Submit </button>
    
    </Box>
    </form>
    )
    }
  
  

export default Contact;