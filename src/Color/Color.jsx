import React, {useState} from 'react'

const Color = (props) => {

    let random = props.color
        
    
  return (
    <div id="test">
        <div style={{backgroundColor: random}}>Testing Colors</div>
    </div>
  )
}

export default Color