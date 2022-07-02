import "./banner.css";
import { useLocation } from "react-router-dom";
import data from "../../data.json";
import PostViewBg from "../../assets/post-background6.jpg";

const BackgroundImg = {
  backgroundImage: `url(${PostViewBg})`
};

export default function Banner() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <div className="banner">
          <div className="max-width">
            <div className="banner-contents">
              <p className="sub-text">{data.blog.subTitle}</p>
              <p className="main-text">{data.blog.mainTitle}</p>
              <p className="description">{data.blog.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="banner" style={BackgroundImg}>
          <div className="max-width">
            <div className="banner-contents">
              <p className="today">
                May <em>25</em> Wednesday
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
