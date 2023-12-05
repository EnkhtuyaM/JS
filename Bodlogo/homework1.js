// if its raining today, take umbrella
// if its snowing today, take umbrella
// if its too sunny today, take umbrella

function takeUmbrella(a, b, c){
    if(a == "true" || b == "true" || c == "true"){
        console.log("take umbrella")
    }else console.log("no need umbrella")
}
takeUmbrella("false", "false", "true")

// ugugdsun toog 5 bolon 11t huvaagddag esehiig tootsdog function bich
// too 5d huvaagdana gehdee 11t huvaagdahgui

function findNumber(num){
    if (num%5 == 0 && num%11 !== 0){
        console.log("Answer:", "yes")
    }else console.log("Answer:", "no")
   
}
findNumber(45, 5, 11)

