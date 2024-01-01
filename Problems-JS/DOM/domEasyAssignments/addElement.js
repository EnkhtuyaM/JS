const root=document.getElementById("root");
const addButton=document.createElement("div")
addButton.setAttribute("class", "startButton");
addButton.addEventListener("click", addSquare)
addButton.innerText="Add";
root.appendChild(addButton)
const squares=document.createElement("div");
squares.setAttribute("class","squares")
root.appendChild(squares)

function addSquare (){
    squares.innerText="1"
    for(let i=0; i<12; i++){
        const square=document.createElement("div"); 
        square.setAttribute("class", "square")
        squares.appendChild(square)
    }
    console.log(addSquare)
}
addSquare()



