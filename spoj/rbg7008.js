function findTenth(x) {
  let answer = (x % 100) / 10 - (((x % 100) / 10) % 1);
  return answer;
}
let answer = findTenth(423);
console.log("Answer:", answer);
