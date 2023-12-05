function findNumber(x) {
  let answer = ((x % 10) * (x - (x % 10))) / 10;
  return answer;
}
let answer = findNumber(27);
console.log("Answer", answer);
