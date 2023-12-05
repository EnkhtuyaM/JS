function findNumber(x) {
  let answer = (x % 10) + ((x - (x % 10)) % 100) / 10 + (x - (x % 100)) / 100;
  return answer;
}
let answer = findNumber(123);
console.log("Answer", answer);
