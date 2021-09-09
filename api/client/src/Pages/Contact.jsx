import {
  Button,
  // Container,
  // Grid,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import "./contact.scss";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Topbar from "../Components/Topbar";
import Bottombar from "../Components/Bottombar";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1.5),
      width: "25ch",
    },
  },
  contactcontain: {
    margin: "40px",
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: "30%",
  },
  txtarea: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "100%",
   fontSize: "18px",
   "&:hover": {
 
    borderColor: "green",
   
},
[theme.breakpoints.up('md')]: {
  width: "80%",
},
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
  rtxt: {
    marginTop: theme.spacing(4),
    display: "flex",
  },
  textbar: {
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
  rtxt1: {
    marginLeft: theme.spacing(3),
    color: "#CFC5C5",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(5),
      width: "95px",
      
    },
    
  },
  rtxtt: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(3),
    },
  },
  titleee: {
    fontFamily: "Hahmlet",
    marginLeft: theme.spacing(3),
  },
  weareopen: {
    wordSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.6,
      marginTop: "30px",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  icon : {
    [theme.breakpoints.down("sm")]: {
     display : "none"
    },
  }

}));
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);
export default function Contact() {
  const [Name, setName] = useState('');
  const [Subject, setSubject] = useState('');
  const [email, setemail] = useState('');
  const [Contact, setContact] = useState('');
  const [Message, setMessage] = useState('');
  const classes = useStyles();
  return (
    <>
      <Topbar />
      <div className="contactcontainer">
       
        
            <div className="contact-left">
              <Typography className={classes.titleee} variant="h4" gutterBottom>
                Send us a message
              </Typography>

              <form className={classes.root} noValidate autoComplete="off" action="https://formsubmit.co/officialvaloempire@gmail.com" method="POST">
                <CssTextField
                  className={classes.margin}
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  onChange={ e => setName(e.target.value)}
                  id="custom-css-outlined-input"
                />
                <CssTextField
                  className={classes.margin}
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  id="custom-css-outlined-input"
                  onChange={ e => setemail(e.target.value)}
                />
                <CssTextField
                  className={classes.margin}
                  label="Subject"
                  variant="outlined"
                  type="text"
                  name="_subject"
                  id="custom-css-outlined-input"
                  onChange={ e => setSubject(e.target.value)}
                />
                <CssTextField
                  className={classes.margin}
                  label="Contact No."
                  variant="outlined"
                  name="contactNo"
                  defaultValue="NA"
                  type="number"
                  id="custom-css-outlined-input"
                  onChange={ e => setContact(e.target.value)}
                />

                <TextareaAutosize
                  className={classes.txtarea}
                  aria-label="minimum height"
                  name="Message"
                  minRows={7}
                  placeholder="Message"
                  onChange={ e => setMessage(e.target.value)}
                />
                <input type="hidden" name="_autoresponse" value="Thank You ,Our team will contact you soon"/>
           
           {Name&&Subject&&email&&Contact&&Message ?
              <Button
                type ="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Send
              </Button>
              :
              <Button
                variant="contained"
                color="primary"
                disabled
                className={classes.button}
              >
                Send
              </Button>

           }
              </form>
            </div>
         

        
          
              <div className="contact-right">
                <div className="crl">
                  <Typography variant="h4" gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography
                    className={classes.weareopen}
                    variant="body4"
                    gutterBottom
                  >
                    We are open for any suggestion or just to have a chat.
                  </Typography>
                </div>
                <div className="crr">
                  <Typography
                    className={classes.rtxt}
                    variant="body4"
                    gutterBottom
                  >
                    <EmailIcon className={classes.icon} />
                    <Typography
                      className={classes.rtxtt}
                      variant="body4"
                      gutterBottom
                    >
                      Email :
                    </Typography>
                    <Typography
                      className={classes.rtxt1}
                      variant="body4"
                      gutterBottom
                    >
                      officialvaloempire@gmail.com
                    </Typography>
                  </Typography>
                  <Typography
                    className={classes.rtxt}
                    variant="body4"
                    gutterBottom
                  >
                   <i className="fab fa-discord dcicon"></i>
                    <Typography
                      className={classes.rtxtt}
                      variant="body4"
                      gutterBottom
                    >
                      Discord :
                    </Typography>
                    <Typography
                      className={classes.rtxt1}
                      variant="body4"
                      gutterBottom
                    >
                     XYhile#8207
                    </Typography>
                  </Typography>
                  <Typography
                    className={classes.rtxt}
                    variant="body4"
                    gutterBottom
                  >
                    <WhatsAppIcon className={classes.icon} />
                    <Typography
                      className={classes.rtxtt}
                      variant="body4"
                      gutterBottom
                    >
                      Whatsapp :
                    </Typography>
                    <Typography
                      className={classes.rtxt1}
                      variant="body4"
                      gutterBottom
                    >
                      7906661882
                    </Typography>
                  </Typography>
                </div>
              </div>
          
             
      
      </div>
      <Bottombar/>
     
     
    </>
  );
}
