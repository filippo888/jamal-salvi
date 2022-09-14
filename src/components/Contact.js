import * as React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { TextField } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@mui/material/colors';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const useStyles = makeStyles(theme => ({

secondaryContainer:{
    background: "linear-gradient(90deg,  #abd7fe,  #73abe0)",
    display: "flex",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "space-around",
    
    flexDirection: "column",
   

},
btn:{
  color:grey[800]
},

mr:{
  margin: "10px",
  textAlign: "center"
},

typed:{
  color: grey[700],
  fontWeight: "100",
  margin: "10px",
  textAlign: "center",
  paddingBottom: "30px"
},

card:{
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start"

}


}))


const Contact = () => {
    /*<Button><ContentCopyIcon fontSize="small"/></Button>*/
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
        <Box  sx={{ maxWidth: { xs: 375, md: 635 },
        minHeight: "80vh",
         marginTop: "80px",
         display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
 
      }}>

        <Typography className={classes.mr} variant="h3"  > Contact me </Typography>

        <Card  sx={{ padding: "15px", borderRadius: 10, boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"}}>
          <CardContent className={classes.card}>

          <Typography className={classes.typed} variant="h7"  > Want to get in touch with me? Fill out the form! The e-mail is sent to jamal.salvi@gmail.com.  
          </Typography>

        
          <TextField 

                      id="outlined-basic" 
                      name='from_name'
                      label="given names" 
                      variant="outlined" 
                      style={{width: '-webkit-fill-available', height: 'auto', margin: '5px'}}
                      onChange={handleChange}/>


          <TextField 
                      id="outlined-basic" 
                      name='message'
                      label="message" 
                      variant="outlined" 
                      multiline="true"
                      style={{width: '-webkit-fill-available', height: 'auto', margin: '5px'}}
                      onChange={handleChange}/>
          <Typography  sx={{ mb: 1.5 , margin: '5px'}} color="text.secondary" >Enter your e-mail address:</Typography>
          <TextField 
                      
                      id="outlined-basic" 
                      name='reply_to'
                      label="e-mail" 
                      variant="outlined"
                      style={{width: '-webkit-fill-available', height: 'auto', margin: '5px'}}
                      onChange={handleChange}/>

    
          <Button sx={{color:grey[800],  marginTop: '15px'}} size="big" type='submit'>Send </Button>
            
        </CardContent>
      
      </Card>
    
    
    </Box>
    </form>
    </div>
    )
    }
  
  

export default Contact;