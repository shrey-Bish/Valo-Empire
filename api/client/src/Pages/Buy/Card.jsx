import { Backdrop, Button, Fade, makeStyles, Modal } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import React, { useEffect, useState } from "react";
import "tachyons";
import CancelIcon from "@material-ui/icons/Cancel";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
  v11,
  v12,
  v13,
  v14,
  v15,
  v16,
  v17,
  v18,
  v19,
  v20,
  v21,
  v22,
  v23,
  v24,
  v25,
  v26,
} from "../../Assets/icons";
import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
} from "../../Assets/icons";
import {
  o1,
  o2,
  o3,
  o4,
  o5,
  o6,
  o7,
  o8,
  o9,
  o10,
  o11,
  o12,
  o13,
  o14,
  o15,
  o16,
  o17,
  o18,
  o19,
  o20,
  o21,
} from "../../Assets/icons";
import {
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
} from "../../Assets/icons";
import {
  od1,
  od2,
  od3,
  od4,
  od5,
  od6,
  od7,
  od8,
  od9,
  od10,
} from "../../Assets/icons";
import {
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
} from "../../Assets/icons";
import {
  b1,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  b9,
  b10,
  b11,
  b12,
} from "../../Assets/icons";
import {
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
} from "../../Assets/icons";
import {
  j1,
  j2,
  j3,
  j4,
  j5,
  j6,
  j7,
  j8,
  j9,
  j10,
  j11,
  j12,
  j13,
  j14,
  j15,
} from "../../Assets/icons";
import {
  bu1,
  bu2,
  bu3,
  bu4,
  bu5,
  bu6,
  bu7,
  bu8,
  bu9,
  bu10,
  bu11,
  bu12,
  bu13,
  bu14,
  bu15,
  bu16,
  bu17,
} from "../../Assets/icons";
import {
  st1,
  st2,
  st3,
  st4,
  st5,
  st6,
  st7,
  st8,
  st9,
  st10,
  st11,
  st12,
  st13,
} from "../../Assets/icons";
import {
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
  s20,
  s21,
  s22,
  s23,
} from "../../Assets/icons";
import {
  sh1,
  sh2,
  sh3,
  sh4,
  sh5,
  sh6,
  sh7,
  sh8,
  sh9,
} from "../../Assets/icons";
import {
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  f10,
  f11,
  f12,
  f13,
  f14,
  f15,
} from "../../Assets/icons";
import {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
} from "../../Assets/icons";
import {
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
  t16,
  t17,
  t18,
  t19,
  t20,
  t21,
  t22,
} from "../../Assets/icons";
import {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10,
  h11,
  h12,
  h13,
  h14,
  h15,
  h16,
  h17,
  h18,
  h19,
  h20,
  h21,
  h22,
} from "../../Assets/icons";
import {
  x1,
  x2,
  x3,
  x4,
  x5,
  x6,
  x7,
  x8,
  x9,
  x10,
  x11,
  x12,
  x13,
  x14,
  x15,
  x16,
  x17,
  x18,
  x19,
  x20,
  x21,
  x22,
  x23,
  x24,
  x25,
  x26,
  x27,
  x28,
  x29,
  x30,
  x31,
  x32,
  x33,
  x34,
  x35,
  x36,
  x37,
} from "../../Assets/icons";
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
    width: "85vw",
    margin: "auto",
    marginTop: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      overflowX: "scroll",
      height: "80vh",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      width: "100%",
      // overflowX: "scroll",
      height: "60vh",
    },
    // [theme.breakpoints.between('md', 'lg')]: {
    //   width: "100%",
    //   overflowX: "scroll",
    //   height: "100vh",
    // },
  },
  paper: {
    backgroundColor: "#fao5656076",

    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    width: "85vw",
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      overflowX: "scroll",
      height: "80vh",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      width: "100%",
      // overflowX: "scroll",
      height: "60vh",
    },
    // [theme.breakpoints.between('md', 'lg')]: {
    //   width: "100%",
    //   overflowX: "scroll",
    //   height: "100vh",
    // },
  },
  button: {
    position: "absolute",
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
      // bottom: "120px",
      // left: "30px",
    },
    "@media screen and (min-width: 961px) and (max-width: 1280px)": {
      position: "absolute",
      // bottom: "120px",
      // left: "30px",
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
    color: "red",
    opacity: "0.5",
    "&:hover": {
      opacity: "1",
    },
    [theme.breakpoints.down("sm")]: {
      top: "5px",
      left: "5px",
    },
  },
  namecell:{
    padding: "1.2rem!important",
    "@media screen and (min-width: 0px) and (max-width: 600px)": {
      padding: "0.2rem!important",
    },
  }
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
        return <img src={v2} alt="rank" width="120px" height="40px" />;
      case "v3":
        return <img src={v3} alt="rank" width="120px" height="40px" />;
      case "v4":
        return <img src={v4} alt="rank" width="120px" height="40px" />;
      case "v5":
        return <img src={v5} alt="rank" width="120px" height="40px" />;
      case "v6":
        return <img src={v6} alt="rank" width="120px" height="40px" />;
      case "v7":
        return <img src={v7} alt="rank" width="120px" height="40px" />;
      case "v8":
        return <img src={v8} alt="rank" width="120px" height="40px" />;
      case "v9":
        return <img src={v9} alt="rank" width="120px" height="40px" />;
      case "v10":
        return <img src={v10} alt="rank" width="120px" height="40px" />;
      case "v11":
        return <img src={v11} alt="rank" width="120px" height="40px" />;
      case "v12":
        return <img src={v12} alt="rank" width="120px" height="40px" />;
      case "v13":
        return <img src={v13} alt="rank" width="120px" height="40px" />;
      case "v14":
        return <img src={v14} alt="rank" width="120px" height="40px" />;
      case "v15":
        return <img src={v15} alt="rank" width="120px" height="40px" />;
      case "v16":
        return <img src={v16} alt="rank" width="120px" height="40px" />;
      case "v17":
        return <img src={v17} alt="rank" width="120px" height="40px" />;
      case "v18":
        return <img src={v18} alt="rank" width="120px" height="40px" />;
      case "v19":
        return <img src={v19} alt="rank" width="120px" height="40px" />;
      case "v20":
        return <img src={v20} alt="rank" width="120px" height="40px" />;
      case "v21":
        return <img src={v21} alt="rank" width="120px" height="40px" />;
      case "v22":
        return <img src={v22} alt="rank" width="120px" height="40px" />;
      case "v23":
        return <img src={v23} alt="rank" width="120px" height="40px" />;
      case "v24":
        return <img src={v24} alt="rank" width="120px" height="40px" />;
      case "v25":
        return <img src={v25} alt="rank" width="120px" height="40px" />;
      case "v26":
        return <img src={v26} alt="rank" width="120px" height="40px" />;
      case "p1":
        return <img src={p1} alt="rank" width="120px" height="40px" />;
      case "p2":
        return <img src={p2} alt="rank" width="120px" height="40px" />;
      case "p3":
        return <img src={p3} alt="rank" width="120px" height="40px" />;
      case "p4":
        return <img src={p4} alt="rank" width="120px" height="40px" />;
      case "p5":
        return <img src={p5} alt="rank" width="120px" height="40px" />;
      case "p6":
        return <img src={p6} alt="rank" width="120px" height="40px" />;
      case "p7":
        return <img src={p7} alt="rank" width="120px" height="40px" />;
      case "p8":
        return <img src={p8} alt="rank" width="120px" height="40px" />;
      case "p9":
        return <img src={p9} alt="rank" width="120px" height="40px" />;
      case "p10":
        return <img src={p10} alt="rank" width="120px" height="40px" />;
      case "p11":
        return <img src={p11} alt="rank" width="120px" height="40px" />;
      case "p12":
        return <img src={p12} alt="rank" width="120px" height="40px" />;
      case "p13":
        return <img src={p13} alt="rank" width="120px" height="40px" />;
      case "p14":
        return <img src={p14} alt="rank" width="120px" height="40px" />;
      case "p15":
        return <img src={p15} alt="rank" width="120px" height="40px" />;
      case "p16":
        return <img src={p16} alt="rank" width="120px" height="40px" />;
      case "p17":
        return <img src={p17} alt="rank" width="120px" height="40px" />;
      case "p18":
        return <img src={p18} alt="rank" width="120px" height="40px" />;
      case "p19":
        return <img src={p19} alt="rank" width="120px" height="40px" />;
      case "p20":
        return <img src={p20} alt="rank" width="120px" height="40px" />;
      case "p21":
        return <img src={p21} alt="rank" width="120px" height="40px" />;
      case "p22":
        return <img src={p22} alt="rank" width="120px" height="40px" />;
      case "p23":
        return <img src={p23} alt="rank" width="120px" height="40px" />;
      case "p24":
        return <img src={p24} alt="rank" width="120px" height="40px" />;
      case "p25":
        return <img src={p25} alt="rank" width="120px" height="40px" />;
      case "p26":
        return <img src={p26} alt="rank" width="120px" height="40px" />;
      case "m1":
        return <img src={m1} alt="rank" width="120px" height="40px" />;
      case "m2":
        return <img src={m2} alt="rank" width="120px" height="40px" />;
      case "m3":
        return <img src={m3} alt="rank" width="120px" height="40px" />;
      case "m4":
        return <img src={m4} alt="rank" width="120px" height="40px" />;
      case "m5":
        return <img src={m5} alt="rank" width="120px" height="40px" />;
      case "m6":
        return <img src={m6} alt="rank" width="120px" height="40px" />;
      case "m7":
        return <img src={m7} alt="rank" width="120px" height="40px" />;
      case "m8":
        return <img src={m8} alt="rank" width="120px" height="40px" />;
      case "m9":
        return <img src={m9} alt="rank" width="120px" height="40px" />;
      case "m10":
        return <img src={m10} alt="rank" width="120px" height="40px" />;
      case "m11":
        return <img src={m11} alt="rank" width="120px" height="40px" />;
      case "m12":
        return <img src={m12} alt="rank" width="120px" height="40px" />;
      case "o1":
        return <img src={o1} alt="rank" width="120px" height="40px" />;
      case "o2":
        return <img src={o2} alt="rank" width="120px" height="40px" />;
      case "o3":
        return <img src={o3} alt="rank" width="120px" height="40px" />;
      case "o4":
        return <img src={o4} alt="rank" width="120px" height="40px" />;
      case "o5":
        return <img src={o5} alt="rank" width="120px" height="40px" />;
      case "o6":
        return <img src={o6} alt="rank" width="120px" height="40px" />;
      case "o7":
        return <img src={o7} alt="rank" width="120px" height="40px" />;
      case "o8":
        return <img src={o8} alt="rank" width="120px" height="40px" />;
      case "o9":
        return <img src={o9} alt="rank" width="120px" height="40px" />;
      case "o10":
        return <img src={o10} alt="rank" width="120px" height="40px" />;
      case "o11":
        return <img src={o11} alt="rank" width="120px" height="40px" />;
      case "o12":
        return <img src={o12} alt="rank" width="120px" height="40px" />;
      case "o13":
        return <img src={o13} alt="rank" width="120px" height="40px" />;
      case "o14":
        return <img src={o14} alt="rank" width="120px" height="40px" />;
      case "o15":
        return <img src={o15} alt="rank" width="120px" height="40px" />;
      case "o16":
        return <img src={o16} alt="rank" width="120px" height="40px" />;
      case "o17":
        return <img src={o17} alt="rank" width="120px" height="40px" />;
      case "o18":
        return <img src={o18} alt="rank" width="120px" height="40px" />;
      case "o19":
        return <img src={o19} alt="rank" width="120px" height="40px" />;
      case "o20":
        return <img src={o20} alt="rank" width="120px" height="40px" />;
      case "o21":
        return <img src={o21} alt="rank" width="120px" height="40px" />;
      case "od1":
        return <img src={od1} alt="rank" width="120px" height="40px" />;
      case "od2":
        return <img src={od2} alt="rank" width="120px" height="40px" />;
      case "od3":
        return <img src={od3} alt="rank" width="120px" height="40px" />;
      case "od4":
        return <img src={od4} alt="rank" width="120px" height="40px" />;
      case "od5":
        return <img src={od5} alt="rank" width="120px" height="40px" />;
      case "od6":
        return <img src={od6} alt="rank" width="120px" height="40px" />;
      case "od7":
        return <img src={od7} alt="rank" width="120px" height="40px" />;
      case "od8":
        return <img src={od8} alt="rank" width="120px" height="40px" />;
      case "od9":
        return <img src={od9} alt="rank" width="120px" height="40px" />;
      case "od10":
        return <img src={od10} alt="rank" width="120px" height="40px" />;
      case "a1":
        return <img src={a1} alt="rank" width="120px" height="40px" />;
      case "a2":
        return <img src={a2} alt="rank" width="120px" height="40px" />;
      case "a3":
        return <img src={a3} alt="rank" width="120px" height="40px" />;
      case "a4":
        return <img src={a4} alt="rank" width="120px" height="40px" />;
      case "a5":
        return <img src={a5} alt="rank" width="120px" height="40px" />;
      case "a6":
        return <img src={a6} alt="rank" width="120px" height="40px" />;
      case "a7":
        return <img src={a7} alt="rank" width="120px" height="40px" />;
      case "a8":
        return <img src={a8} alt="rank" width="120px" height="40px" />;
      case "a9":
        return <img src={a9} alt="rank" width="120px" height="40px" />;
      case "a10":
        return <img src={a10} alt="rank" width="120px" height="40px" />;
      case "a11":
        return <img src={a11} alt="rank" width="120px" height="40px" />;
      case "a12":
        return <img src={a12} alt="rank" width="120px" height="40px" />;
      case "a13":
        return <img src={a13} alt="rank" width="120px" height="40px" />;
      case "a14":
        return <img src={a14} alt="rank" width="120px" height="40px" />;
      case "b1":
        return <img src={b1} alt="rank" width="120px" height="40px" />;
      case "b2":
        return <img src={b2} alt="rank" width="120px" height="40px" />;
      case "b3":
        return <img src={b3} alt="rank" width="120px" height="40px" />;
      case "b4":
        return <img src={b4} alt="rank" width="120px" height="40px" />;
      case "b5":
        return <img src={b5} alt="rank" width="120px" height="40px" />;
      case "b6":
        return <img src={b6} alt="rank" width="120px" height="40px" />;
      case "b7":
        return <img src={b7} alt="rank" width="120px" height="40px" />;
      case "b8":
        return <img src={b8} alt="rank" width="120px" height="40px" />;
      case "b9":
        return <img src={b9} alt="rank" width="120px" height="40px" />;
      case "b10":
        return <img src={b10} alt="rank" width="120px" height="40px" />;
      case "b11":
        return <img src={b11} alt="rank" width="120px" height="40px" />;
      case "b12":
        return <img src={b12} alt="rank" width="120px" height="40px" />;
      case "g1":
        return <img src={g1} alt="rank" width="120px" height="40px" />;
      case "g2":
        return <img src={g2} alt="rank" width="120px" height="40px" />;
      case "g3":
        return <img src={g3} alt="rank" width="120px" height="40px" />;
      case "g4":
        return <img src={g4} alt="rank" width="120px" height="40px" />;
      case "g5":
        return <img src={g5} alt="rank" width="120px" height="40px" />;
      case "g6":
        return <img src={g6} alt="rank" width="120px" height="40px" />;
      case "g7":
        return <img src={g7} alt="rank" width="120px" height="40px" />;
      case "g8":
        return <img src={g8} alt="rank" width="120px" height="40px" />;
      case "g9":
        return <img src={g9} alt="rank" width="120px" height="40px" />;
      case "g10":
        return <img src={g10} alt="rank" width="120px" height="40px" />;
      case "g11":
        return <img src={g11} alt="rank" width="120px" height="40px" />;
      case "g12":
        return <img src={g12} alt="rank" width="120px" height="40px" />;
      case "g13":
        return <img src={g13} alt="rank" width="120px" height="40px" />;
      case "g14":
        return <img src={g14} alt="rank" width="120px" height="40px" />;
      case "g15":
        return <img src={g15} alt="rank" width="120px" height="40px" />;
      case "g16":
        return <img src={g16} alt="rank" width="120px" height="40px" />;
      case "g17":
        return <img src={g17} alt="rank" width="120px" height="40px" />;
      case "g18":
        return <img src={g18} alt="rank" width="120px" height="40px" />;
      case "g19":
        return <img src={g19} alt="rank" width="120px" height="40px" />;
      case "j1":
        return <img src={j1} alt="rank" width="120px" height="40px" />;
      case "j2":
        return <img src={j2} alt="rank" width="120px" height="40px" />;
      case "j3":
        return <img src={j3} alt="rank" width="120px" height="40px" />;
      case "j4":
        return <img src={j4} alt="rank" width="120px" height="40px" />;
      case "j5":
        return <img src={j5} alt="rank" width="120px" height="40px" />;
      case "j6":
        return <img src={j6} alt="rank" width="120px" height="40px" />;
      case "j7":
        return <img src={j7} alt="rank" width="120px" height="40px" />;
      case "j8":
        return <img src={j8} alt="rank" width="120px" height="40px" />;
      case "j9":
        return <img src={j9} alt="rank" width="120px" height="40px" />;
      case "j10":
        return <img src={j10} alt="rank" width="120px" height="40px" />;
      case "j11":
        return <img src={j11} alt="rank" width="120px" height="40px" />;
      case "j12":
        return <img src={j12} alt="rank" width="120px" height="40px" />;
      case "j13":
        return <img src={j13} alt="rank" width="120px" height="40px" />;
      case "j14":
        return <img src={j14} alt="rank" width="120px" height="40px" />;
      case "j15":
        return <img src={j15} alt="rank" width="120px" height="40px" />;
      case "bu1":
        return <img src={bu1} alt="rank" width="120px" height="40px" />;
      case "bu2":
        return <img src={bu2} alt="rank" width="120px" height="40px" />;
      case "bu3":
        return <img src={bu3} alt="rank" width="120px" height="40px" />;
      case "bu4":
        return <img src={bu4} alt="rank" width="120px" height="40px" />;
      case "bu5":
        return <img src={bu5} alt="rank" width="120px" height="40px" />;
      case "bu6":
        return <img src={bu6} alt="rank" width="120px" height="40px" />;
      case "bu7":
        return <img src={bu7} alt="rank" width="120px" height="40px" />;
      case "bu8":
        return <img src={bu8} alt="rank" width="120px" height="40px" />;
      case "bu9":
        return <img src={bu9} alt="rank" width="120px" height="40px" />;
      case "bu10":
        return <img src={bu10} alt="rank" width="120px" height="40px" />;
      case "bu11":
        return <img src={bu11} alt="rank" width="120px" height="40px" />;
      case "bu12":
        return <img src={bu12} alt="rank" width="120px" height="40px" />;
      case "bu13":
        return <img src={bu13} alt="rank" width="120px" height="40px" />;
      case "bu14":
        return <img src={bu14} alt="rank" width="120px" height="40px" />;
      case "bu15":
        return <img src={bu15} alt="rank" width="120px" height="40px" />;
      case "bu16":
        return <img src={bu16} alt="rank" width="120px" height="40px" />;
      case "bu17":
        return <img src={bu17} alt="rank" width="120px" height="40px" />;
      case "st1":
        return <img src={st1} alt="rank" width="120px" height="40px" />;
      case "st2":
        return <img src={st2} alt="rank" width="120px" height="40px" />;
      case "st3":
        return <img src={st3} alt="rank" width="120px" height="40px" />;
      case "st4":
        return <img src={st4} alt="rank" width="120px" height="40px" />;
      case "st5":
        return <img src={st5} alt="rank" width="120px" height="40px" />;
      case "st6":
        return <img src={st6} alt="rank" width="120px" height="40px" />;
      case "st7":
        return <img src={st7} alt="rank" width="120px" height="40px" />;
      case "st8":
        return <img src={st8} alt="rank" width="120px" height="40px" />;
      case "st9":
        return <img src={st9} alt="rank" width="120px" height="40px" />;
      case "st10":
        return <img src={st10} alt="rank" width="120px" height="40px" />;
      case "st11":
        return <img src={st11} alt="rank" width="120px" height="40px" />;
      case "st12":
        return <img src={st12} alt="rank" width="120px" height="40px" />;
      case "st13":
        return <img src={st13} alt="rank" width="120px" height="40px" />;
      case "s1":
        return <img src={s1} alt="rank" width="120px" height="40px" />;
      case "s2":
        return <img src={s2} alt="rank" width="120px" height="40px" />;
      case "s3":
        return <img src={s3} alt="rank" width="120px" height="40px" />;
      case "s4":
        return <img src={s4} alt="rank" width="120px" height="40px" />;
      case "s5":
        return <img src={s5} alt="rank" width="120px" height="40px" />;
      case "s6":
        return <img src={s6} alt="rank" width="120px" height="40px" />;
      case "s7":
        return <img src={s7} alt="rank" width="120px" height="40px" />;
      case "s8":
        return <img src={s8} alt="rank" width="120px" height="40px" />;
      case "s9":
        return <img src={s9} alt="rank" width="120px" height="40px" />;
      case "s10":
        return <img src={s10} alt="rank" width="120px" height="40px" />;
      case "s11":
        return <img src={s11} alt="rank" width="120px" height="40px" />;
      case "s12":
        return <img src={s12} alt="rank" width="120px" height="40px" />;
      case "s13":
        return <img src={s13} alt="rank" width="120px" height="40px" />;
      case "s14":
        return <img src={s14} alt="rank" width="120px" height="40px" />;
      case "s15":
        return <img src={s15} alt="rank" width="120px" height="40px" />;
      case "s16":
        return <img src={s16} alt="rank" width="120px" height="40px" />;
      case "s17":
        return <img src={s17} alt="rank" width="120px" height="40px" />;
      case "s18":
        return <img src={s18} alt="rank" width="120px" height="40px" />;
      case "s19":
        return <img src={s19} alt="rank" width="120px" height="40px" />;
      case "s20":
        return <img src={s20} alt="rank" width="120px" height="40px" />;
      case "s21":
        return <img src={s21} alt="rank" width="120px" height="40px" />;
      case "s22":
        return <img src={s22} alt="rank" width="120px" height="40px" />;
      case "s23":
        return <img src={s23} alt="rank" width="120px" height="40px" />;
      case "sh1":
        return <img src={sh1} alt="rank" width="120px" height="40px" />;
      case "sh2":
        return <img src={sh2} alt="rank" width="120px" height="40px" />;
      case "sh3":
        return <img src={sh3} alt="rank" width="120px" height="40px" />;
      case "sh4":
        return <img src={sh4} alt="rank" width="120px" height="40px" />;
      case "sh5":
        return <img src={sh5} alt="rank" width="120px" height="40px" />;
      case "sh6":
        return <img src={sh6} alt="rank" width="120px" height="40px" />;
      case "sh7":
        return <img src={sh7} alt="rank" width="120px" height="40px" />;
      case "sh8":
        return <img src={sh8} alt="rank" width="120px" height="40px" />;
      case "sh9":
        return <img src={sh9} alt="rank" width="120px" height="40px" />;
      case "f1":
        return <img src={f1} alt="rank" width="120px" height="40px" />;
      case "f2":
        return <img src={f2} alt="rank" width="120px" height="40px" />;
      case "f3":
        return <img src={f3} alt="rank" width="120px" height="40px" />;
      case "f4":
        return <img src={f4} alt="rank" width="120px" height="40px" />;
      case "f5":
        return <img src={f5} alt="rank" width="120px" height="40px" />;
      case "f6":
        return <img src={f6} alt="rank" width="120px" height="40px" />;
      case "f7":
        return <img src={f7} alt="rank" width="120px" height="40px" />;
      case "f8":
        return <img src={f8} alt="rank" width="120px" height="40px" />;
      case "f9":
        return <img src={f9} alt="rank" width="120px" height="40px" />;
      case "f10":
        return <img src={f10} alt="rank" width="120px" height="40px" />;
      case "f11":
        return <img src={f11} alt="rank" width="120px" height="40px" />;
      case "f12":
        return <img src={f12} alt="rank" width="120px" height="40px" />;
      case "f13":
        return <img src={f13} alt="rank" width="120px" height="40px" />;
      case "f14":
        return <img src={f14} alt="rank" width="120px" height="40px" />;
      case "f15":
        return <img src={f15} alt="rank" width="120px" height="40px" />;
      case "c1":
        return <img src={c1} alt="rank" width="120px" height="40px" />;
      case "c2":
        return <img src={c2} alt="rank" width="120px" height="40px" />;
      case "c3":
        return <img src={c3} alt="rank" width="120px" height="40px" />;
      case "c4":
        return <img src={c4} alt="rank" width="120px" height="40px" />;
      case "c5":
        return <img src={c5} alt="rank" width="120px" height="40px" />;
      case "c6":
        return <img src={c6} alt="rank" width="120px" height="40px" />;
      case "c7":
        return <img src={c7} alt="rank" width="120px" height="40px" />;
      case "c8":
        return <img src={c8} alt="rank" width="120px" height="40px" />;
      case "c9":
        return <img src={c9} alt="rank" width="120px" height="40px" />;
      case "c10":
        return <img src={c10} alt="rank" width="120px" height="40px" />;
      case "c11":
        return <img src={c11} alt="rank" width="120px" height="40px" />;
      case "c12":
        return <img src={c12} alt="rank" width="120px" height="40px" />;
      case "c13":
        return <img src={c13} alt="rank" width="120px" height="40px" />;
      case "c14":
        return <img src={c14} alt="rank" width="120px" height="40px" />;
      case "c15":
        return <img src={c15} alt="rank" width="120px" height="40px" />;
      case "c16":
        return <img src={c16} alt="rank" width="120px" height="40px" />;
      case "c17":
        return <img src={c17} alt="rank" width="120px" height="40px" />;
      case "c18":
        return <img src={c18} alt="rank" width="120px" height="40px" />;
      case "c19":
        return <img src={c19} alt="rank" width="120px" height="40px" />;
      case "t1":
        return <img src={t1} alt="rank" width="120px" height="40px" />;
      case "t2":
        return <img src={t2} alt="rank" width="120px" height="40px" />;
      case "t3":
        return <img src={t3} alt="rank" width="120px" height="40px" />;
      case "t4":
        return <img src={t4} alt="rank" width="120px" height="40px" />;
      case "t5":
        return <img src={t5} alt="rank" width="120px" height="40px" />;
      case "t6":
        return <img src={t6} alt="rank" width="120px" height="40px" />;
      case "t7":
        return <img src={t7} alt="rank" width="120px" height="40px" />;
      case "t8":
        return <img src={t8} alt="rank" width="120px" height="40px" />;
      case "t9":
        return <img src={t9} alt="rank" width="120px" height="40px" />;
      case "t10":
        return <img src={t10} alt="rank" width="120px" height="40px" />;
      case "t11":
        return <img src={t11} alt="rank" width="120px" height="40px" />;
      case "t12":
        return <img src={t12} alt="rank" width="120px" height="40px" />;
      case "t13":
        return <img src={t13} alt="rank" width="120px" height="40px" />;
      case "t14":
        return <img src={t14} alt="rank" width="120px" height="40px" />;
      case "t15":
        return <img src={t15} alt="rank" width="120px" height="40px" />;
      case "t16":
        return <img src={t16} alt="rank" width="120px" height="40px" />;
      case "t17":
        return <img src={t17} alt="rank" width="120px" height="40px" />;
      case "t18":
        return <img src={t18} alt="rank" width="120px" height="40px" />;
      case "t19":
        return <img src={t19} alt="rank" width="120px" height="40px" />;
      case "t20":
        return <img src={t20} alt="rank" width="120px" height="40px" />;
      case "t21":
        return <img src={t21} alt="rank" width="120px" height="40px" />;
      case "t22":
        return <img src={t22} alt="rank" width="120px" height="40px" />;
      case "h1":
        return <img src={h1} alt="rank" width="120px" height="40px" />;
      case "h2":
        return <img src={h2} alt="rank" width="120px" height="40px" />;
      case "h3":
        return <img src={h3} alt="rank" width="120px" height="40px" />;
      case "h4":
        return <img src={h4} alt="rank" width="120px" height="40px" />;
      case "h5":
        return <img src={h5} alt="rank" width="120px" height="40px" />;
      case "h6":
        return <img src={h6} alt="rank" width="120px" height="40px" />;
      case "h7":
        return <img src={h7} alt="rank" width="120px" height="40px" />;
      case "h8":
        return <img src={h8} alt="rank" width="120px" height="40px" />;
      case "h9":
        return <img src={h9} alt="rank" width="120px" height="40px" />;
      case "h10":
        return <img src={h10} alt="rank" width="120px" height="40px" />;
      case "h11":
        return <img src={h11} alt="rank" width="120px" height="40px" />;
      case "h12":
        return <img src={h12} alt="rank" width="120px" height="40px" />;
      case "h13":
        return <img src={h13} alt="rank" width="120px" height="40px" />;
      case "h14":
        return <img src={h14} alt="rank" width="120px" height="40px" />;
      case "h15":
        return <img src={h15} alt="rank" width="120px" height="40px" />;
      case "h16":
        return <img src={h16} alt="rank" width="120px" height="40px" />;
      case "h17":
        return <img src={h17} alt="rank" width="120px" height="40px" />;
      case "h18":
        return <img src={h18} alt="rank" width="120px" height="40px" />;
      case "h19":
        return <img src={h19} alt="rank" width="120px" height="40px" />;
      case "h20":
        return <img src={h20} alt="rank" width="120px" height="40px" />;
      case "h21":
        return <img src={h21} alt="rank" width="120px" height="40px" />;
      case "h22":
        return <img src={h22} alt="rank" width="120px" height="40px" />;
      case "x1":
        return <img src={x1} alt="rank" width="120px" height="40px" />;
      case "x2":
        return <img src={x2} alt="rank" width="120px" height="40px" />;
      case "x3":
        return <img src={x3} alt="rank" width="120px" height="40px" />;
      case "x4":
        return <img src={x4} alt="rank" width="120px" height="40px" />;
      case "x5":
        return <img src={x5} alt="rank" width="120px" height="40px" />;
      case "x6":
        return <img src={x6} alt="rank" width="120px" height="40px" />;
      case "x7":
        return <img src={x7} alt="rank" width="120px" height="40px" />;
      case "x8":
        return <img src={x8} alt="rank" width="120px" height="40px" />;
      case "x9":
        return <img src={x9} alt="rank" width="120px" height="40px" />;
      case "x10":
        return <img src={x10} alt="rank" width="120px" height="40px" />;
      case "x11":
        return <img src={x11} alt="rank" width="120px" height="40px" />;
      case "x12":
        return <img src={x12} alt="rank" width="120px" height="40px" />;
      case "x13":
        return <img src={x13} alt="rank" width="120px" height="40px" />;
      case "x14":
        return <img src={x14} alt="rank" width="120px" height="40px" />;
      case "x15":
        return <img src={x15} alt="rank" width="120px" height="40px" />;
      case "x16":
        return <img src={x16} alt="rank" width="120px" height="40px" />;
      case "x17":
        return <img src={x17} alt="rank" width="120px" height="40px" />;
      case "x18":
        return <img src={x18} alt="rank" width="120px" height="40px" />;
      case "x19":
        return <img src={x19} alt="rank" width="120px" height="40px" />;
      case "x20":
        return <img src={x20} alt="rank" width="120px" height="40px" />;
      case "x21":
        return <img src={x21} alt="rank" width="120px" height="40px" />;
      case "x22":
        return <img src={x22} alt="rank" width="120px" height="40px" />;
      case "x23":
        return <img src={x23} alt="rank" width="120px" height="40px" />;
      case "x24":
        return <img src={x24} alt="rank" width="120px" height="40px" />;
      case "x25":
        return <img src={x25} alt="rank" width="120px" height="40px" />;
      case "x26":
        return <img src={x26} alt="rank" width="120px" height="40px" />;
      case "x27":
        return <img src={x27} alt="rank" width="120px" height="40px" />;
      case "x28":
        return <img src={x28} alt="rank" width="120px" height="40px" />;
      case "x29":
        return <img src={x29} alt="rank" width="120px" height="40px" />;
      case "x30":
        return <img src={x30} alt="rank" width="120px" height="40px" />;
      case "x31":
        return <img src={x31} alt="rank" width="120px" height="40px" />;
      case "x32":
        return <img src={x32} alt="rank" width="120px" height="40px" />;
      case "x33":
        return <img src={x33} alt="rank" width="120px" height="40px" />;
      case "x34":
        return <img src={x34} alt="rank" width="120px" height="40px" />;
      case "x35":
        return <img src={x35} alt="rank" width="120px" height="40px" />;
      case "x36":
        return <img src={x36} alt="rank" width="120px" height="40px" />;
      case "x37":
        return <img src={x37} alt="rank" width="120px" height="40px" />;

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
          <div >
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
         {eachcard.selected.length? <button
            onClick={() => {
              handleOpen();
            }}
            className="details"
          >
            View Skins
          </button>:""} 
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
            {/* <div className="uppermodal">
            
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
            </div> */}
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
                      <td
                        // className={classes.namecell}
                      >
                        {switchimage(home.name)}
                      </td>
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
