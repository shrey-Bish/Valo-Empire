import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
 middle:{
     display: 'flex',
     backgroundColor : "#353535",
     height: "100px",
     alignItems : "center",
     justifyContent : "center",
  
 },

 rtxtt :{
  padding: theme.spacing(1),
  fontFamily: "Hahmlet",
  color : "#CFC5C5",
  fontSize : "12px",
  marginBottom : "0px",
 }


}));

export default function Bottombar() {
  const classes = useStyles();

  return (
   
     
       
          <div style={{width:"100%" ,height:"40px",backgroundColor:"#353535",}}className={classes.middle}>
         
          <Typography
                      className={classes.rtxtt}
                      variant="body4"
                      gutterBottom
                    >
                      © 2021, valoempire.in
                    </Typography>
         
       
          </div>
      
   
  );
}