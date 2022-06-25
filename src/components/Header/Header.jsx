import React from "react";
import "./header.css";
import "../../styles/button.css";

import Logo from "../../assets/Logo.svg";

import Login from "./Login/Login";
import Logout from "./Logout/Logout";

function Header() {
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <a href="./">
              <img src={Logo} alt="My Blog" />
            </a>
          </h1>
          <ul>
            <Login />
            <Logout />
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
