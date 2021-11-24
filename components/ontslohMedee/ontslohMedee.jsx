import React from "react";
import { ReactDOM } from "react";

import { Carousel } from "@trendyol-js/react-carousel";
import medeeData from "../../data/medee.json";

import "./ontslohMedee.css";

const OntslohMedee = () => {
  return (
    <div className="medeeContainer">
      <Carousel show={5} slide={3} swiping={true} className="slider">
        {medeeData.map((el, index) => {
          return (
            <div className="medee" key={index}>
              <a
                href={el.link}
                style={{
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <div
                  className="backgroundImage"
                  style={{ backgroundImage: `url(${el.imageLink})` }}
                ></div>
              </a>
              <div className="descContainer">
                <a href="https://www.yolo.mn/z/6948" className="medeeTitle">
                  {el.description}
                </a>
                <a href="" className="medeeType">
                  {el.type}
                </a>
                <p className="medeeDesc">{el.about}</p>
                <div className="medeeReaction">
                  <div className="reaction-row-1">
                    <img
                      src="https://www.yolo.mn/stat/app/img/redheart.png"
                      alt="redHeart"
                      width="12px"
                      height="12px"
                    />
                    <div className="reactionText">{el.heartCount}</div>
                    <img
                      src="https://www.yolo.mn/stat/app/img/eye.png"
                      alt="eye"
                      width="12px"
                      height="10px"
                    />
                    <div className="reactionText">{el.seeCount}</div>
                  </div>
                  <div className="reaction-row-2">{el.hezee}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default OntslohMedee;
