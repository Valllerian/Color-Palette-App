import React, { useState } from "react";
import "./color.css";
const Color = (props) => {
  const [newColor, setNewColor] = useState();
  let random = props.color;

  const newRandom = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let color = "#" + randomColor;
    setNewColor(color);
    return;
  };

  return (
    <div id="test" className="relative">
      <div
        style={{ backgroundColor: newColor ? newColor : random }}
        className="text-white h-40 w-40 tile"
        onClick={newRandom}
      >
        <div className="absolute bottom-0 border-b-4 border-l-4 border-white-500 w-20 pl-1">
          <p>Color:</p>
          <p>{newColor ? newColor : random}</p>
        </div>
      </div>
    </div>
  );
};

export default Color;
