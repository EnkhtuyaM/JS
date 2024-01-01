const root=document.getElementById("root")
const cards=document.createElement("div");
cards.setAttribute("class","cards")
root.appendChild(cards)
function toDoList(){
    for(let i=0;i<4;i++){
        const card=document.createElement("div");
        card.setAttribute("class","card");
        if(i==0){
            card.innerText="To do";
            // card.addEventListener("click", toDoList)
        }
        if(i==1){
           card.innerText="In progress";
        }
        if(i==2){
            card.innerText="Stuck";
        }
        if(i==3){
            card.innerText="Done";
        }
        cards.appendChild(card)
    }
}
toDoList()



