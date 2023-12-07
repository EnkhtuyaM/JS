function findNum(x, y) {
  for (let i = 1; i <= y; i = i + 1) {
    answer = x ** i;
    console.log(x + "^" + i + "=" + x ** i + "\n");
  }
}
findNum(3, 5);
