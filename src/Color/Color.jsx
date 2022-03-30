import React from "react";
import './color.css'
const Color = (props) => {
  let random = props.color;

  const newRandom = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let newColor = "#" + randomColor;
    return newColor
  }

//   newColor ? random=newColor : console.log("hi")

  return (
    <div id="test">
      <div
        style={{ backgroundColor: random }}
        className="text-white h-40 w-40 tile"
        onClick={newRandom}
      ></div>
    </div>
  );
};

export default Color;
