import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const Posts = ({ firstPostName }) => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     setData([
  //       {
  //         id: 111,
  //         title: firstPostName ? firstPostName : "React",
  //         author: "John Doe",
  //       },
  //       { id: 112, title: "React2", author: "John Doe" },
  //     ]);
  //   }, [firstPostName]);

  const fetchData = () => {
    console.log("call");
    axios
      .get("http://localhost:9990/api/v1/users")
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => fetchData(), []);

  return (
    <div>
      {data.map((p) => {
        return <Post key={p.id} post={p} />;
      })}
    </div>
  );
};

export default Posts;
