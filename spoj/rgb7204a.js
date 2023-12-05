function findSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i = i + 1) {
    sum = sum + i;
  }
  return sum;
}

let sum = findSum(5);
console.log(sum);
