function findDay(num){
    if(num == 1){
        return "Monday"
    }
    if(num == 2){
        return "Tuesday"
    }
    if(num == 3){
        return "Wednesday"
    }
    if(num == 4){
        return "Thursday"
    } 
    if(num == 5){
        return "Friday"
    }
    if(num == 6){
        return "Saturday"
    }
    if(num == 7){
        return "Sunday"
    } return answer
}
let answer = findDay(5);
console.log(answer)