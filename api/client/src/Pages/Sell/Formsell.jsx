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
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};



const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


function getSteps() {
  return ['Set personal Info',  'Set Account Details'];
}


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
  root: {
    width: '100%',
    position: 'relative',
    zIndex:3,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
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
     <div className={classes.root}>
    
    <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
   
    <div>
      {activeStep === steps.length ? (""
        // <div>
        //   <Typography className={classes.instructions}>
        //     All steps completed - you&apos;re finished
        //   </Typography>
        //   <Button onClick={handleReset} className={classes.button}>
        //     Reset
        //   </Button>
        // </div>
      ) : (
        <div>
          {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
          <div>
            {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
              Back
            </Button> */}
            {/* <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
          </div>
        </div>
      )}
    </div>
  </div>
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
            label="Unique ID for your listing"
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
  <FormControl component="fieldset">
      <FormLabel component="legend">Have you ever made a purchase in your valorant account?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
    
      </RadioGroup>
    </FormControl>

          
          {Name && DisplayName && email && Contact && State && Emailverified &&value?
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{ handleSubmit(); handleNext(); }}
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
{ error1 ? " *  Identification already taken": " "}
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
       value={value}
      //  activeStep={activeStep}
       />
      </>
  );
}