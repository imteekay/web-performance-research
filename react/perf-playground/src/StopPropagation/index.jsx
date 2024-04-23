import React from "react";

export const StopPropagation = () => {
  const handleFirst = (event) => {
    event.stopPropagation();
    console.log("test 1");
  };

  const handleSecond = (event) => {
    console.log("test 2");
  };

  const handleClick = (event) => {
    handleFirst(event);
    handleSecond(event);
  };

  return (
    <div>
      <button onClick={handleClick}>Test</button>
    </div>
  );
};
