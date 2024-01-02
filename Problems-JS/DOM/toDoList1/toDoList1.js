let todos=[
    {
        title: "To do",
        description: "task1",
        status: "todo",
    },
    {
        title: "In progress",
        description: "task2",
        status: "in progress"
    },
    {
        title: "Stuck",
        description: "task3",
        status: "stuck"
    },
    {
        title: "Done",
        description: "task4",
        status: "done"
    },
];
const root=document.getElementById("root")
const container=document.createElement("div")
container.setAttribute("class","container")
root.appendChild(container)



function drawTodos(todosToRender){
    container.innerHTML="";
    const futureDiv=document.createElement("div");
    futureDiv.setAttribute("class","todoList")
    futureDiv.innerText="To do"
    const inProgDiv=document.createElement("div")
    inProgDiv.setAttribute("class","todoList")
    inProgDiv.innerText="In progress"
    const stuckDiv=document.createElement("div")
    stuckDiv.setAttribute("class","todoList")
    stuckDiv.innerText="Stuck"
    const doneDiv=document.createElement("div")
    doneDiv.setAttribute("class","todoList")
    doneDiv.innerText="Done"
    container.appendChild(futureDiv)
    container.appendChild(inProgDiv)
    container.appendChild(stuckDiv)
    container.appendChild(doneDiv)

    const addTaskBtn = document.createElement("button");
    addTaskBtn.setAttribute("class", "addTaskBtn");
    addTaskBtn.innerText = "+ Add card";

    futureDiv.appendChild(addTaskBtn);
    // inProgDiv.appendChild(addTaskBtn)
    // stuckDiv.appendChild(addTaskBtn)
    // doneDiv.appendChild(addTaskBtn)

    const futureTodo=todosToRender.filter((todo)=>{
        return todo.status=="todo"
    })
    console.log(futureTodo)
    futureTodo.map((task)=>{
        console.log(task.title)
    })
    const inProgress=todosToRender.filter((todo)=>{
        return todo.status=="inProgress"
    })
    console.log(inProgress)
    inProgress.map((task)=>{
        console.log(task.title)
    })
    const stuck=todosToRender.filter((todo)=>{
        return todo.status=="stuck"
    })
    console.log(stuck)
    stuck.map((task)=>{
        console.log(task.title)
    })
    const done=todosToRender.filter((todo)=>{
        return todo.status=="done"
    })
    console.log(done)
    done.map((task)=>{
        console.log(task.title)
    })
}
drawTodos(todos)
function editTodos(){
    todos[1].status="done"
    drawTodos(todos)
}
editTodos();

function addTodo(){
    const newTitle=document.getElementById('titleInpiut').value;
    const newDesc=document.getElementById('titleDesc').value;
    const newStatus=document.getElementById('titleStatus').value;
    todos.push({
        title: newTitle,
        description: newDesc,
        status: newStatus
    })
    drawTodos(todos)

}
