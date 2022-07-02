export default function Post(props) {
  return (
    <li>
      <a href="/post-view" className="post">
        <article>
          <img src={`${process.env.PUBLIC_URL}${props.thumbnailImg}`} alt="" />
          <div className="contents-wrap">
            {/* <!-- category --> */}
            <dl className="category">
              <dt className="a11y-hidden">Category</dt>
              {props.category}
            </dl>
            {/* <!-- //category --> */}

            <h3>{props.title}</h3>

            {/* <!-- author --> */}
            <dl className="author-wrap">
              <dt className="a11y-hidden">Category</dt>
              <dd className="author">
                <img
                  src={`${process.env.PUBLIC_URL}${props.profileImg}`}
                  alt=""
                />{" "}
                Chilli
              </dd>
              <dt className="a11y-hidden">Created</dt>
              <dd className="created">{props.created}</dd>
            </dl>
            {/* <!-- //author --> */}

            <p className="post-description">{props.contents}</p>
          </div>
        </article>
      </a>
    </li>
  );
}
