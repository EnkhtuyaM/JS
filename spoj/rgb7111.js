function findNumber(num1, num2, num3, num4, x) {
    let sum = 0;
    if (num1%11 !== 0){
        sum = sum + num1;
    } else sum = sum;
    if (num2%11 !== 0){
        sum = sum + num2;
    } else sum = sum;
    if (num3%11 !== 0){
        sum = sum + num3;
    } else sum = sum;
    if (num4%11 !== 0){
        sum = sum + num4;
    } else sum = sum;
    return sum;
}
let sum = findNumber(7, 22, 13, 30, 11);
console.log("Answer:" , sum)    