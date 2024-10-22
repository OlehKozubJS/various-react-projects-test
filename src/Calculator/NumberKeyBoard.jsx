const NumberKeyboard = () => {
    return(        <div>
          <button
            type="button"
            onClick={enterData}
            value="1"
            className={css.CalculatorButton}
          >
            1
          </button>
          <button type="button" onClick={enterData} value="2">
            2
          </button>
          <button type="button" onClick={enterData} value="3">
            3
          </button>
          <button type="button" onClick={enterData} value="4">
            4
          </button>
          <button type="button" onClick={enterData} value="5">
            5
          </button>
          <button type="button" onClick={enterData} value="6">
            6
          </button>
          <button type="button" onClick={enterData} value="7">
            7
          </button>
          <button type="button" onClick={enterData} value="8">
            8
          </button>
          <button type="button" onClick={enterData} value="9">
            9
          </button>
          <button type="button" onClick={enterData} value=".">
            .
          </button>
          <button type="button" onClick={enterData} value="0">
            0
          </button>
          <button type="button" onClick={backSpace}>
            {"<="}
          </button>
        </div>);
};


export (NumberKeyboard);