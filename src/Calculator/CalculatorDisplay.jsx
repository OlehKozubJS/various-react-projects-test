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
    if (finalExpressionString.length === 22) {
      finalExpressionArray = [...finalExpressionArray, finalExpressionString];
      finalExpressionString = "";
    }
    finalExpressionString += character;
    console.log(finalExpressionString.length);
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
