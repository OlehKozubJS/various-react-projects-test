import { CalculatorButton } from "./CalculatorButton";

const NumberKeyboard = ({ onClick, backSpace }) => {
  const enterData = (event) => {
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
      <CalculatorButton type="button" onClick={backSpace}>
        {"<="}
      </CalculatorButton>
    </div>
  );
};

export { NumberKeyboard };
