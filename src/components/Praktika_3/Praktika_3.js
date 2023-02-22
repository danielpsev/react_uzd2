import React, { useState } from "react";
import "./Praktika_3.css";
import { v4 as uuidv4 } from "uuid";
import LessText from "./LessText/LessText";
export default function Praktika_3() {
  let posts = [
    {
      text: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      maxLength: 10,
    },
    {
      text: "2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      maxLength: 5,
    },
  ];

  let list = posts.map((post) => {
    return (
      <LessText key={uuidv4()} text={post.text} maxLength={post.maxLength} />
    );
  });

  return <>{list}</>;
}
