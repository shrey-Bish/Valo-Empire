import React, { useEffect, useState } from "react";
import Bottombar from "../../Components/Bottombar";
import Topbar from "../../Components/Topbar";
import "./buy.scss";
import axios from "axios";
import Card from "./Card";
import {  phegif, phegif2 } from "../../Assets/icons";
import "tachyons";
import { Link } from "react-scroll";

export default function Buy() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const getallcards = async () => {
      const res = await axios.get("/viewall");
      // console.log(res.data);
      setCard(res.data);
      // console.log(card);
    };
    getallcards();
  }, []);

  return (
    <>
      <Topbar />
      <div className="buy ">
        <section id="section07" className="demo">
          <div className="box">
            <div className="content">
              <img className="bann1" src={phegif2} alt="Banner" />
              <div className="contentbanner">
                <h1> Select</h1>
                <h2> Connect</h2>
                <h3> Buy !</h3>
              </div>
              <img className="bann" src={phegif} alt="Banner" />
            </div>
          </div>
          <div className="scroll">
            <Link className="span" to="caard" spy={true} smooth={true}></Link>
            <Link className="span" to="caard" spy={true} smooth={true}></Link>
            <Link className="span" to="caard" spy={true} smooth={true}></Link>
          </div>
        </section>

        <section id="caard">
          {card.map((eachcard) => (
            <Card eachcard={eachcard} />
          ))}
        </section>
      </div>
      <Bottombar />
    </>
  );
}
