import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsFillBellFill, BsMessenger } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineHome,
  AiFillCaretDown,
} from "react-icons/Ai";
import { FiUsers } from "react-icons/Fi";
import { MdOutlineOndemandVideo } from "react-icons/Md";
import { HiOutlineUserGroup } from "react-icons/Hi";
import { CgMenuGridO } from "react-icons/cg";

import "./Navbar.css";

const Navbar = () => {
  const homeFocus = () => {
    var select = document.querySelector(".firstChild");
    select.classList.add("focus");
  };
  return (
    <div className="navbarContainer">
      <div className="row-1">
        <BsFacebook className="facebookIcon" />
        <div className="searchContainer">
          <AiOutlineSearch className="searchIcon" />
          <input
            type="search"
            className="searchInput"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="row-2">
        <Link
          to="/Body"
          className="iconItems firstChild focus"
          onClick={homeFocus}
        >
          <AiOutlineHome className="homeIcon" />
        </Link>

        <div className="iconItems">
          <FiUsers className="friendIcon" />
        </div>
        <div className="iconItems">
          <MdOutlineOndemandVideo className="videoIcon" />
        </div>
        <div className="iconItems">
          <AiOutlineShop className="shopIcon" />
        </div>
        <div className="iconItems">
          <HiOutlineUserGroup className="groupIcon" />
        </div>
      </div>
      <div className="row-3">
        <div className="profile">
          <a
            href="https://www.facebook.com/boloroo.ideal"
            className="myProfile"
          >
            <img
              src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/230655616_3031368647122304_4760625365906183685_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Bx6ESIuFmssAX-Mcvrd&tn=fSxRefxBAb73dOpM&_nc_ht=scontent.fuln2-2.fna&oh=00_AT8Xkh-0OD2pIsDSAAV_S9RVgEbn4OeAsSg4riuxLdQ5dQ&oe=61C361B3"
              alt="profilePic"
              className="profilePic"
            />
            <p className="profileName">Bol</p>
          </a>
        </div>
        <CgMenuGridO className="menuIcon" />
        <BsMessenger className="messengerIcon" />
        <BsFillBellFill className="notificationIcon" />
        <AiFillCaretDown className="settingsIcon" />
      </div>
    </div>
  );
};

export default Navbar;
