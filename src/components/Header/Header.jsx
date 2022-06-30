import React, { useState } from "react";
import "./header.css";
import "../../styles/button.css";

import Login from "./Login/Login";
import Logout from "./Logout/Logout";

import Logo from "../../assets/Logo.svg";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header>
      <div className="max-width">
        <h1>
          <a href="./">
            <img src={Logo} alt="My Blog" />
          </a>
        </h1>
        <ul
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? <Login /> : <Logout />}
        </ul>
      </div>
    </header>
  );
}

export default Header;
