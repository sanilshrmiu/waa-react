import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>
            {props.post.id} | {props.post.title}
          </b>
        </h4>
        <p>{props.post.author}</p>
      </div>
    </div>
  );
};

export default Post;
