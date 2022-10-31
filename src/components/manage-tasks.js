import createElement from "../utils/create-element";
import { tasks } from "../index";

export default function manageTasks(passedTasks, passedProjects) {
  const formDiv = document.getElementById("formDiv");

  const noTask = document.getElementById("noTask");
  if (!noTask.classList.contains("hidden")) {
    noTask.classList.add("hidden");
  }

  const tasksToRemoveFromDom = document.querySelectorAll(".task");
  tasksToRemoveFromDom.forEach((el) => el.remove());

  for (let i = 0; i < passedTasks.length; i++) {
    const taskDiv = createElement({ element: "div", className: "task" });
    formDiv.insertAdjacentElement("beforebegin", taskDiv);
    const taskDetailsDiv = createElement({
      element: "div",
      className: "taskDetails",
    });
    taskDiv.appendChild(taskDetailsDiv);

    const taskCheckbox = createElement({
      element: "input",
      domType: "checkbox",
      domName: "complete",
    });
    if (passedTasks[i].complete) {
      taskCheckbox.setAttribute("checked", "checked");
    } else {
      taskCheckbox.removeAttribute("checked");
    }
    taskDetailsDiv.appendChild(taskCheckbox);

    const taskName = createElement({
      element: "p",
      className: "name",
      domText: passedTasks[i].name,
    });
    taskDetailsDiv.appendChild(taskName);
    const taskDescription = createElement({
      element: "p",
      className: "description",
      domText: passedTasks[i].description,
    });
    taskDetailsDiv.appendChild(taskDescription);
    const taskPriority = createElement({
      element: "p",
      className: "priority",
      domText: passedTasks[i].priority,
    });
    taskDetailsDiv.appendChild(taskPriority);
    const taskProject = createElement({
      element: "p",
      className: "projectRef",
      domText: passedTasks[i].project,
    });
    taskDetailsDiv.appendChild(taskProject);
    const taskDueDate = createElement({
      element: "time",
      className: "due",
      domText: passedTasks[i].due,
    });
    taskDetailsDiv.appendChild(taskDueDate);

    const btnDiv = createElement({ element: "div", className: "taskBtnDiv" });
    taskDiv.appendChild(btnDiv);
    const taskUpdateBtn = createElement({
      element: "button",
      className: "updateBtn",
      domText: "Update",
    });
    btnDiv.appendChild(taskUpdateBtn);
    const taskDeleteBtn = createElement({
      element: "button",
      className: "deleteBtn",
      domText: "Delete",
    });
    btnDiv.appendChild(taskDeleteBtn);
    btnDiv.classList.add("hidden");

    taskCheckbox.addEventListener("change", () => {
      if (taskCheckbox.checked) {
        passedTasks[i].complete = true;
        taskDiv.classList.add("hidden");
        taskCheckbox.setAttribute("checked", "checked");
      } else {
        passedTasks[i].complete = false;
        taskDiv.classList.add("hidden");
        taskCheckbox.setAttribute("checked", "unchecked");
      }
    });

    taskName.addEventListener("click", () => {
      if (taskDiv.classList.contains("taskExpanded")) {
        taskDiv.classList.remove("taskExpanded");
        btnDiv.classList.add("hidden");
      } else {
        taskDiv.classList.add("taskExpanded");
        btnDiv.classList.remove("hidden");
      }
    });

    taskUpdateBtn.addEventListener("click", () => {
      taskUpdateBtn.classList.add("hidden");
      const btnsToRemove = [
        taskName,
        taskDescription,
        taskPriority,
        taskProject,
        taskDueDate,
        taskCheckbox,
      ];
      btnsToRemove.forEach((btn) => {
        btn.classList.add("hidden");
      });
      const updateDiv = createElement({
        element: "form",
        className: "updateDiv",
        domId: "updateDiv",
      });
      taskDetailsDiv.appendChild(updateDiv);
      const name = createElement({
        element: "input",
        domType: "text",
        domId: "updateTaskName",
        domName: "taskName",
        domValue: passedTasks[i].name,
      });
      name.setAttribute("required", "required");
      name.setAttribute("maxlength", "20");
      updateDiv.appendChild(name);

      const description = createElement({
        element: "input",
        domType: "text",
        domId: "updateTaskDescription",
        domName: "updateTaskDescription",
        domValue: passedTasks[i].description,
      });
      description.setAttribute("required", "required");
      description.setAttribute("maxlength", "20");
      updateDiv.appendChild(description);

      const priority = createElement({
        element: "select",
        domId: "updateTaskPriority",
        domName: "updateTaskPriority",
        domValue: passedTasks[i].priority,
      });

      const lowPriority = createElement({
        element: "option",
        domValue: "low",
        domText: "Low",
      });
      if (passedTasks[i].priority === "low") {
        lowPriority.setAttribute("selected", "selected");
      }
      priority.appendChild(lowPriority);

      const mediumPriority = createElement({
        element: "option",
        domValue: "medium",
        domText: "Medium",
      });
      if (passedTasks[i].priority === "medium") {
        mediumPriority.setAttribute("selected", "selected");
      }
      priority.appendChild(mediumPriority);

      const highPriority = createElement({
        element: "option",
        domValue: "high",
        domText: "High",
      });
      if (passedTasks[i].priority === "high") {
        highPriority.setAttribute("selected", "selected");
      }
      priority.appendChild(highPriority);
      updateDiv.appendChild(priority);

      const project = createElement({
        element: "select",
        domId: "taskProject",
        domName: "project",
      });

      for (let p = 0; p < passedProjects.length; p++) {
        let projectOption = createElement({
          element: "option",
          domValue: passedProjects[p],
          domText: passedProjects[p],
        });
        if (passedProjects[p] === passedTasks[i].project) {
          console.log('set attribute')
          projectOption.setAttribute("selected", "selected")
        }
        project.appendChild(projectOption);
      }
      updateDiv.appendChild(project);

      const due = createElement({
        element: "input",
        domId: "dueDate",
        domType: "date",
        domValue: passedTasks[i].due,
      });
      updateDiv.appendChild(due);

      const save = createElement({
        element: "button",
        domType: "submit",
        domId: "updateSave",
        domText: "Save",
      });
      updateDiv.appendChild(save);

      updateDiv.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskIndexToUpdate = tasks.findIndex(
          (obj) => obj.id === passedTasks[i].id
        );
        passedTasks[taskIndexToUpdate].name = name.value;
        passedTasks[taskIndexToUpdate].description = description.value;
        passedTasks[taskIndexToUpdate].priority = priority.value;
        passedTasks[taskIndexToUpdate].project = project.value;
        passedTasks[taskIndexToUpdate].due = due.value;
        taskName.innerHTML = name.value;
        taskDescription.innerHTML = description.value;
        taskPriority.innerHTML = priority.value;
        taskProject.innerHTML = project.value;
        taskDueDate.innerHTML = due.value;
        updateDiv.classList.add("hidden");
        taskUpdateBtn.classList.remove("hidden");
        btnsToRemove.forEach((btn) => {
          btn.classList.remove("hidden");
        });
      });
    });

    taskDeleteBtn.addEventListener("click", () => {
      const taskIndexToRemove = tasks.findIndex(
        (obj) => obj.id === passedTasks[i].id
      );
      tasks.splice(taskIndexToRemove, 1);
      taskDiv.remove();
    });
  }
}
