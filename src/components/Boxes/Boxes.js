import React from "react";
import Box from "../Box/Box";
export default function Boxes(){
    return(
<div className="container text-center">
        <div className="row">
          <div className="col mt-3">
          <Box color='#FED766'/>
          </div>
          <div className="col mt-3">
            <Box color='#009FB7'/>
          </div>
          <div className="col mt-3">
            <Box color='#696773'/>
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