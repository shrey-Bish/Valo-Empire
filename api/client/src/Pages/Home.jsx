import React from "react";
import "./home.scss";
import Bottombar from "../Components/Bottombar";
import Topbar from "../Components/Topbar";
import "tachyons";
import { knife } from "../Assets/icons";
import { bullet } from "../Assets/icons";
import { operator } from "../Assets/icons";

// import ParticlesBackground from "./particle";

import {useEffect, useRef} from 'react';
import { init } from 'ityped';
import { Link } from "react-router-dom";

export default function Home() {
    const textref = useRef();
    useEffect(() => {
        init(textref.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Select", "Connect", "Buy"],
          });
    }, []);
  return (
    <>
 
 <Topbar />
      <div className="home">
    
        <div className="afaf">
          <h3 className="lh-solid">
            A Trustable <br /> way to trade<span style={{color: '#a574ff'}}> <br />
            VALORANT <br /></span> accounts
          </h3>
          <div className="ity">
            <span ref={textref}></span>
            </div>
        
        <div className="buttonsss">
        <button className="button button--mimas"><span><Link style={{ textDecoration: "none", color: "inherit" }} to="/sell"> Sell</Link> </span></button>
        <button className="button button--mimas1"><span><Link style={{ textDecoration: "none", color: "inherit" }} to="/buy"> Buy</Link> </span></button>
       
        </div>
        </div>
          <div className="backim">

          <img
            className="img1"
            src={operator}
            alt="OP"
            border="0"
          />

          <img
            className="img2"
            src={knife}
            alt="KNIFE"
            border="0"
          />
        </div>
      

        <div className="bullets ">
          <span className="bullet">
            <img
              src={bullet}
              alt="BULLET"
              border="0"
              height="40px"
            />
            <figcaption className="caption">100% Secure</figcaption>
          </span>

          <span className="bullet">
            <img
              src={bullet}
              alt="BULLET"
              border="0"
              height="40px"
            />
            <figcaption className="caption">
        
               Free listing
            </figcaption>
          </span>

          <span className="bullet">
            <img
              src={bullet}
              alt="BULLET"
              border="0"
              height="40px"
            />
            <figcaption className="caption">
              List without SignUp
            </figcaption>
          </span>

          <span className="bullet">
            <img
              src={bullet}
              alt="BULLET"
              border="0"
              height="40px"
            />
            <figcaption className="caption">
              List in few seconds
            </figcaption>
          </span>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
