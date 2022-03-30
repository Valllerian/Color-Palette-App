import React, { useState } from "react";

const Color = (props) => {
  let random = props.color;
  return (
    <div id="test">
      <div
        style={{ backgroundColor: random }}
        className="text-white h-40 w-40"
      ></div>
    </div>
  );
};

export default Color;
