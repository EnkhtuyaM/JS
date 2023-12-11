// function isPrime(num) {
//   for (let i = 2; i < num; i = i + 1) {
//     if (num % i == 0);
//     return true;
//   }
//   return false;
// }

// let answer = isPrime(7);
// console.log("Answer:", answer);

function findPrime(min, max){
  let primeNum = [];
  let count = 0;
  for (let i = min; i < max; i = i + 1){
    if (min % (i+1) == 0 ){
      primeNum[count]=i;
      count++;
    }
       
  }
  return primeNum;
}
let primeNum = findPrime(1, 100);
console.log(primeNum)
    
  
  

// let answer = findPrime(0, 100);
// console.log("Answer:", answer)
