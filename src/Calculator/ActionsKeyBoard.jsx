import { CalculatorButton } from "./CalculatorButton";

import css from "./Calculator.module.css";

const ActionsKeyBoard = ({ onClick, backSpace }) => {
  const enterData = (event) => {
    onClick(event.target.value);
  };

  return (
    <div className={`${css.KeyBoard} ${css.ActionsKeyBoard}`}>
      {"(+)*-/".split("").map((item) => {
        return (
          <CalculatorButton key={item} onClick={enterData} style="ActionButton">
            {item}
          </CalculatorButton>
        );
      })}
    </div>
  );
};

export { ActionsKeyBoard };
