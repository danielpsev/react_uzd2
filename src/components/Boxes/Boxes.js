import React from "react";
import Box from "../Box/Box";
export default function Boxes(){
    return(
<div className="container text-center">
        <div className="row">
          <div className="col">
          <Box/>
          </div>
          <div className="col">
            <Box/>
          </div>
          <div className="col">
            <Box/>
          </div>
        </div>
      </div>
    )
}


      {/* <div className='box-container'>
        <Box/>
        <Box/>
        <Box/>
      </div> */}