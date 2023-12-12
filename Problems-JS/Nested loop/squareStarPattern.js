function drawSqr(size){
    let sqrStr = "";
    for (let j = 0; j < 5; j++){
        for (let i = 0; i < 5; i++){
            sqrStr = sqrStr + "*";
        }
        sqrStr = sqrStr + "\n";
    }
    console.log(sqrStr);
}
drawSqr(5);