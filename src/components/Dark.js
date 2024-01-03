import React, { useState } from "react";
function Dark() {
  let data = {
    head: "99% promotion",
    text: "every thing must go",
    fo: "hello world",
  };
  let time = new Date()
  let div = [];
  let info = null;
  for (let i = 1; i <= 2; i++) {
    if (i === 1) {
      info = data.text;
    } else {
      info = data.fo;
    }
    div.push(
      <div>
        <p>{data.head}</p>
        <p>{info}</p>
      </div>
    ); 
  }
  let [color , setcolor] = useState("orangered")

  function click(){
    setcolor(color === "orangered" ? "green" : "orangered")
  }
  return (
    <div>
        {div}
        <button id="click" onClick={click} style = {{backgroundColor : color}}> click me</button>
    </div>
  );
}
export default Dark;
