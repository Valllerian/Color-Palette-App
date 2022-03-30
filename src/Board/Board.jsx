import React, { useState } from "react";
import Color from "../Color/Color";

const Board = () => {
  const [amountOfBoxes, setAmountOfBoxes] = useState(16);

  const rendering = () => {
    var indents = [];
    for (let i = 0; i < amountOfBoxes; i++) {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let style = "#" + randomColor;
        indents.push(<Color color={style} />);
    }
    return indents
  };

  return <div id="palette" className="grid place-items-center h-screen">{rendering()}</div>;
};

export default Board;
