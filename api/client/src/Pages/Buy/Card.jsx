import { Backdrop, Button, Fade, makeStyles, Modal } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import React, { useEffect, useState } from "react";
import "tachyons";
import CancelIcon from "@material-ui/icons/Cancel";
import InstagramIcon from "@material-ui/icons/Instagram";
import { v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26 } from '../../Assets/icons';
 import { p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26 } from '../../Assets/icons';
 import { o1,o2,o3, o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14,o15,o16,o17,o18,o19,o20,o21 } from '../../Assets/icons';
 import { m1,m2,m3, m4,m5,m6,m7,m8,m9,m10,m11,m12} from '../../Assets/icons';
 import { od1,od2,od3,od4,od5,od6,od7,od8,od9,od10} from '../../Assets/icons';
 import { a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14} from '../../Assets/icons';
 import { b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12} from '../../Assets/icons';
 import { g1,g2,g3, g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19} from '../../Assets/icons';
 import { j1,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11,j12,j13,j14,j15} from '../../Assets/icons';
 import { bu1,bu2,bu3, bu4,bu5,bu6,bu7,bu8,bu9,bu10,bu11,bu12,bu13,bu14,bu15,bu16,bu17} from '../../Assets/icons';
 import { st1,st2,st3, st4,st5,st6,st7,st8,st9,st10,st11,st12,st13} from '../../Assets/icons';
 import {s1,s2 ,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,s23} from '../../Assets/icons';
 import {  sh1,sh2,sh3, sh4,sh5,sh6,sh7,sh8,sh9} from '../../Assets/icons';
 import {     f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15} from '../../Assets/icons';
 import {      c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19} from '../../Assets/icons';
 import { t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22} from '../../Assets/icons';
 import {  h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22} from '../../Assets/icons';
 import {     x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37} from '../../Assets/icons';
