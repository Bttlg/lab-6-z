import React from "react";
import { ReactDOM } from "react";
import "./yoloVideo.css";
import list1 from "../../data/list1.json";
import list2 from "../../data/list2.json";
import list3 from "../../data/list3.json";

import { BiPlayCircle } from "react-icons/bi";
import { FaShare } from "react-icons/fa";

import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const YoloVideo = () => {
  const tabName = ["ХӨГЖИЛТЭЙ", "ХЭРЭГТЭЙ", "СОНИРХОЛТОЙ"];
  return (
    <div className="yoloVideoContainer">
      <div className="yoloVideoRow-1">
        <iframe
          width="100%"
          height="400px"
          frameborder="0"
          src="https://www.youtube.com/embed/Rl0Zp_a-3uE"
        />
      </div>
      <div className="yoloVideoRow-2">
        <TabsComponent style={{ width: "96%" }}>
          <TabList
            style={{
              borderBottomColor: "#ababab",
              backgroundColor: "#f8e71c",
              borderRadius: "3px",
            }}
          >
            {tabName.map((el, index) => (
              <Tab
                key={index}
                style={{
                  paddingTop: "12px",
                  border: "1px",
                  borderRadius: "3px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 1px 5px",
                  marginTop: "-1px",
                  height: "32px",
                  margin: "0px 2px 0px 0px",
                }}
              >
                {el}
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            {list1.map((el, index) => (
              <div className="tabElementContainer">
                <div className="tabElement">
                  {index + 1}. {el}
                </div>
                <span className="playIcon">
                  <BiPlayCircle />
                </span>
                <span className="shareIcon">
                  <FaShare />
                </span>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            {list2.map((el, index) => (
              <div className="tabElementContainer">
                <div className="tabElement">
                  {index + 1}. {el}
                </div>
                <span className="playIcon">
                  <BiPlayCircle />
                </span>
                <span className="shareIcon">
                  <FaShare />
                </span>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            {list3.map((el, index) => (
              <div className="tabElementContainer">
                <div className="tabElement">
                  {index + 1}. {el}
                </div>
                <span className="playIcon">
                  <BiPlayCircle />
                </span>
                <span className="shareIcon">
                  <FaShare />
                </span>
              </div>
            ))}
          </TabPanel>
        </TabsComponent>
      </div>
    </div>
  );
};

export default YoloVideo;
