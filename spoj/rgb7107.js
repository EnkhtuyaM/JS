function findNumber(num1, num2, num3){
    let sum = 0;
    if (num1 % 2 == 0) {
        sum = sum + num1;
    } 
    if (num2 % 2 == 0) {
        sum = sum + num2;
    } 
    if (num3 % 2 == 0) {
        sum = sum + num3;
    } 
    return sum;
}
let sum = findNumber(10, 3, 5);
console.log("Answer:", sum)