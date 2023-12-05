function findSeason(num){
    if(num == 2 || num == 3 || num == 4){
        return "Spring"
    }
    if(num == 5 || num == 6 || num == 7){
        return "Summer"
    }
    if(num == 8 || num == 9 || num == 10){
        return "Autumn"
    }
    if(num == 11 || num == 12 || num == 1){
        return "Winter"
    } return answer;
}
let answer = findSeason(3);
console.log(answer)