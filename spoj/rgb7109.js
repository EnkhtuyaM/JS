function findNumber(num1, num2, num3, x){
    let answer = 0;
    if (num1%5 == 0) {
        answer = answer + 1;
    } else answer = answer
    if (num2%5 == 0) {
        answer = answer + 1
    } else answer = answer
    if (num3%5 == 0) {
        answer = answer + 1
    } else answer = answer
    return answer
}
let answer = findNumber(2, 5, 5);
console.log("Answer", answer)