function findGrade(num){
    if(num>89){
        return "A"
    }
    if(num>79){
        return "B"
    }
    if(num>69){
        return "C"
    }
    if(num>59){
        return "D"
    }
    if(num < 60){
        return "F"
    } return answer;
    
}
let answer = findGrade(84);
console.log(answer)
