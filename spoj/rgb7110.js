function findNumber(num1, num2, num3, num4, x){
    let answer = 0;
    if (num1%3 == 0){
        answer = answer +1;
    } else answer = answer;
    if (num2%3 == 0){
        answer = answer +1;
    } else answer = answer;
    if (num3%3 == 0){
        answer = answer + 1;
    } else answer = answer;
    if (num4%3 == 0){
        answer = answer +1;
    } else answer = answer;
    return answer
}
let answer = findNumber(3, 12, 8, 9);
console.log("Answer", answer)