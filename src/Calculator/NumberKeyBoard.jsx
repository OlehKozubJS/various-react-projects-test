import { CalculatorButton } from "./CalculatorButton";

import css from "./Calculator.module.css";

const NumberKeyBoard = ({ onClick, backSpace }) => {
  const enterData = (event) => {
    onClick(event.target.value);
  };

  return (
    <div className={`${css.NumberKeyBoard} ${css.NumberButton}`}>
      {"123456789.0".split("").map((item) => {
        return (
          <CalculatorButton key={item} onClick={enterData}>
            {item}
          </CalculatorButton>
        );
      })}
      <CalculatorButton onClick={backSpace}>◄</CalculatorButton>
    </div>
  );
};

export { NumberKeyBoard };