import {
  radianitepoints,
  Immortal1,
  Immortal2,
  Immortal3,
  Gold1,
  Gold2,
  Gold3,
  Platinum1,
  Platinum2,
  Platinum3,
  Diamond1,
  Diamond2,
  Diamond3,
  Silver1,
  Silver2,
  Silver3,
  Bronze1,
  Bronze2,
  Bronze3,
  Iron3,
  Iron2,
  Iron1,
  unrankedvalo,
  RadiantRank,
} from "../../Assets/icons";
import { Valorant_Points } from "../../Assets/icons";
import "./card.scss";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    width: "65vw",
    margin: "auto",
    marginTop: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      overflowX: "scroll",
      height: "100vh",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      width: "100%",
      overflowX: "scroll",
      height: "100vh",
    },
    // [theme.breakpoints.between('md', 'lg')]: {
    //   width: "100%",
    //   overflowX: "scroll",
    //   height: "100vh",
    // },
  },
  paper: {
    backgroundColor: "white",
    // backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    width: "65vw",
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      overflowX: "scroll",
      height: "100vh",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      width: "100%",
      overflowX: "scroll",
      height: "100vh",
    },
    // [theme.breakpoints.between('md', 'lg')]: {
    //   width: "100%",
    //   overflowX: "scroll",
    //   height: "100vh",
    // },
  },
  button: {
    backgroundColor: "#FF4130",
    color: "white",
    height: "3.5rem",
    marginTop: theme.spacing(2),
    width: "9rem",
    fontFamily: "Dosis",
    fontSize: "20px",
    opacity: "0.8",
    "&:hover": {
      backgroundColor: "#FF4130",
      opacity: "1",
    },

    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: "120px",
      left: "30px",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      position: "absolute",
      bottom: "120px",
      left: "30px",
    },
  },
  button2: {
    backgroundColor: "#13CAA8",
    color: "white",
    height: "3.5rem",
    marginTop: theme.spacing(2),
    width: "9rem",
    fontFamily: "Dosis",
    fontSize: "20px",
    opacity: "0.8",
    cursor: "none",
    "&:hover": {
      backgroundColor: "#13CAA8",
      opacity: "1",
    },

    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: "120px",
      left: "30px",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      position: "absolute",
      bottom: "120px",
      left: "30px",
    },
  },
  button2copy: {
    backgroundColor: "#13CAA8",
    color: "white",
    height: "3.5rem",
    marginTop: theme.spacing(2),
    width: "9rem",
    fontFamily: "Dosis",
    fontSize: "20px",
    opacity: "0.8",
    cursor: "none",
    "&:hover": {
      backgroundColor: "#13CAA8",
      opacity: "1",
    },

    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: "120px",
      right: "30px",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      position: "absolute",
      bottom: "120px",
      right: "30px",
    },
  },
  button3: {
    border: "none",
    color: " white",
    backgroundColor: " #3366CC",
    fontFamily: "Dosis",
    cursor: "none",
    fontSize: "1.2rem",
    "&:hover": {
      backgroundColor: " #3366CC",
      border: "none",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      position: "absolute",
      right: "20px",
     
    },
  },
  cancel: {
    position: "absolute",
    right: "5px",
    top: "5px",
    cursor: "pointer",
    fontSize: "30px",
    color: "black",
    opacity: "0.5",
    "&:hover": {
      opacity: "1",
    },
    [theme.breakpoints.down("sm")]: {
      top: "5px",
      left: "5px",
    },
  },
}));
export default function Card({ eachcard }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [totalskins, settotalskins] = React.useState(0);
  const [finalprice, setfinalprice] = React.useState(0);
  const [onecard, setoneCard] = useState([]);
  // const [rankkkk, setrankkkk] = useState(eachcard.Rank);
  const handleOpen = async () => {
    const res = await axios.get(`/viewaccount/${eachcard.DisplayName}`);
    // console.log(res.data);
    setoneCard(res.data);
    // console.log(onecard.selected[0],"onecard.selected");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(() => {

  //   var length = eachcard.selected.length;
  //   settotalskins(length);
  //   if(eachcard.selected.length===0){
  //     settotalskins(0);
  //   }
  //   const pr1ce = Math.floor(Number(0.02 * eachcard.Price));
  //   const pr2ce = Number(pr1ce + eachcard.Price);
  //   // console.log(eachcard.Price);
  //   // console.log(pr1ce);
  //   // console.log(pr2ce);
  //   setfinalprice(pr2ce);
  // }, []);

  const switchrank = (rankkkk) => {
    switch (rankkkk) {
      case "Radiant":
        return <img src={RadiantRank} alt="rank" width="90px" height="90px" />;
      case "Immortal3":
        return <img src={Immortal3} alt="rank" width="90px" height="90px" />;
      case "Immortal2":
        return <img src={Immortal2} alt="rank" width="90px" height="90px" />;
      case "Immortal1":
        return <img src={Immortal1} alt="rank" width="90px" height="90px" />;
      case "Diamond 3":
        return <img src={Diamond3} alt="rank" width="90px" height="90px" />;
      case "Diamond 2":
        return <img src={Diamond2} alt="rank" width="90px" height="90px" />;
      case "Diamond 1":
        return <img src={Diamond1} alt="rank" width="90px" height="90px" />;
      case "Platinum 3":
        return <img src={Platinum3} alt="rank" width="90px" height="90px" />;
      case "Platinum 2":
        return <img src={Platinum2} alt="rank" width="90px" height="90px" />;
      case "Platinum 1":
        return <img src={Platinum1} alt="rank" width="90px" height="90px" />;
      case "Gold 3":
        return <img src={Gold3} alt="rank" width="90px" height="90px" />;
      case "Gold 2":
        return <img src={Gold2} alt="rank" width="90px" height="90px" />;
      case "Gold 1":
        return <img src={Gold1} alt="rank" width="90px" height="90px" />;
      case "Silver 3":
        return <img src={Silver3} alt="rank" width="90px" height="90px" />;
      case "Silver 2":
        return <img src={Silver2} alt="rank" width="90px" height="90px" />;
      case "Silver 1":
        return <img src={Silver1} alt="rank" width="90px" height="90px" />;
      case "Bronze 3":
        return <img src={Bronze3} alt="rank" width="90px" height="90px" />;
      case "Bronze 2":
        return <img src={Bronze2} alt="rank" width="90px" height="90px" />;
      case "Bronze 1":
        return <img src={Bronze1} alt="rank" width="90px" height="90px" />;
      case "Iron 3":
        return <img src={Iron3} alt="rank" width="90px" height="90px" />;
      case "Iron 2":
        return <img src={Iron2} alt="rank" width="90px" height="90px" />;
      case "Iron 1":
        return <img src={Iron1} alt="rank" width="90px" height="90px" />;
      case "Unranked":
        return <img src={unrankedvalo} alt="rank" width="90px" height="90px" />;
      default:
        break;
    }
  };
  const switchimage = (namee) => {
    switch (namee) {
      case "v1":
        return <img src={v1} alt="rank" width="120px" height="40px" />;
      case "v2":
        return <img src={v2} alt="rank"  width="120px" height="40px"/>;
      case "v3":
        return <img src={v4} alt="rank" width="90px" height="90px" />;
      case "v4":
        return <img src={v5} alt="rank" width="90px" height="90px" />;
      case "v5":
        return <img src={v6} alt="rank" width="90px" height="90px" />;
      case "v6":
        return <img src={Diamond2} alt="rank" width="90px" height="90px" />;
      case "Diamond 1":
        return <img src={Diamond1} alt="rank" width="90px" height="90px" />;
      case "Platinum 3":
        return <img src={Platinum3} alt="rank" width="90px" height="90px" />;
      case "Platinum 2":
        return <img src={Platinum2} alt="rank" width="90px" height="90px" />;
      case "Platinum 1":
        return <img src={Platinum1} alt="rank" width="90px" height="90px" />;
      case "Gold 3":
        return <img src={Gold3} alt="rank" width="90px" height="90px" />;
      case "Gold 2":
        return <img src={Gold2} alt="rank" width="90px" height="90px" />;
      case "Gold 1":
        return <img src={Gold1} alt="rank" width="90px" height="90px" />;
      case "Silver 3":
        return <img src={Silver3} alt="rank" width="90px" height="90px" />;
      case "Silver 2":
        return <img src={Silver2} alt="rank" width="90px" height="90px" />;
      case "Silver 1":
        return <img src={Silver1} alt="rank" width="90px" height="90px" />;
      case "Bronze 3":
        return <img src={Bronze3} alt="rank" width="90px" height="90px" />;
      case "Bronze 2":
        return <img src={Bronze2} alt="rank" width="90px" height="90px" />;
      case "Bronze 1":
        return <img src={Bronze1} alt="rank" width="90px" height="90px" />;
      case "Iron 3":
        return <img src={Iron3} alt="rank" width="90px" height="90px" />;
      case "Iron 2":
        return <img src={Iron2} alt="rank" width="90px" height="90px" />;
      case "Iron 1":
        return <img src={Iron1} alt="rank" width="90px" height="90px" />;
      case "Unranked":
        return <img src={unrankedvalo} alt="rank" width="90px" height="90px" />;
      default:
        break;
    }
  };

  return (
    <div className="box">
      <div className="card ">
        <div className="info">
          <div className="circle"></div>
          <div className="tag">₹ {eachcard.Price}</div>
          <div className="skins">
            Total Skins Owned: {eachcard.selected.length}
          </div>
          <div className="divider">
            {" "}
            <hr className="separator separator--dots" />
          </div>
          <div className="bio">
            <div className="flex justify-center">
              <div className="flex justify-betwwen">
                <img
                  src={radianitepoints}
                  alt="Radianite Points"
                  width="30px"
                  height="30px"
                />
                <p className="ml2 mr3  fw6 f3 b" style={{ color: "black" }}>
                  {eachcard.Radianite}
                </p>
              </div>

              <div className="flex justify-between">
                <img
                  className="valopts"
                  src={Valorant_Points}
                  alt="Valorant Points"
                  width="30px"
                  height="30px"
                />
                <p className="ml2 red fw6 f3 b" style={{ color: "black" }}>
                  {" "}
                  {eachcard.ValorantP}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              handleOpen();
            }}
            className="details"
          >
            DETAILS
          </button>{" "}
        </div>
        <div className="Photo"> {switchrank(eachcard.Rank)}</div>
        <div className="buttonnn black">{eachcard.DisplayName}</div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="uppermodal">
              {/* <div className="circle"></div> */}
              {/* <div className="tag">₹ {eachcard.Price}</div> */}
              <div style={{ display: "flex", flexDirection: "column" }}>
               
                <div className="name3">
                  <Button
                    className={classes.button3}
                    variant="outlined"
                    color="secondary"
                  >
                    <img
                      src={radianitepoints}
                      alt="Radianite Points"
                      width="20px"
                      height="20px"
                    />
                    <div style={{ marginLeft: "1rem" }}>
                      {onecard.Radianite}
                    </div>
                  </Button>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button2copy}
                >
                  ₹ {eachcard.Price}
                </Button>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="name1">{onecard.DisplayName}</div>
                <div className="rankdiv">{switchrank(onecard.Rank)}</div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
               
                <div className="name2">
                  <Button
                    className={classes.button3}
                    variant="outlined"
                    color="secondary"
                  >
                    <img
                      className="valopts"
                      src={Valorant_Points}
                      alt="Valorant Points"
                      width="20px"
                      height="20px"
                    />
                    <div style={{ marginLeft: "1rem" }}>
                      {onecard.ValorantP}
                    </div>
                  </Button>
                  
                </div>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.instagram.com/valoempire/"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<InstagramIcon>Buy</InstagramIcon>}
                  >
                    Buy
                  </Button>
                </a>
              </div>
            </div>
            <CancelIcon
              className={classes.cancel}
              onClick={handleClose}
            ></CancelIcon>
            {eachcard.selected.length !== 0 ? (
              <div id="style-2">
                <table
                  cellspacing="0"
                  cellpadding="0"
                  className="styled-table"
                  border="none"
                >
                   
                   <tr> 
                    <td className="captionss">Skins</td>
                    {eachcard.selected.map((home) => (
                     <td className="captionss">{switchimage(home.name)}</td>
                    ))}
                  </tr>
                  <tr> 
                    <td className="captionss">Collection</td>
                    {eachcard.selected.map((home) => (
                      <td>{home.Collection}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="captionss">Weapon</td>
                    {eachcard.selected.map((home) => (
                      <td>{home.Weapon}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="captionss">Source</td>
                    {eachcard.selected.map((home) => (
                      <td>{home.Source}</td>
                    ))}
                  </tr>
                </table>
              </div>
            ) : (
              ""
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
