function findGreater(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {return num1} {return num2} {return num3}
}
let answer = findGreater(1, 3, 2);
console.log("Answer:", answer)