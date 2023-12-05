function findNumber(num1, num2, num3, num4) {
  if (num1 < num2 && num1 < num3 && num1 < num4) {
    return num1;
  } else if (num2 < num3 && num2 < num4) {
    return num2;
  } else if (num3 < num4) {
    return num3;
  } else {
    return num4;
  }
}
let answer = findNumber(3, 2, 1, 4);
console.log("Answer:", answer);
