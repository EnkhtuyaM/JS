function findYear(num, x){
    let answer = (num-(num%x))/x;
    return answer;
}
let answer = findYear(27, 12);
console.log("Answer:", answer);

function findMonth(num, x){
    let answer1 = num%x;
    return answer1;
}
let answer1 = findMonth(27, 12);
console.log("Answer:", answer1)
