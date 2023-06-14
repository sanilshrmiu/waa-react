import React, { useState } from "react";
import Posts from "../components/Posts";
import ChangeFirstPostInput from "../components/ChangeFirstPostInput";

const Dashboard = () => {
  const [firstPostName, setFirstPostName] = useState("");

  return (
    <div className="container">
      <Posts firstPostName={firstPostName} />
      <ChangeFirstPostInput setFirstPostName={setFirstPostName} />
    </div>
  );
};

export default Dashboard;
