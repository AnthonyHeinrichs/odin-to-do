export default function NewTaskForm() {
  const newTaskButton = document.getElementById("newTask");
  const cancelFormButton = document.getElementById("cancelBtn");
  const formDiv = document.getElementById("formDiv");

  const newTaskName = document.getElementById("taskName");
  const newTaskDescription = document.getElementById("taskDescription");
  const dueDate = document.getElementById("dueDate");

  newTaskButton.addEventListener("click", () => {
    if (formDiv.classList.contains("hidden")) {
      formDiv.classList.remove("hidden");
    } else {
      formDiv.classList.add("hidden");
    }
  });

  cancelFormButton.addEventListener("click", () => {
    formDiv.classList.add("hidden");
    newTaskName.value = null;
    newTaskDescription.value = null;
    dueDate.value = null;
  });
}
