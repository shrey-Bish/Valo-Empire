import React, { useEffect, useState } from 'react';
// import { useForm } from "react-hook-form";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { oniclaw } from '../../Assets/icons';
import EnhancedTable from './Tablepg';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    

  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(15),
    backgroundColor: "white",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    position: 'relative',
    zIndex: '2',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#a574ff"
  },
  cssLabel: {
    color: "#d3d3d3",
    marginTop:"-3px",
    "&.Mui-focused": {
      color: "#a574ff"
    }
  },
}));

export default function Formsell() {
  const [display,setDisplay]= React.useState(true);
  const classes = useStyles();
  const [Name, setName] = useState('');
  const [DisplayName, setDisplayName] = useState('');
  const [email, setemail] = useState('');
  const [Contact, setContact] = useState('');
  const [Discord, setDiscord] = useState('');
  const [State, setState] = useState('');
  const [Emailverified, SetEmailverified] = useState(false)
  const [error1, setError1] = useState(false);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    setDisplay(false)
    setError1(false);
    try {
        await axios.post("/user", {
          Name,
          DisplayName,
          email,
          Contact,
          Discord,
          State
        });
      
        
    } catch (err) {
        setError1(true);
        setDisplay(true);
    }
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  const checkemail=(x)=> {
    if(validateEmail(x)){
      SetEmailverified(true);
      setemail(x);
    }
    else{
      SetEmailverified(false);
    }
  }

  return (
    <>
    {display ?<Container style={{ boxShadow: "0 0 20px 1px #a574ff", backgroundColor: "#fff",width: '100%',height: '100%'}}component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <img src={oniclaw} alt=""></img>
            
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
         Get Started
        </Typography>
        <form  className={classes.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Name"
            label="Name"
            name="Name"
            onChange={ e => setName(e.target.value)}
            autoFocus
            InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="DisplayName"
            label="DisplayName"
            type="text"
            id="displayName"
            onChange={ e => setDisplayName(e.target.value)}
            style={{marginLeft:0}}
            InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="email"
            type="email"
            id="email"
            error={Emailverified}
  helperText={!Emailverified ? 'Invalid Email!' : ' '}
            onChange={ e => checkemail(e.target.value)}
            InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Contact"
            label="Contact"
            type="number"
            id="contact"
            onChange={ e => setContact(e.target.value)}
            InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
           
          />
           <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="Discord"
            label="Discord (optional)"
            type="text"
            id="discord"
            onChange={ e => setDiscord(e.target.value)}
            InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
           
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="State"
            label="State"
            type="text"
            id="state"
            onChange={ e => setState(e.target.value)}
            InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
          
          />


          
          {Name && DisplayName && email && Contact && State && Emailverified?
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{ handleSubmit(); }}
          >
           Submit and Proceed
          </Button>
          :
          <Button
          type="submit"
          disabled
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onClick={()=>{setDisplay(false)}}
        >
         Submit and Proceed
        </Button>
     

}
{ error1 ? " *  DisplayName must be unique": " "}
        </form>

      </div>
    
    </Container>
    :""}
      <EnhancedTable
       display={display}
       Name={Name} 
       DisplayName={DisplayName}
       email={email}
       Contact={Contact}
       Discord={Discord}
       State={State}  
       />
      </>
  );
}