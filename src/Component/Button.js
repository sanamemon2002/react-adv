import { useState } from "react";


export default function Button() {
    const [text, setText] = useState("Not Clicked");
    const Click = () => {
        setText("Clicked!");
      };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={Click}>Click </button>
    </div>
  )
}
