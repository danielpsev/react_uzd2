import React, { useState } from "react";
import "./Post.css";
export default function Post() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="d-flex justify-content-between p-2 px-3">
              <div className="d-flex flex-row align-items-center">
                <img
                  src="https://th.bing.com/th/id/R.2bee11a830bacc5ae9006df56b20c33a?rik=nXUBy4boCTrW8w&pid=ImgRaw&r=0"
                  width="50"
                  className="rounded-circle"
                />
                <div className="d-flex flex-column mx-2">
                  <span className="font-weight-bold">Jeanette Sun</span>
                  <small className="text-primary">Collegues</small>
                </div>
              </div>
              <div className="d-flex flex-row mt-1 ellipsis">
                <small className="mr-2">20 mins</small>
                <i className="fa fa-ellipsis-h px-2"></i>
              </div>
            </div>
            <img
              src="https://th.bing.com/th/id/R.c927d410afcb8c5166d29c20071e143b?rik=pKhVg4MGISh1%2bQ&pid=ImgRaw&r=0"
              className="img-fluid"
            />
            <div className="p-2">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row icons d-flex align-items-center">
                  <img
                    className="pointer emoji"
                    src="https://th.bing.com/th/id/OIP.JMuFpe1K-zus9FRttgoqsAHaHa?pid=ImgDet&rs=1"
                    alt="heart"
                    width="32px"
                    onClick={() => {
                      setLikes(likes + 1);
                    }}
                  />
                  <span className="px-2">{likes}</span>

                  <img
                    className="pointer emoji"
                    src="https://www.pngfind.com/pngs/m/342-3429472_mothers-day-thankful-react-facebook-angry-emoji-png.png"
                    alt="angry"
                    width="32px"
                    onClick={() => {
                      setDislikes(dislikes + 1);
                    }}
                  />
                  <span className="px-2">{dislikes}</span>
                </div>

                <div className="d-flex flex-row muted-color">
                  <span>0 comments</span> <span className="px-2">Share</span>
                </div>
              </div>
              <hr />

              <button
                className="btn btn-primary mt-3 "
                onClick={() => {
                  setLikes(0);
                  setDislikes(0);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
