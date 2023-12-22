const root = document.getElementById("root");
const startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.setAttribute("class", "startButton");
startButton.addEventListener("click", startGame);
root.appendChild(startButton);

const boxes = document.createElement("div");
boxes.setAttribute("class", "boxes");
root.appendChild(boxes);

function startGame() {
  boxes.innerHTML = "";
  const red = Math.floor(Math.random() * 215) + 40;
  const green = Math.floor(Math.random() * 215) + 40;
  const blue = Math.floor(Math.random() * 215) + 40;
  const randomColor = `rgb(${red},${green},${blue})`;
  const differentColor = `rgb(${red - 40},${green - 40},${blue - 40})`;
  const random = Math.floor(Math.random() * 15);
  for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    if (i == random) {
      box.style.backgroundColor = differentColor;
      box.addEventListener("click", startGame);
    } else {
      box.style.backgroundColor = randomColor;
    }
    boxes.appendChild(box);
  }
}
