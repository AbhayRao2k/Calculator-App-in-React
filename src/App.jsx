import React from "react";
import { add, sub, multi, div } from "./Calc";
import css from "./index.css";

function App() {
  return (
    <>
      <ul>
        <li> Sum of two numbers is {add(40, 4)} </li>
        <li> Subtraction of two numbers is {sub(30, 3)} </li>
        <li> Division of two numbers is {div(10, 3)} </li>
        <li> Multiplication of two numbers is {multi(10, 3)} </li>
      </ul>
    </>
  );
}

export default App;