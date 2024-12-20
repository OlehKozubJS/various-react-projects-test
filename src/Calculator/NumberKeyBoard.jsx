import { CalculatorButton } from "./CalculatorButton";

import css from "./Calculator.module.css";

const NumberKeyBoard = ({ onClick, backSpace }) => {
  const enterData = (event) => {
    onClick(event.target.value);
  };

  return (
    <div className={`${css.KeyBoard} ${css.NumberKeyBoard}`}>
      {"123456789.0".split("").map((item) => {
        return (
          <CalculatorButton key={item} onClick={enterData} style="NumberButton">
            {item}
          </CalculatorButton>
        );
      })}
      <CalculatorButton onClick={backSpace} style="NumberButton">
        ◄
      </CalculatorButton>
    </div>
  );
};

export { NumberKeyBoard };
