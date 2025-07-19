import React from "react";
import Bottombar from "../Components/Bottombar";
import Topbar from "../Components/Topbar";
import "./about.scss";
import { jettgif } from "../Assets/icons";
export default function About() {
  return (
    <div className="aboutpg">
      <Topbar />
      <div className="about">
        <div className="container">
          <div className="content-left">
            <h2>About us </h2>
            <p>
              We at ValoEmpire believes in making a difference. No matter how
              small or big it is, we shall continue to pursue innovative ideas
              that can change the world and do wonders for the gaming community.
              At ValoEmpire, our mission is to continuously evolve in the gaming
              community and provide a reliable digital platform where gamers
              don’t only game harder, but can buy and sell freely with ease.
              ValoEmpire provides a comprehensive online marketplace solution
              for gamers to buy and sell anything gaming related with absolute
              peace of mind.{" "}
            </p>
          </div>

          <div className="container-right">
            <img src={jettgif} alt="logo" />
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}
