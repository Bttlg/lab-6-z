import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./FirstPage.css";

import OntslohMedee from "../ontslohMedee/ontslohMedee";
import YoloVideo from "../yoloVideo/yoloVideo";

import medeeData from "../../data/medee.json";

const FirstPage = () => {
  return (
    <div className="homePageContainer">
      <div className="ontslohMedee">
        <div className="medeeColor">ОНЦЛОХ МЭДЭЭ</div>
        <OntslohMedee />
      </div>
      <div className="ontslohMedee">
        <div className="medeeColor">YOLO ВИДЕО</div>
        <YoloVideo />
      </div>
      <div className="ontslohMedee">
        <div className="medeeColor">ХАМГИЙН</div>
        <OntslohMedee />
      </div>
      <div className="ontslohMedee">
        <div className="medeeColor">ХҮСЛИЙН ЖАГСААЛТ</div>
        <OntslohMedee />
      </div>
    </div>
  );
};

export default FirstPage;
