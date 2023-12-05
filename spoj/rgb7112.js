function findYes(x){
    let answer;
    if (x > 10) {
        answer = "Yes";
    } else answer = "No";
    return answer;
}
let answer = findYes(11);
console.log("Answer:", answer)