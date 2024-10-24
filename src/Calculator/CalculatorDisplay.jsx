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

  return (
    <div className={css.CalculatorDisplay}>
      {finalExpressionArray.map(
        (finalExpressionString, finalExpressionStringIndex) => {
          return (
            <p key={finalExpressionStringIndex}>{finalExpressionString}</p>
          );
        }
      )}
    </div>
  );
};

export { CalculatorDisplay };
