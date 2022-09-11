import * as React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import {
    Typography,
    Box,
    Divider,
    Button
} from "@material-ui/core"
import { TextField } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@mui/material/colors';

const useStyles = makeStyles(theme => ({
    mainContainer:{
      minHeight: "80vh",
      width: "40vh",
      display: "flex",
      alignItems: "center",
      alignContent: "space-around",
      flexDirection: "column",
      justifyContent: "space-around",
      marginTop: "80px",

},
secondaryContainer:{
    display: "flex",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "space-around",
    
    flexDirection: "column",
   

},

mr:{
  margin: "10px"
}


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

    if (toSend.from_name.trim() === ""){
      alert('Insert your name!')
      return
    }

    if (toSend.message.trim() === ""){
      alert('Insert your message!')
      return
    }

    if (toSend.reply_to.trim() === ""){
      alert('Insert your mail!')
      return
    }

    send(
      'service_hjt0m1y',
      'template_wl01e0g',
      toSend,
      'iwRD4vw442rYGhcHW'
    )
      .then((response) => {
        alert('Mail successfully send!')
        console.log('SUCCESS!', response.status, response.text);
        
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Something went wrong, retry...')
      });
  };

  return (
    <div className={classes.secondaryContainer}> 
    <form onSubmit={onSubmitF}>
        <Box className={classes.mainContainer}>

        <Typography className={classes.mr} variant="h5" component="div" > Contact me </Typography>
        <Typography className={classes.mr} variant="body2" sx={{ mb: 1.5}} > Need to get in touch with me? fill out the form.</Typography>

        <Typography className={classes.mr} >Enter your name:</Typography>
        <TextField 
                    id="outlined-basic" 
                    name='from_name'
                    label="name" 
                    variant="outlined" 
                    style={{width: '-webkit-fill-available', height: 'auto'}}
                    onChange={handleChange}/>

        <Typography className={classes.mr}>Enter message:</Typography>
        <TextField 
                    id="outlined-basic" 
                    name='message'
                    label="message" 
                    variant="outlined" 
                    multiline="true"
                    style={{width: '-webkit-fill-available', height: 'auto'}}
                    onChange={handleChange}/>
        <Typography className={classes.mr} >Enter your mail:</Typography>
        <TextField 
                    
                    id="outlined-basic" 
                    name='reply_to'
                    label="mail" 
                    variant="outlined"
                    style={{width: '-webkit-fill-available', height: 'auto'}}
                    onChange={handleChange}/>

  
        <Button className={classes.mr}variant="outlined" type='submit' >Submit </Button>
   
    
    </Box>
    </form>
    </div>
    )
    }
  
  

export default Contact;