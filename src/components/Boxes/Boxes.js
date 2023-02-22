import React, { useState } from 'react';
import Box from "../Box/Box";
export default function Boxes(){
  const [bColor, setBColor] = useState([
    {color: '#FED766'},
    {color: '#009FB7'},
    {color: '#696773'},
  ]);

  const changeColors = () => {
    setBColor(
      [
        {color: '#FFB84C'},
        {color: '#7DB9B6'},
        {color: '#F16767'},
      ]
    )
  }
    return(
<div className="container text-center">
        <div className="row mb-5">
          <div className="col mt-3">
          {/* <Box color='#FED766'/> */}
          <Box color={bColor[0].color}/>
          
          </div>
          <div className="col mt-3">
            <Box color={bColor[1].color}/>
          </div>
          <div className="col mt-3">
            <Box color={bColor[2].color}/>
          </div>
          <button className='btn btn-primary mt-3' onClick={changeColors}>Change colors</button>
        </div>
      </div>
    )
}


      {/* <div className='box-container'>
        <Box/>
        <Box/>
        <Box/>
      </div> */}