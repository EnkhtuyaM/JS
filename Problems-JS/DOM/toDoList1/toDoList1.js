let todos = [
  {
    title: "Complete HW",
    description: "task1",
    status: "todo",
  },
  {
    title: "In progress",
    description: "task2",
    status: "in progress",
  },
  {
    title: "Stuck",
    description: "task3",
    status: "stuck",
  },
  {
    title: "ABC",
    description: "task4",
    status: "done",
  },
  {
    title: "BCD",
    description: "task5",
    status: "done",
  },
  {
    title: "CDF",
    description: "task6",
    status: "stuck",
  },
  {
    title: "DKK",
    description: "task7",
    status: "stuck",
  },
  {
    title: "DRR project",
    description: "task8",
    status: "in progress",
  },
  {
    title: "ADDone",
    description: "task9",
    status: "done",
  },
  {
    title: "FGDone",
    description: "task10",
    status: "in progress",
  },
  {
    title: "KJDone",
    description: "task11",
    status: "done",
  },
  {
    title: "Project KBC",
    description: "task12",
    status: "todo",
  },
  {
    title: "Project#12",
    description: "task13",
    status: "todo",
  },
  {
    title: "ABC1 project",
    description: "task14",
    status: "in progress",
  },
  {
    title: "JKK project1",
    description: "task15",
    status: "stuck",
  },
  {
    title: "PORT",
    description: "task16",
    status: "stuck",
  },
  {
    title: "Read",
    description: "task17",
    status: "in progress",
  },
  {
    title: "Report",
    description: "task18",
    status: "done",
  },
  {
    title: "Project#11",
    description: "task19",
    status: "todo",
  },
  {
    title: "KBC project",
    description: "task20",
    status: "in progress",
  },
];
const root = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

function drawTodos(a) {
  container.innerHTML = "";
  let futureDiv = document.createElement("div");
  futureDiv.setAttribute("class", "todoList");
  futureDiv.innerText = "To do";
  let inProgDiv = document.createElement("div");
  inProgDiv.setAttribute("class", "todoList");
  inProgDiv.innerText = "In progress";
  let stuckDiv = document.createElement("div");
  stuckDiv.setAttribute("class", "todoList");
  stuckDiv.innerText = "Stuck";
  let doneDiv = document.createElement("div");
  doneDiv.setAttribute("class", "todoList");
  doneDiv.innerText = "Done";
  container.appendChild(futureDiv);
  container.appendChild(inProgDiv);
  container.appendChild(stuckDiv);
  container.appendChild(doneDiv);

  let filteredToDo = a.filter((b) => {
    return b.status == "todo";
  });
  filteredToDo.map((task) => {
    const newToDo = document.createElement("div");
    futureDiv.appendChild(newToDo);
    newToDo.innerText = task.title;
  });

  let filteredInProgress = a.filter((b) => {
    return b.status == "in progress";
  });
  filteredInProgress.map((task) => {
    const newInProgress = document.createElement("div");
    inProgDiv.appendChild(newInProgress);
    newInProgress.innerText = task.title;
  });
  let filteredStuck = a.filter((b) => {
    return b.status == "stuck";
  });
  filteredStuck.map((task) => {
    const newStuck = document.createElement("div");
    stuckDiv.appendChild(newStuck);
    newStuck.innerText = task.title;
  });
  let filteredDone = a.filter((b) => {
    return b.status == "done";
  });
  filteredDone.map((task) => {
    const newDone = document.createElement("div");
    doneDiv.appendChild(newDone);
    newDone.innerText = task.title;
  });
}
drawTodos(todos);
// const addTaskBtn = document.createElement("button");
// addTaskBtn.setAttribute("class", "addTaskBtn");
// addTaskBtn.innerText = "+ Add card";
// futureDiv.appendChild(addTaskBtn);
// inProgDiv.appendChild(addTaskBtn);
// stuckDiv.appendChild(addTaskBtn);
// doneDiv.appendChild(addTaskBtn);
function editTodos() {
  todos[1].status = "done";
  drawTodos(todos);
}
editTodos();

function addTodo() {
  const newTitle = document.getElementById("titleInpiut").value;
  const newDesc = document.getElementById("titleDesc").value;
  const newStatus = document.getElementById("titleStatus").value;
  todos.push({
    title: newTitle,
    description: newDesc,
    status: newStatus,
  });
  drawTodos(todos);
}
