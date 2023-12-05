function findNumber(num1, num2, num3, num4, x) {
  let sum = 1;
  if (num1 < x) {
    sum = sum * num1;
  } else {
    sum = sum;
  }
  if (num2 < x) {
    sum = sum * num2;
  } else {
    sum = sum;
  }
  if (num3 < x) {
    sum = sum * num3;
  } else {
    sum = sum;
  }
  if (num4 < x) {
    sum = sum * num4;
  } else {
    sum = sum;
  }
  return sum;
}
let sum = findNumber(3, 6, 2, 4, 5);
console.log("Answer", sum);
