import axios from "axios";
import React, { useEffect, useState } from "react";

const PostDetails = ({ selectedId }) => {
  const [details, setDetails] = useState([]);

  const fetchPostDetails = (id) => {
    axios
      .get("http://localhost:9999/api/v1/posts/" + id)
      .then((response) => setDetails(response.data))
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => fetchPostDetails(selectedId), [selectedId]);

  return (
    <div>
      <h3>PostDetails</h3>
      <h4>{details.id + " | " + details.title}</h4>
    </div>
  );
};

export default PostDetails;
