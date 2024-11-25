import { useState } from "react";

export default function Form() {
    const [inputValue, setInputValue] = useState("");
    const Change = (event) => {
        setInputValue(event.target.value);
      };
  return (
    <div>
    <form>
    <label>Enter Text:<input type="text" value={inputValue} onChange={Change} placeholder="Type"/></label>
  </form>
  <div>Current Value: {inputValue}</div>
  </div>
  )
}
