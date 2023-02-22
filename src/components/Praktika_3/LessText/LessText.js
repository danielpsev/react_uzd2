import React, { useState } from "react";

export default function LessText(props) {
  const { text, maxLength } = props;

  let sub_text = text.substring(0, maxLength);

  const [str, setStr] = useState(sub_text);
  const [btn, setBtn] = useState(false);

  return (
    <div className="mt-5">
      {str}
      <u
        onClick={() => {
          btn ? setStr(sub_text) : setStr(text);
          setBtn(!btn);
        }}
      >
        {btn ? "...Read less" : "... Read more"}
      </u>
    </div>
  );
}
