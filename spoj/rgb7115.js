function findPassed(num){
    if(num > 3){
        return "Passed"
    } else return "Failed"
}
let num = 4;
let answer = findPassed(4);
console.log(answer)