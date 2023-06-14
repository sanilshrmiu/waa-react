import React from "react";

const ChangeFirstPostInput = ({ setFirstPostName }) => {
  const [textBoxValue, setTextBoxValue] = React.useState("");

  return (
    <div>
      <input
        placeholder="Title"
        type="text"
        name="title"
        onChange={(event) => setTextBoxValue(event?.target?.value)}
      />
      <button
        onClick={() => {
          setFirstPostName(textBoxValue);
        }}
      >
        Change Title
      </button>
    </div>
  );
};

export default ChangeFirstPostInput;
