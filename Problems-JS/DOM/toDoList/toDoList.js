const root = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);
const cards = document.createElement("div");
cards.setAttribute("class", "cards");
container.appendChild(cards);

const cardTitle = [
  { title: "To do", id: "toDo" },
  { title: "In progress", id: "inProgress" },
  { title: "Stuck", id: "stuck" },
  { title: "Done", id: "done" },
];
function createCard() {
  cardTitle.map((title) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    const header = document.createElement("h1");
    header.setAttribute("class", "header");
    header.innerText = title.title;
    card.appendChild(header);

    const taskCount = document.createElement("p");
    taskCount.innerText = 0;
    header.appendChild(taskCount);

    const tasks = document.createElement("div");
    tasks.setAttribute("class", "tasks");
    card.appendChild(tasks);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.setAttribute("class", "addTaskBtn");
    addTaskBtn.innerText = "+ Add card";
    card.appendChild(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
      const addTaskDiv = document.createElement("div");
      addTaskDiv.setAttribute("class", "addTaskDiv");
      root.appendChild(addTaskDiv);

      const addTask = document.createElement("div");
      addTask.setAttribute("class", "addTask");
      addTaskDiv.appendChild(addTask);

      const addTaskHeader = document.createElement("h2");
      addTaskHeader.innerText = "Add Task";
      addTask.appendChild(addTaskHeader);

      const title = document.createElement("input");
      title.setAttribute("class", "title");
      addTask.appendChild(title);

      const description = document.createElement("input");
      description.setAttribute("class", "description");
      //   description.setAttribute("id","description")
      addTask.appendChild(description);
    });
  });
}
createCard();
// function toDoList() {
//   for (let i = 0; i < 4; i++) {
//     const card = document.createElement("div");
//     card.setAttribute("class", "card");
//     if (i == 0) {
//       card.innerText = "To do";
//       // card.addEventListener("click", toDoList)
//     }
//     if (i == 1) {
//       card.innerText = "In progress";
//     }
//     if (i == 2) {
//       card.innerText = "Stuck";
//     }
//     if (i == 3) {
//       card.innerText = "Done";
//     }
//     cards.appendChild(card);
//   }
// }
// toDoList();
