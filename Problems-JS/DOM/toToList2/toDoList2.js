let taskArr = [{}];

let root=document.getElementById("root");
let boardsArr=["To do", "In progress", "Stuck", "Done"];

let boards=document.createElement("div");
boards.setAttribute("class","boards");
root.appendChild(boards);

boardsArr.map((event)=>{
  let board=document.createElement("div");
  board.setAttribute("class","board");
  board.setAttribute("id", event);
  boards.appendChild(board);

  let title=document.createElement("h2");
  title.setAttribute("class","boardHeader");
  title.setAttribute("id",`${event}`);
  board.appendChild(title)

  let cards=document.createElement("div");
  cards.setAttribute("class","cards");
  cards.setAttribute("id",`${event}`);
  board.appendChild(cards);

  let button=document.createElement("button");
  button.setAttribute("class","button");
  board.appendChild(button);
});

let taskProperties=["Title", "Description", "Status", "Priority"];
let popup=document.createElement("div");
popup.setAttribute("class", "popup");
root.appendChild(popup);

let popupHeader=document.createElement("h2");
popupHeader.setAttribute("class", "popupHeader");
popup.appendChild(popupHeader);

taskProperties.map((event)=>{
  let property=document.createElement("div");
  property.setAttribute("class", "property");
  property.setAttribute("id", `${event}`);
  popup.appendChild(property);

  let input=document.createElement("input");
  input.setAttribute("class", "input");
  input.setAttribute("id", `${event}`);
  property.appendChild(input);
})

let popupButton=document.createElement("button");
popupButton.setAttribute("class", "button");
popup.appendChild(popupButton);