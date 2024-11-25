import { useState } from "react";

export default function Vote() {
const [age, setage] = useState("");
const Change = (event) => {
    setage(event.target.value);
  };
  let message;
  if (age === "") {
    message = "Please enter your age.";
  } else if (age >= 18) {
    message = "You are eligible to vote.";
  } else {
    message = "You are not eligible to vote.";
  }

  return (
    <div>
    <form>
    <label>Enter your age:<input type="text" value={age} onChange={Change} placeholder="Enter age"/></label>
  </form>
  <p>
  {message}
  </p>
  </div>
  )
}
