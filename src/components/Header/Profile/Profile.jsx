import "./profile.css";
import profileImg from "../../../assets/profile.jpg";

export default function Profile() {
  return (
    <li className="profile-img">
      <a href="#">
        <img src={profileImg} alt="My Page" />
      </a>
    </li>
  );
}
