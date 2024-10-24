import { insertCharacter } from "./character_functions";

import css from "./Calculator.module.css";

const CalculatorDisplay = ({ expression, cursorIndex, result }) => {
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

  return (
    <div className={css.CalculatorDisplay}>
      {finalExpressionArray.map((finalExpressionString) => {
        return <p key={finalExpressionString}>{finalExpressionString}</p>;
      })}
    </div>
  );
};

export { CalculatorDisplay };
