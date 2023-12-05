function findTime(x){
    let answer1 = (x-(x%60))/3600;
    return answer1;
}
let answer1 = findTime(3612);
console.log("Answer:", answer1);

function findMinute(x){
    let answer2 = ((x-(x%60))/3600)-1;
    return answer2
}
let answer2 = findMinute(3612);
console.log("Answer:" , answer2);

function findSecond(x){
    let answer3 = x%60;
    return answer3;
}
let answer3 = findSecond(3612);
console.log("Answer:", answer3);