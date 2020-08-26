window.onload = function () {
  const calculator = document.querySelector(".calculator");
  const keys = calculator.querySelector(".calculator__keyboard");
  const display = document.querySelector(".calculator__screen");
  const calculate = (n1, operator, n2) => {
    let result = "";

    if (operator === "add") {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === "sub") {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === "multiply") {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === "divide") {
      result = parseFloat(n1) / parseFloat(n2);
    }

    return result;
  };
  keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;
      const previousKeyType = calculator.dataset.previousKeyType;
      if (!action) {
        calculator.dataset.previousKeyType = "number";
        if (displayedNum === "0" || previousKeyType === "operator") {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedNum + keyContent;
        }
      }

      if (
        action === "add" ||
        action === "sub" ||
        action === "multiply" ||
        action === "divide"
      ) {
        calculator.dataset.previousKeyType = "operator";
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
      }

      if (action === "decimal") {
        if (!displayedNum.includes(".")) {
          display.textContent = displayedNum + ".";
        } else if (previousKeyType === "operator") {
          display.textContent = "0.";
        }
        calculator.dataset.previousKeyType = "decimal";
      }

      if (action === "clear") {
        calculator.dataset.previousKeyType = "clear";
        display.textContent = 0;
        calculator.dataset.firstValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      }

      if (action === "calculate") {
        calculator.dataset.previousKeyType = "calculate";
        const secondValue = displayedNum;
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;

        display.textContent = calculate(firstValue, operator, secondValue);
      }
      if (action === "TIME") {
        calculator.dataset.previousKeyType = "TIME";
        display.textContent = Date();
      }
    }
  });
};
