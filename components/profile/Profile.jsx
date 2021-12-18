import React from "react";
import ReactDom from "react-dom";

import { Link, useParams } from "react-router-dom";

import { AiOutlinePhone } from "react-icons/Ai";

import "./Profile.css";

const Profile = ({ location }) => {
  const userData = location.state.data;
  return (
    <div className="profileContainer">
      <div>
        <img
          src="https://media.istockphoto.com/photos/colorful-background-picture-id1280385511?b=1&k=20&m=1280385511&s=170667a&w=0&h=4-KMkIqgyw2gTBMTBbYZVZoidwRsWZzr3q0xyUDYhas="
          alt=""
          className="coverImage"
        />
      </div>
      <div className="profileColumn-2">
        <img src={userData.picture} alt="" className="userProfileImage" />
        <div className="userAbout">
          <h3 className="userName">{`${userData.lastName} ${userData.firstName}`}</h3>
          <p className="userBio">{userData.title.toUpperCase()}</p>
        </div>
        <div className="editProfile">
          <Link to={`/UserPost/${userData.id}`}>
            <button className="editButton">Пост харах</button>
          </Link>
        </div>
      </div>
      <div className="profileColumn-3">
        <div className="userPhone">
          <AiOutlinePhone className="phoneIcon" /> : 88780778
        </div>
      </div>
    </div>
  );
};

export default Profile;
