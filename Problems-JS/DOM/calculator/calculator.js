const root = document.getElementById("root");

const container=document.createElement("div");
container.setAttribute("class","container");
root.appendChild(container)

const calScreen=document.createElement("div");
calScreen.setAttribute("class","calculator");
container.appendChild(calScreen)
calScreen.innerText="";

const buttons=document.createElement("div");
buttons.setAttribute("class","buttons");
container.appendChild(buttons);

const numbers = document.createElement("div");
numbers.setAttribute("class", "numbers");
buttons.appendChild(numbers);

const operations = document.createElement("div");
operations.setAttribute("class", "operations");
buttons.appendChild(operations);

const percentButton=document.createElement("button");
percentButton.setAttribute("class","top_buttons");
percentButton.innerHTML="%"
percentButton.addEventListener("click",getNumPercent);
numbers.appendChild(percentButton);

const plsMnsButton=document.createElement("button");
plsMnsButton.setAttribute("class","top_buttons");
plsMnsButton.innerHTML="+/-";
plsMnsButton.addEventListener("click",plsMnsNumber);
numbers.appendChild(plsMnsButton);

const startButton = document.createElement("button");
startButton.setAttribute("class","top_buttons")
startButton.innerHTML = "AC";
startButton.addEventListener("click", clearScreen);
numbers.appendChild(startButton);

let num1=0;
let num2=0;

for (let i=9; i>0;i--){
    const numButtons=document.createElement("button");
    numButtons.setAttribute("class","number_buttons");
    numButtons.innerHTML=i;
    numButtons.addEventListener("click",clickNum);
    numbers.appendChild(numButtons)
}
const divideButton=document.createElement("button");
divideButton.setAttribute("class","ops_button");
divideButton.innerHTML="/";
divideButton.addEventListener("click",divide);
operations.appendChild(divideButton);

const mltplyButton=document.createElement("button");
mltplyButton.setAttribute("class","ops_button");
mltplyButton.innerHTML="x";
mltplyButton.addEventListener("click",multiply);
operations.appendChild(mltplyButton);

const subtractButton=document.createElement("button");
subtractButton.setAttribute("class","ops_button");
subtractButton.innerHTML="-";
subtractButton.addEventListener("click",subtract)
operations.appendChild(subtractButton);

const plusButton=document.createElement("button");
plusButton.setAttribute("class","ops_button");
plusButton.innerHTML="+";
plusButton.addEventListener("click",sum);
operations.appendChild(plusButton);

const equalButton=document.createElement("button");
equalButton.setAttribute("class","ops_button");
equalButton.innerHTML="=";
equalButton.addEventListener("class",equal)
operations.appendChild(equalButton);

const dotButton=document.createElement("button");
dotButton.setAttribute("class","number_buttons");
dotButton.innerText=".";
dotButton.addEventListener("click",clickNum);
numbers.appendChild(dotButton);

const zeroButton=document.createElement("button");
zeroButton.setAttribute("class","zero_button");
zeroButton.innerHTML="0";
zeroButton.addEventListener("click",clickNum);
numbers.appendChild(zeroButton);

function clickNum(event){
    calScreen.innerHTML=calScreen.innerHTML + event.target.innerHTML;
}
function clearScreen(){
    calScreen.innerHTML="";
}
function plsMnsNumber(){
    calScreen.innerHTML=Number(calScreen.innerHTML)*-1;
}
function getNumPercent(){
    num1=Number(calScreen.innerHTML);
    localStorage.setItem("num1",num1);
    localStorage.setItem("operation","%");
    calScreen.innerHTML="";
}
function divide(){
    num1=Number(calScreen.innerHTML);
    localStorage.setItem("num1", num1);
    localStorage.setItem("operation","/");
    calScreen.innerHTML="";

}
function multiply(){
    num1=Number(calScreen.innerHTML);
    localStorage.setItem("num1",num1);
    localStorage.setItem("operation","*");
    calScreen.innerHTML="";

}
function subtract(){
    num1=Number(calScreen.innerHTML);
    localStorage.setItem("num1",num1);
    localStorage.setItem("operation","-");
    calScreen.innerHTML="";
}
function sum(){
    num1=Number(calScreen.innerHTML);
    localStorage.setItem("num1",num1);
    localStorage.setItem("operation","+");
    calScreen.innerHTML="";
}
function equal(){
    num1=localStorage.getItem("num1");
    num2=Number(calScreen.innerHTML);
    let oper=localStorage.getItem("operation");
    let result = 0;
    switch(oper){
        case "%":
            result=num1*(num2/100);
            break
        case "/":
            result=num1/num2;
            break;
        case "*":
            result=num1*num2;
            break;
        case "-":
            result=num1-num2;
            break;
        case "+":
            result=num1+num2;
            break
    }
    calScreen.innerHTML=result;
    if(calScreen.innerHTML.length>=10){
        calScreen.style.fontSize=35+"px";
    }
}




