import React from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiExit } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img src="../../image/logo.png" height="100%" width="70%" />
        <p className="logoDesc">Өсвөр үе,залууст ...</p>
      </div>
      <div className="buttonContainer">
        <Link to="/firstPage">
          <button className="linkButton">ЭНТЕРТАЙНМЕНТ</button>
        </Link>
        <Link to="/firstPage">
          <button className="linkButton">БОЛОВСРОЛ</button>
        </Link>
        <Link to="/secondPage">
          <button className="linkButton">ХУВЬ ХҮНИЙ ХӨГЖИЛ</button>
        </Link>
        <Link to="/secondPage">
          <button className="linkButton">ЯРИЛЦЛАГА</button>
        </Link>
        <Link to="/secondPage">
          <button className="linkButton">СОНИН ХАЧИН</button>
        </Link>
        <Link to="/secondPage">
          <button className="linkButton">ЗӨВЛӨГӨӨ</button>
        </Link>
        <Link to="/secondPage">
          <button className="linkButton">КОМИК</button>
        </Link>
        <span className="searchIcon">
          <BiSearch />
        </span>
        <span className="exitIcon">
          <BiExit />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
