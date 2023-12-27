const root = document.getElementById("root");
const button = document.createElement("button");
button.addEventListener("click", changeBgColor);
const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

root.appendChild(button);
button.innerText = "Change color";

function changeBgColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red},${green},${blue})`;
  for (let i = 0; i < 5; i++) {
    container.style.backgroundColor = randomColor;
  }
}
changeBgColor();
