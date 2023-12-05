function findYes(x, y, z){
    let answer;
    if (x%2 == 0){
        answer = "Yes"
    } else answer = "No"
    console.log(answer)
    if (y%2 == 0){
        answer = "Yes"
    } else answer = "No"
    console.log(answer)
    if (z%2 == 0){
        answer = "Yes"
    } else answer = "No"
    console.log(answer)
    return answer
}
let answer = findYes(3, 4, 5)

// Гурван тоо өгөгдөнө. Тоо тэгш бол YES үгүй бол NO гэж хэвлэ.