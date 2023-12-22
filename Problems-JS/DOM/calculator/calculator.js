const root = document.getElementById("root");
const startButton = document.getElement("AC");
startButton.innerText = "AC";
startButton.addEventListener("click", startCalculator);
root.appendChild(startButton);

const numbers = document.createElement("div");
numbers.setAttribute("class", "numbers");
numbers.addEventListener("click", startCalculator);
root.appendChild(numbers);

const operations = document.createElement("div");
operations.setAttribute("class", "operations");
operations.addEventListener("click", startCalculator);
