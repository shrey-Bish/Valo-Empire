import React, { useEffect, useState } from "react";
import Bottombar from "../../Components/Bottombar";
import Topbar from "../../Components/Topbar";
import "./buy.scss";
import axios from "axios";
import Card from "./Card";
import { phegif, phegif2, bannerleft, bannerright } from "../../Assets/icons";
import "tachyons";
import { Link } from "react-scroll";
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#353535",
    width: "100%",
    position: "relative",
    zIndex: 3,
    display: "",
  },
}));

export default function Buy() {
  const classes = useStyles();
  const theme = useTheme();
  const [card, setCard] = useState([]);
  const [skinCard, setskinCard] = useState([]);
  const [rankCard, setrankCard] = useState([]);
  const [allCard, setallCard] = useState([]);
  const [value, setValue] = React.useState(0);
  const switchrank = (valuee) => {
    switch (valuee) {
      case 0:
        return (
          <section id="caard">
            {allCard.map((eachcard) => (
              <Card eachcard={eachcard} />
            ))}
          </section>
        );
      case 2:
        return (
          <section id="caard">
            {skinCard.map((eachcard) => (
              <Card eachcard={eachcard} />
            ))}
          </section>
        );
      case 1:
        return (
          <section id="caard">
            {rankCard.map((eachcard) => (
              <Card eachcard={eachcard} />
            ))}
          </section>
        );
      default:
        break;
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  useEffect(() => {
    const getallcards = async () => {
      const res = await axios.get("/viewall");
      // console.log(res.data);
      setallCard(res.data);
      // console.log(card);
    };
    getallcards();
    const getskincards = async () => {
      const res = await axios.get("/viewskin");
      // console.log(res.data);
      setskinCard(res.data);
      // console.log(card);
    };
    getskincards();
    const getrankcards = async () => {
      const res = await axios.get("/viewrank");
      // console.log(res.data);
      setrankCard(res.data);
      // console.log(card);
    };
    getrankcards();
  }, []);

  return (
    <div className="sellpg">
      <Topbar />
      <div className="container">
        <div className="buy ">
          <section id="section07" className="demo">
            <div className="box">
              <div className="content">
                <div>
                  {" "}
                  <img className="bann1" src={bannerleft} alt="Banner" />
                </div>
                <div className="contentbanner">
                  <h1> Select</h1>
                  <h1> Connect</h1>
                  <h1> Buy !</h1>
                </div>
                <div>
                  {" "}
                  <img className="bann" src={bannerright} alt="Banner" />
                </div>
              </div>
            </div>

            <div className="scroll">
              <Link className="span" to="caard" spy={true} smooth={true}>
                Click here to Visit Store
              </Link>
              {/* <Link className="span" to="caard" spy={true} smooth={true}></Link>
            <Link className="span" to="caard" spy={true} smooth={true}></Link> */}
            </div>
          </section>
          <div className={classes.root}>
            <AppBar position="static" style={{ color: "white" }} color="white">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
              >
                <Tab
                  style={{ color: "white", backgroundColor: "#353535" }}
                  label="All"
                  {...a11yProps(0)}
                />
                <Tab
                  style={{ color: "white", backgroundColor: "#353535" }}
                  label="Rank Accounts"
                  {...a11yProps(1)}
                />
                <Tab
                  style={{ color: "white", backgroundColor: "#353535" }}
                  label="Skins"
                  {...a11yProps(2)}
                />
              </Tabs>
            </AppBar>
            {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        All
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        Rank Accounts
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        Skins
        </TabPanel>
      </SwipeableViews> */}
          </div>

          <section id="caard">{switchrank(value)}</section>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}
// {/* <section id="caard">
// {value===0 ?   allCard.map((eachcard) => (
//   <Card eachcard={eachcard} />
// )) : skinCard.map((eachcard) => (
//   <Card eachcard={eachcard} />
// )) }
// </section> */}
