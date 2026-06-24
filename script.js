function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = input.value;

    taskList.appendChild(li);

    input.value = "";
}
