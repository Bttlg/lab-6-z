import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./SecondPage.css";

import OntslohMedee from "../ontslohMedee/ontslohMedee";

import medeeData from "../../data/medee.json";

const SecondPage = () => {
  const duud = () => {
    console.log(medeeData);
  };
  return (
    <div className="homePageContainer">
      <div className="ontslohMedee2">
        <a href="https://www.yolo.mn/230" className="cata">
          <h1 className="cataChild">#Хувь хүний хөгжил</h1>
        </a>
      </div>
      <div className="ontslohMedee">
        <div className="medeeColor">ХУВЬ ХҮНИЙ ХӨГЖИЛ</div>
        <OntslohMedee />
        <OntslohMedee />
        <OntslohMedee />
        <OntslohMedee />
      </div>
    </div>
  );
};

export default SecondPage;
