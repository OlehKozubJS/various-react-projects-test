import { useState } from "react";
import css from "./Calculator.module.css";

const Calculator = () => {
  const [expression, setExpression] = useState("_");
  const [result, setResult] = useState("");
  const [cursorIndex, setCursorIndex] = useState(0);

  const enterData = (event) => {
    setResult("");
    const newExpression = expression + event.target.value;
    setExpression(newExpression);
  };

  const calculate = () => {
    setResult("=" + eval(expression.replace("_", "")));
  };

  const backSpace = () => {
    if (result) {
      setResult("");
    } else {
      let newExpression = [...expression];
      newExpression.splice(expression.length - 1, 1);
      newExpression = newExpression.join("");
      setExpression(newExpression);
    }
  };

  const clear = () => {
    setResult("");
    setExpression("0");
  };

  const turnCursorLeft = () => {};

  const turnCursorRight = () => {};

  return (
    <>
      This is Calulator
      <div>
        {expression}
        {result}
      </div>
      <div>
        <div>
          <button type="button" onClick={enterData} value="1">
            1
          </button>
          <button type="button" onClick={enterData} value="2">
            2
          </button>
          <button type="button" onClick={enterData} value="3">
            3
          </button>
          <button type="button" onClick={enterData} value="4">
            4
          </button>
          <button type="button" onClick={enterData} value="5">
            5
          </button>
          <button type="button" onClick={enterData} value="6">
            6
          </button>
          <button type="button" onClick={enterData} value="7">
            7
          </button>
          <button type="button" onClick={enterData} value="8">
            8
          </button>
          <button type="button" onClick={enterData} value="9">
            9
          </button>
          <button type="button" onClick={enterData} value=".">
            .
          </button>
          <button type="button" onClick={enterData} value="0">
            0
          </button>
          <button type="button" onClick={backSpace}>
            {"<="}
          </button>
        </div>
        <div>
          <button type="button" onClick={enterData} value="(">
            {"("}
          </button>
          <button type="button" onClick={enterData} value=")">
            {")"}
          </button>
          <button type="button" onClick={enterData} value="+">
            +
          </button>
          <button type="button" onClick={enterData} value="-">
            -
          </button>
          <button type="button" onClick={enterData} value="*">
            *
          </button>
          <button type="button" onClick={enterData} value="/">
            /
          </button>
          <button type="button" onClick={calculate}>
            =
          </button>
          <button type="button" onClick={clear}>
            C
          </button>
          <button type="button" onClick={turnCursorLeft}>
            Left
          </button>
          <button type="button" onClick={turnCursorRight}>
            Right
          </button>
        </div>
      </div>
    </>
  );
};

export { Calculator };
