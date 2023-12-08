function isPrime(num) {
  for (let i = 2; i < num; i = i + 1) {
    if (num % i == 0);
    return false;
  }
  return true;
}

let answer = isPrime(7);
console.log("Answer:", answer);
