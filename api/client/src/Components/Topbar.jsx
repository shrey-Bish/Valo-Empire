import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { finallogo } from "../Assets/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    zIndex: "2",
  },

  searchIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginLeft: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  menu11: {
    // margin: "2px 5px",
    color: "#cd30c0",
    fontFamily: "Staatliches",
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
      width: "300px",
      height: "50px",
      fontSize: "30px",
      textAlign: "center"
    },
    [theme.breakpoints.up('md')]: {
     width: "300px",
     height: "50px",
     fontSize: "30px",
     textAlign: "center"
    },
    [theme.breakpoints.up('lg')]: {
      
    },
  },
  midtitle: {
    padding: "0 40px",
    fontFamily: "Staatliches",
    color: "#CFC5C5",
    "&:hover": {
      color: "#a574ff",
      webkitTransitionDuration: "color 1s ease",
      transition: "color 1s ease",
      cursor: "pointer",
    },
  },
  rittitle: {
    padding: "0 40px",
    fontFamily: "Staatliches",
    color: "#CFC5C5",
    "&:hover": {
      color: "#a574ff",
      webkitTransitionDuration: "color 1s ease",
      transition: "color 1s ease",
      cursor: "pointer",
    },
  },
  leftlogo: {
    [theme.breakpoints.down("lg")]: {
      alignItems: "center",
    },
  },
  hamenu:{
    [theme.breakpoints.down('sm')]: {
      
    },
    [theme.breakpoints.up('md')]: {
     
    },
    [theme.breakpoints.up('lg')]: {
      
    },
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      id={mobileMenuId}
      keepMounted
      
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.hamenu}
    >
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/buy">
        <MenuItem>
          <p className={classes.menu11}> Store</p>
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/sell">
        <MenuItem>
          <p className={classes.menu11}> Sell</p>
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/faq">
        <MenuItem onClick={handleProfileMenuOpen}>
          <p className={classes.menu11}> Faq</p>
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/about">
        <MenuItem onClick={handleProfileMenuOpen}>
          <p className={classes.menu11}> About us</p>
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/contact">
        <MenuItem onClick={handleProfileMenuOpen}>
          <p className={classes.menu11}> Contact us</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div>
      <AppBar
        position="static"
        style={{ width: "100%", backgroundColor: "#353535" }}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftlogo}>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              <img
                src={finallogo}
                alt="logo"
                style={{ width: "250px", height: "90px" }}
              ></img>
            </Link>
          </div>
          <div className={classes.searchIcon}>
            <Typography className={classes.midtitle} variant="h5" noWrap>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/buy"
              >
                {" "}
                Store
              </Link>
            </Typography>
            <Typography className={classes.midtitle} variant="h5" noWrap>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/sell"
              >
                {" "}
                Sell
              </Link>
            </Typography>
            <Typography className={classes.midtitle} variant="h5" noWrap>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/faq"
              >
                {" "}
                Faq
              </Link>
            </Typography>
          </div>

          <div className={classes.sectionDesktop}>
            <Typography className={classes.rittitle} variant="h5" noWrap>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/about"
              >
                {" "}
                About us
              </Link>
            </Typography>

            <Typography className={classes.rittitle} variant="h5" noWrap>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/contact"
              >
                {" "}
                Contact us
              </Link>
            </Typography>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
}
