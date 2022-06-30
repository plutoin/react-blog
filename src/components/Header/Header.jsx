import React, { useState } from "react";
import "./header.css";
import "../../styles/button.css";

import Login from "./Login/Login";

import Logo from "../../assets/Logo.svg";

function Header() {
  return (
    <header>
      <div className="max-width">
        <h1>
          <a href="./">
            <img src={Logo} alt="My Blog" />
          </a>
        </h1>
        <ul>
          <Login />
        </ul>
      </div>
    </header>
  );
}

export default Header;
