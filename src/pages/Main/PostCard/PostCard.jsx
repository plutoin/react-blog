import "./posts.css";
import "./post.css";
import "../../../styles/category.css";
import "../../../styles/author.css";

import Post from "./Post";
import AboutCard from "../../../components/About/AboutCard";

import data from "../../../data.json";

export default function PostCard() {
  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <ul className="posts">
          {data.posts.map((post) => (
            <Post
              key={post.id}
              thumbnailImg={post.thumbnail}
              title={post.title}
              profileImg={post.profileImg}
              created={post.created}
              category={post.category.map((category) => (
                <dd key={category}>{category}</dd>
              ))}
              contents={post.contents[0].text}
            />
          ))}
        </ul>
        <AboutCard />
      </div>
    </main>
  );
}
