function addElement(tagName, className) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    return element
}

function createDeleteTaskButton() {
    const actionsButtonDelete = addElement("button", "delete");
    actionsButtonDelete.innerHTML = "Delete";
    return actionsButtonDelete;
}

function createEditTaskButton() {
    const actionsButtonEdit = addElement("button", "edit");
    actionsButtonEdit.innerHTML = "Edit";
    return actionsButtonEdit;
}

function createTaskDescriptionInput(task) {
    const taskInputElement = addElement("input", "text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");
    return taskInputElement;
}

window.addEventListener("load", () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listElement = document.querySelector('#tasks');


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert("Please, fill out the task field");
            return;
        }
        const taskElement = addElement("li", "task");
        const taskContentElement = addElement("div", "content");

        taskElement.appendChild(taskContentElement);

        const taskInputElement = createTaskDescriptionInput(task);

        taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = addElement("div", "actions");

        const actionsButtonEdit = createEditTaskButton();

        taskActionsElement.appendChild(actionsButtonEdit);
        const actionsButtonDelete = createDeleteTaskButton();

        taskActionsElement.appendChild(actionsButtonDelete);
        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);
        input.value = "";
        taskInputElement.addEventListener("click", () => {
            taskInputElement.classList.toggle("completed")
        })
        actionsButtonEdit.addEventListener("click", () => {
            if (actionsButtonEdit.innerText.toLowerCase() === "edit") {
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
                actionsButtonEdit.innerText = "Save";
            } else {
                taskInputElement.setAttribute("readonly", "readonly");
                actionsButtonEdit.innerText = "Edit";
            }
        });

        actionsButtonDelete.addEventListener('click', () => {
            listElement.removeChild(taskElement);
        });
    });
});
