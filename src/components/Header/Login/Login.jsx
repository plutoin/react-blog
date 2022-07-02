import "./login.css";
import "./logout.css";
import { useState } from "react";

import modifyWhite from "../../../assets/icon-modify-white.svg";
import LogoutIcon from "../../../assets/icon-logout.svg";
import registerIcon from "../../../assets/icon-register.svg";
import LoginIcon from "../../../assets/icon-login.svg";

import Profile from "../Profile/Profile";

function LogoutBtn() {
  return (
    <a href="#" className="button gray">
      <img src={LoginIcon} alt="" />
      <span>Login</span>
    </a>
  );
}

function RegisterBtn() {
  return (
    <li className="only-pc">
      <a href="#" className="button gray">
        <img src={registerIcon} alt="" />
        <span>Register</span>
      </a>
    </li>
  );
}

function LoginBtn() {
  return (
    <button className="button white">
      <img src={LogoutIcon} alt="" />
      <span>Logout</span>
    </button>
  );
}

function WriteBtn() {
  return (
    <>
      <li>
        <a href="#" className="button">
          <img src={modifyWhite} alt="" />
          <span>Write</span>
        </a>
      </li>
    </>
  );
}

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin && <Profile />}
      {isLogin && <WriteBtn />}
      <li
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? <LoginBtn /> : <LogoutBtn />}
      </li>
      {!isLogin && <RegisterBtn />}
    </>
  );
}
