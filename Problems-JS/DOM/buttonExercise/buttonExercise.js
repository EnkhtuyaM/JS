const root = document.getElementById("root");
const button = document.createElement("button");
// button.setAttribute("class", "button")
button.innerText = "Start";
button.addEventListener("click", addSquares);

root.appendChild(button);

function addSquares() {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  root.appendChild(square);
  square.innerText = "1";
}
