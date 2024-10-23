import { useEffect, useState } from "react";

import { insertCharacter, deleteCharacter } from "./character_functions";

import { NumberKeyBoard } from "./NumberKeyBoard";
import { ActionsKeyBoard } from "./ActionsKeyBoard";
import { MainControlsKeyBoard } from "./MainControlsKeyBoard";

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
    if (!result && cursorIndex - 20 >= 0) {
      setCursorIndex(cursorIndex - 20);
    }
  };

  const turnCursorDown = () => {
    if (!result && cursorIndex + 20 <= expression.length) {
      setCursorIndex(cursorIndex + 20);
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
    <div className={css.Calculator}>
      <div>
        {finalExpression.map((finalExpressionString) => {
          return <p>{finalExpressionString}</p>;
        })}
      </div>
      <div>{cursorIndex}</div>
      <div>
        <NumberKeyBoard onClick={enterData} backSpace={backSpace} />

        <ActionsKeyBoard onClick={enterData} />

        <MainControlsKeyBoard
          calculate={calculate}
          turnCursorUp={turnCursorUp}
          clear={clear}
          turnCursorLeft={turnCursorLeft}
          turnCursorDown={turnCursorDown}
          turnCursorRight={turnCursorRight}
        />
      </div>
    </div>
  );
};

export { Calculator };
