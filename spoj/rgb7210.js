// function findMultiply(num) {
//   let answer = "";
//   for (let i = 1; i < 11; i = i + 1) {
//     answer = answer + num + "*" + i + "=" + num * i + "\n";
//   }

//   return answer;
// }
// console.log(findMultiply(3));

// Өгөгдсөн тооны хүрдийг дараах хэлбэрээр гарга. Input 3; Output 3*1=3

function findMultiply(x) {
  for (let i = 1; i <= 10; i = i + 1) {
    answer = x * i;
    console.log(x + "*" + i + "=" + answer);
  }
}
findMultiply(3);
