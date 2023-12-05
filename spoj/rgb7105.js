function findSum(num1, num2, num3, num4, x) {
  let sum = 0;
  if (num1 > x) {
    sum = sum + num1;
  }
  if (num2 > x) {
    sum = sum + num2;
  }
  if (num3 > x) {
    sum = sum + num3;
  }
  if (num4 > x) {
    sum = sum + num4;
  }
  return sum;
}
let sum = findSum(85, 75, 96, 69, 80);
console.log("Answer", sum);
