// import React from "react";
import PostImage from "../PostImage/PostImage";
import PostContent from "../PostContent/PostContent";
import {v4 as uuidv4} from "uuid";
import React, { useState, useEffect } from 'react';

export default function Posts(props){
    var list;
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
          const newData = await response.json();
          list = test(newData);
        };
        fetchData();
      });
      

      function test(data){
        console.log('testing');
        let inf = data.map((post) => {
            return (
                <div className='post' key={uuidv4()}>
                    <PostImage url='img/header.jpg'/>
                    <PostContent title={post.title} desc={post.body}/>
                </div>
            )
         });
         return inf;
      }


    let posts = [
        {
            title: "TITLE 1",
            desc: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            img: "img/header.jpg"
        },
        {
            title: "TITLE 2",
            desc: "2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            img: "https://th.bing.com/th/id/OIP.yRlxAuokAxQWJNUnVJANhQHaF7?pid=ImgDet&rs=1"
        }
    ];

    // let list = posts.map((post) => {
    //     return (
    //         <div className='post' key={uuidv4()}>
    //             <PostImage url={post.img}/>
    //             <PostContent title={post.title} desc={post.desc}/>
    //         </div>
    //     )
    // });

    return(
        <div className='posts-container'>
        {list}
      </div>
    )
}