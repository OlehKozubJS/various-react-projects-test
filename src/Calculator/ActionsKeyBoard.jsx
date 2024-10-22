import { CalculatorButton } from "./CalculatorButton";

import css from "./Calculator.module.css";

const ActionsKeyboard = ({ onClick, backSpace }) => {
  const enterData = (event) => {
    onClick(event.target.value);
  };

  return (
    <div className={css.NumberKeyBoard}>
      {"()+-*/".split("").map((item) => {
        return (
          <CalculatorButton key={item} onClick={enterData}>
            {item}
          </CalculatorButton>
        );
      })}
    </div>
  );
};

export { ActionsKeyboard };
