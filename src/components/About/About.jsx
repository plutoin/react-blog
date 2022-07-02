import "./about.css";

import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import GitHub from "../../assets/Github.svg";

export default function About(props) {
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}${props.profileImg}`}
        alt=""
        className="user-profile"
      />
      <p className="user-name">{props.name}</p>
      <p className="user-description">{props.userInfo}</p>
      <h3>Categories</h3>
      <ul className="categories">{props.category}</ul>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={GitHub} alt="GitHub" />
          </a>
        </li>
      </ul>
    </>
  );
}
