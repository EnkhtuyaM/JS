function findTime(x){
    let answer  = (x-(x%60))/60;
    return answer 
}
let answer = findTime(200);
console.log("Answer:", answer);

function findTime(x){
    let answer1 = x%60;
    return answer1;
}
let answer1 = findTime(200);
console.log("Answer", answer1)

