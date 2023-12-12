function hollowRightTri(size){
    let hollowSqr = "";
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            hollowSqr += "*"
        }
        console.log(hollowSqr);
    }
}
hollowRightTri(5)