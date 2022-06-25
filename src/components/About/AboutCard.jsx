import About from "./About";
import data from "../../data.json";

export default function AboutCard() {
  return (
    <aside className="about">
      <h2>About Me</h2>
      {data.users
        .filter((user) => user.id === 1)
        .map((user) => (
          <About
            key={user.id}
            email={user.email}
            profileImg={user.profileImg}
            name={user.name}
            userInfo={user.userInfo}
            category={user.category.map((categories) => (
              <li key={categories}>
                <a href="#">{categories}</a>
              </li>
            ))}
            sns={user.sns}
          />
        ))}
    </aside>
  );
}
