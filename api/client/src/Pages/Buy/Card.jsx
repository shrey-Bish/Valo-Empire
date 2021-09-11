import { Backdrop, Button, Fade, makeStyles, Modal } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import React, { useEffect, useState } from "react";
import "tachyons";
import CancelIcon from "@material-ui/icons/Cancel";
import InstagramIcon from '@material-ui/icons/Instagram';
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
    backgroundColor: "black",
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
    backgroundColor: "#a574ff",
    color: "black",
    height: "3.5rem",
    marginTop: theme.spacing(2),
    width: "9rem",
    fontFamily: "Dosis",
    fontSize: "20px",
    opacity: "1",
    "&:hover": {
      backgroundColor: "#a574ff",
      opacity: "0.5",
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
  cancel: {
    position: "absolute",
    right: "5px",
    top: "5px",
    cursor: "pointer",
    fontSize: "30px",
    color: "red",
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
  useEffect(() => {
    const length = eachcard.selected.length;
    settotalskins(length);

    const pr1ce = Math.floor(Number(0.02 * eachcard.Price));
    const pr2ce = Number(pr1ce + eachcard.Price);
    // console.log(eachcard.Price);
    // console.log(pr1ce);
    // console.log(pr2ce);
    setfinalprice(pr2ce);
  }, []);

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

  return (
    <div className="box">
      <div className="card ">
        <div className="info">
          <div className="circle"></div>
          <div className="tag">₹ {finalprice}</div>
          <div className="skins">Total Skins Owned: {totalskins}</div>
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
              <div className="tag">₹ {finalprice}</div>
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
              <div className="rankdiv">{switchrank(onecard.Rank)}</div>

              <div className="name1">ID: {onecard.DisplayName}</div>
              <div className="name3">
                <img
                  src={radianitepoints}
                  alt="Radianite Points"
                  width="30px"
                  height="30px"
                />
                <div>{onecard.Radianite}</div>
              </div>
              <div className="name2">
                <img
                  className="valopts"
                  src={Valorant_Points}
                  alt="Valorant Points"
                  width="30px"
                  height="30px"
                />
                <div>{onecard.ValorantP}</div>
              </div>
            </div>
            <CancelIcon
              className={classes.cancel}
              onClick={handleClose}
            ></CancelIcon>
            <div id="style-2">
              <table
                cellspacing="0"
                cellpadding="0"
                className="styled-table"
                border="none"
              >
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
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
