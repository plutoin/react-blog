import "./logout.css";
import registerIcon from "../../../assets/icon-register.svg";
import LoginIcon from "../../../assets/icon-login.svg";

export default function Logout() {
  return (
    <>
      <li>
        <a href="#" className="button gray">
          <img src={LoginIcon} alt="" />
          <span>Login</span>
        </a>
      </li>
      <li className="only-pc">
        <a href="#" className="button gray">
          <img src={registerIcon} alt="" />
          <span>Register</span>
        </a>
      </li>
    </>
  );
}
