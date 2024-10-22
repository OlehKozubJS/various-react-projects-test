import { CalculatorButton } from "./CalculatorButton";

import css from "./Calculator.module.css";

const NumberKeyboard = ({ onClick, backSpace }) => {
  const enterData = (event) => {
    onClick(event.target.value);
  };

  return (
    <div className={css.NumberKeyboard}>
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

export { NumberKeyboard };
