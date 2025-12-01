function calculator(num1, num2, op) {
  if (op === "+") {
    return num1 + num2;
  } else if (op === "-") {
    return num1 - num2;
  } else if (op === "*") {
    return num1 * num2;
  } else if (op === "/") {
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}

module.exports = calculator;
