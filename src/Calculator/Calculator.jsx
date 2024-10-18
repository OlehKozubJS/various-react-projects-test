import { useState } from "react";
import css from "./Calculator.module.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const enterData = () => {};

  const calculate = () => {};

  const backSpace = () => {};

  const clear = () => {};

  return (
    <>
      This is Calulator
      <div></div>
      <div>
        <div>
          <button type="button" onClick={enterData("1")}>
            1
          </button>
          <button type="button" onClick={enterData("2")}>
            2
          </button>
          <button type="button" onClick={enterData("3")}>
            3
          </button>
          <button type="button" onClick={enterData("4")}>
            4
          </button>
          <button type="button" onClick={enterData("5")}>
            5
          </button>
          <button type="button" onClick={enterData("6")}>
            6
          </button>
          <button type="button" onClick={enterData("7")}>
            7
          </button>
          <button type="button" onClick={enterData("8")}>
            8
          </button>
          <button type="button" onClick={enterData("9")}>
            9
          </button>
          <button type="button" onClick={enterData(".")}>
            .
          </button>
          <button type="button" onClick={enterData("0")}>
            0
          </button>
          <button type="button" onClick={backSpace()}>
            {"<="}
          </button>
        </div>
        <div>
          <button type="button" onClick={enterData("(")}>
            {"("}
          </button>
          <button type="button" onClick={enterData(")")}>
            {")"}
          </button>
          <button type="button" onClick={enterData("+")}>
            +
          </button>
          <button type="button" onClick={enterData("-")}>
            -
          </button>
          <button type="button" onClick={enterData("*")}>
            *
          </button>
          <button type="button" onClick={enterData("/")}>
            /
          </button>
          <button type="button" onClick={calculate()}>
            =
          </button>
          <button type="button" onClick={clear()}>
            C
          </button>
        </div>
      </div>
    </>
  );
};

export { Calculator };
