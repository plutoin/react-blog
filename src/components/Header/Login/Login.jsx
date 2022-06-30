import "./login.css";
import { useState } from "react";

import Profile from "../../../assets/profile.jpg";
import modifyWhite from "../../../assets/icon-modify-white.svg";
import LogoutIcon from "../../../assets/icon-logout.svg";

export default function Login() {
  return (
    <>
      <li className="profile-img">
        <a href="#">
          <img src={Profile} alt="My Page" />
        </a>
      </li>
      <li>
        <a href="#" className="button">
          <img src={modifyWhite} alt="" />
          <span>Write</span>
        </a>
      </li>
      <li>
        <button className="button white">
          <img src={LogoutIcon} alt="" />
          <span>Logout</span>
        </button>
      </li>
    </>
  );
}
