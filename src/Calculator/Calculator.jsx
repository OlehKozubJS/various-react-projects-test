import { useEffect, useState } from "react";

import {
  insertCharacter,
  deleteCharacter,
  replaceCharacter,
} from "./character_functions";

import css from "./Calculator.module.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [expressionAndCursor, setExpressionAndCursor] = useState("");
  const [cursorIndex, setCursorIndex] = useState(0);

  const enterData = (event) => {
    setResult("");
    setExpression(
      insertCharacter(expression, cursorIndex - 1, event.target.value)
    );
    turnCursorRight();
  };

  const calculate = () => {
    setResult("=" + eval(expression));
  };

  const backSpace = () => {
    if (result) {
      setResult("");
    } else {
      setExpression(deleteCharacter(expression, expression.length - 1));
      turnCursorLeft();
    }
  };

  const clear = () => {
    setExpression("");
    setResult("");
    setCursorIndex(0);
  };

  const turnCursorLeft = () => {
    if (cursorIndex > 0) {
      setCursorIndex(cursorIndex - 1);
    }
  };

  const turnCursorRight = () => {
    if (cursorIndex < expression.length) {
      setCursorIndex(cursorIndex + 1);
    }
  };

  useEffect(() => {
    setExpressionAndCursor(
      insertCharacter(expression, cursorIndex, result ? "" : "_")
    );
  }, [expression, cursorIndex, result]);

  return (
    <>
      <div>
        {expressionAndCursor}
        {result}
      </div>
      <div>{cursorIndex}</div>
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
