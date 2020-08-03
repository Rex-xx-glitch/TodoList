import React, { useState, useEffect } from "react";
import "./Input.css";

function Input({ pHolder, btnValue, getText, large }) {
  const [text, setText] = useState("");
  const [textVal, setTextVal] = useState("");

  useEffect(() => setTextVal(text), [text]);

  function HandleClick(e) {
    if (text.length === 0) return e.preventDefault();
    getText(textVal);
    setText("");
  }

  return (
    <div className={large ? "input-container large" : "input-container"}>
      <input
        type="text"
        placeholder={pHolder}
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <input type="button" value={btnValue} onClick={HandleClick} />
    </div>
  );
}

export default Input;
