function calculator(num1, num2, operation) {
  let answer;
  if (operation == "+") {
    answer = num1 + num2;
  } else if (operation == "-") {
    answer = num1 - num2;
  } else if (operation == "*") {
    answer = num1 * num2;
  } else if (operation == "/") {
    answer = num1 / num2;
  }
  return answer;
}
let plus = calculator(10, 20, "+");
console.log("Answer:", plus);

let subtraction = calculator(10, 20, "-");
console.log("Answer:", subtraction);

let multiply = calculator(10, 20, "*");
console.log("Answer:", multiply);

let divide = calculator(10, 20, "/");
console.log("Answer:", divide);
