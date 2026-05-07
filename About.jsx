import React from "react";

import plan from "../img/plan.png";
import manage from "../img/manage.png";
import build from "../img/build.png";


export default function About(){
    return(
        <section className="about">

        <div className="about-header">
          <h2>OUR STORY</h2>
          <div className="line"></div>
        </div>

        <div className="about-container">

          <div className="about-left">
            <h3>
              Founded in 2011 by John Mathew Smith,{" "}
              <span>Konstruct</span> has become the number one construction
              management firm
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>

          
          <div className="about-right">

            <div className="card">
              <img src={plan} alt="" />
              <div className="overlay">WE PLAN</div>
            </div>

            <div className="card">
              <img src={manage} alt="" />
              <div className="overlay">WE MANAGE</div>
            </div>

            <div className="card">
              <img src={build} alt="" />
              <div className="overlay">WE BUILD</div>
            </div>

          </div>

        </div>
      </section>

    )
}