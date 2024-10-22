import { useEffect, useState } from "react";

import { insertCharacter, deleteCharacter } from "./character_functions";

import { NumberKeyBoard } from "./NumberKeyBoard";
import { ActionsKeyBoard } from "./ActionsKeyBoard";

import css from "./Calculator.module.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [finalExpression, setFinalExpression] = useState([]);
  const [cursorIndex, setCursorIndex] = useState(0);

  const enterData = (value) => {
    setResult("");
    setExpression(insertCharacter(expression, cursorIndex, value));
    setCursorIndex(cursorIndex + 1);
  };

  const calculate = () => {
    setResult("=" + eval(expression));
    setCursorIndex(expression.length);
  };

  const backSpace = () => {
    if (result) {
      setResult("");
    } else {
      setExpression(deleteCharacter(expression, cursorIndex - 1));
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
    const newExpression =
      insertCharacter(expression, cursorIndex, result ? "" : "_") +
      " " +
      result;
    setFinalExpression(newExpression);
  }, [expression, cursorIndex, result]);

  return (
    <>
      <div>{finalExpression}</div>
      <div>{cursorIndex}</div>
      <div>
        <NumberKeyBoard onClick={enterData} backSpace={backSpace} />

        <ActionsKeyBoard onClick={enterData} />

        <div>
          <button type="button" onClick={calculate}>
            =
          </button>
          <button type="button" onClick={clear}>
            C
          </button>
          <button type="button" onClick={turnCursorLeft}>
            ←
          </button>
          <button type="button" onClick={turnCursorRight}>
            →
          </button>
        </div>
      </div>
    </>
  );
};

export { Calculator };
