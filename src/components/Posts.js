import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = ({ firstPostName }) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        id: 111,
        title: firstPostName ? firstPostName : "React",
        author: "John Doe",
      },
      { id: 112, title: "React2", author: "John Doe" },
    ]);
  }, [firstPostName]);

  return (
    <div>
      {Posts.map((p) => {
        return <Post key={p.id} post={p} />;
      })}
    </div>
  );
};

export default Posts;
