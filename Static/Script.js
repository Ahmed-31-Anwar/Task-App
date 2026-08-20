async function addTask() {
    const input = document. getElementById("taskInput");
    const task = input.value;

    if (task === "") {
        return;
    }

    await fetch ("/tasks", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: task
        })
    });

    input.value = "";
    loadTasks();
}

async function loadTasks() {
    const response = await fetch("/tasks");
    const tasks = await response.json();
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach(function(task) {
        list.innerHTML += "<li>" + task.title + "</li>";
    });
}

loadTasks();



