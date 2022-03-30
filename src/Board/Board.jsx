import React, { useState } from "react";
import Color from "../Color/Color";

const Board = () => {
  const [amountOfBoxes, setAmountOfBoxes] = useState(18);

  const rendering = () => {
    var indents = [];
    for (let i = 0; i < amountOfBoxes; i++) {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let style = "#" + randomColor;
        indents.push(<Color key={style} color={style} />);
    }
    return indents
  };

  return <div id="palette" className="inline-grid grid-cols-6 border border-gray-800">{rendering()}</div>;
};

export default Board;
