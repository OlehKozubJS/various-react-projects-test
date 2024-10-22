import { CalculatorButton } from "./CalculatorButton";

const NumberKeyboard = ({ onClick, backSpace }) => {
  const enterData = (event) => {
    onClick(event.target.value);
  };

  return (
    <div>
      {"123456789.0".split("").map((item) => {
        return (
          <CalculatorButton key={item} onClick={enterData}>
            {item}
          </CalculatorButton>
        );
      })}
      <CalculatorButton onClick={backSpace}>«</CalculatorButton>
    </div>
  );
};

export { NumberKeyboard };
