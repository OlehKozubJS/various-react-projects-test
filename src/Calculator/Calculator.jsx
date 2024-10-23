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
    if (!result && cursorIndex > 0) {
      setCursorIndex(cursorIndex - 1);
    }
  };

  const turnCursorRight = () => {
    if (!result && cursorIndex < expression.length) {
      setCursorIndex(cursorIndex + 1);
    }
  };

  const turnCursorUp = () => {
    if (!result && cursorIndex - 10 >= 0) {
      setCursorIndex(cursorIndex - 10);
    }
  };

  const turnCursorDown = () => {
    if (!result && cursorIndex + 10 <= expression.length) {
      setCursorIndex(cursorIndex + 10);
    }
  };

  useEffect(() => {
    const newExpression = insertCharacter(
      expression,
      cursorIndex,
      result ? "" : "_"
    );

    let finalExpressionArray = [];
    let finalExpressionString = "";
    for (let character of newExpression) {
      finalExpressionString += character;
      if (finalExpressionString.length === 20) {
        finalExpressionArray = [...finalExpressionArray, finalExpressionString];
        finalExpressionString = "";
      }
    }

    finalExpressionArray = [
      ...finalExpressionArray,
      finalExpressionString,
      result,
    ];

    setFinalExpression(finalExpressionArray);
  }, [expression, cursorIndex, result]);

  return (
    <>
      <div>
        {finalExpression.map((finalExpressionString) => {
          return <p>{finalExpressionString}</p>;
        })}
      </div>
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

          <button type="button" onClick={turnCursorUp}>
            ↑
          </button>
          <button type="button" onClick={turnCursorDown}>
            ↓
          </button>
        </div>
      </div>
    </>
  );
};

export { Calculator };
