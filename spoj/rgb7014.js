function findSecond(num1, num2, num3, x){
    let answer=(num1*x*x+num2*x+num3);
    return answer;
}
let answer=findSecond(1, 2, 3, 60);
console.log("Answer:", answer);