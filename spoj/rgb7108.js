function findNumber(num1, num2, num3){
    let sum = 1;
    if (num1%2 ==1){
        sum = sum * num1
    } else sum = sum
    if (num2%2 ==1){
        sum = sum * num2
    } else sum = sum
    if (num3%2 ==1){
        sum = sum * num3
    } else sum =sum
    return sum;
}
let sum = findNumber(5, 2, 3);
console.log("Answer:", sum)

//Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол. Ядаж 1 сондгой тоо байгаа.