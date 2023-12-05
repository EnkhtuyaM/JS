function findSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i = i + 1) {
    sum = sum + i;
  }
}

// let sum = findSum(5);
console.log(sum);

let n = 5;
let sum = 0;
for (i = 0; i < n; i = i + 1) {
  sum = sum + (i + 1);
}
console.log(sum);
