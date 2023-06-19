import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import PostDetails from "./PostDetails";

const Posts = ({ firstPostName }) => {
  const [data, setData] = useState([]);
  const [selectedId, setSelecteId] = useState("");
  const [selectedFlag, setSelectedFlag] = useState(false);

  const fetchData = () => {
    axios
      .get("http://localhost:9999/api/v1/posts")
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleClick = (id) => {
    setSelectedFlag(true);
    setSelecteId(id);
  };

  useEffect(() => fetchData(), []);

  return (
    <div>
      {selectedFlag && <PostDetails selectedId={selectedId}></PostDetails>}
      {data.map((p) => {
        return <Post key={p.id} post={p} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Posts;
