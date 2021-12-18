import React from "react";
import ReactDOM from "react-dom";

import "./Header.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  HashRouter,
  Redirect,
} from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";
import Body from "../body/Body";
import UserPost from "../userPost/UserPost";

const Header = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <HashRouter>
      <Navbar />
      <div className="componentContainer">
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/Body" component={Body} />
          <Route path="/Profile/:id" component={Profile} />
          <Route path="/UserPost/:id" component={UserPost} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Header;
