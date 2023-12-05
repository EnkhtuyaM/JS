function findDay(num, x){
    let answer=(num-num%x)/x;
    return answer;
}
let answer = findDay(44, 24);
console.log("Answer:", answer);

function findHour(num, x){
    let answer1 = num%x;
    return answer1;
}
let answer1 = findHour(44, 24);
console.log("Answer:", answer1);