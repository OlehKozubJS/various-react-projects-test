import { CalculatorButton } from "./CalculatorButton";

const NumberKeyboard = ({ onClick, backSpace }) => {
  enterData = (event) => {
    onClick(event.target.value);
  };

  return (
    <div>
      {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"].map((item) => {
        return (
          <CalculatorButton key={item} onClick={enterData}>
            {item}
          </CalculatorButton>
        );
      })}
      <button type="button" onClick={backSpace}>
        {"<="}
      </button>
    </div>
  );
};

export { NumberKeyboard };
