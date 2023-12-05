function findNumber(num1, num2, num3, num4){
    let answer = (num1 < num2 && num1 < num3 && num1 < num4)
    return answer;

    // (num2 < num1 && num2 < num3 && num2 < num4){return num2}
    // (num3 < num1 && num3 < num2 && num3 < num4){return num3}
    // (num4 < num1 && num4 < num2 && num4 < num3) {return num4}
}
let answer = findNumber(3, 2, 1, 4);
console.log("Answer:", answer)