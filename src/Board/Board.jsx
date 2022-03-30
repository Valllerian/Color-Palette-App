import React, {useState} from 'react'
import Color from '../Color/Color'

const Board = () => {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    let style = "#" + randomColor;

  return (
    <div>
        <Color color = {style}/>
    </div>
  )
}

export default Board