import "./global-style.css";
import "./components/styles/projects.css";
import "./components/styles/tasks.css";
import initialPageLayout from "./components/layouts/initial-page-layout";
import NewTaskForm from "./components/new-task-form";
import filterTasks from "./components/filter-tasks";
import updateFilterDom from "./components/update-filter-dom";
import createElement from "./utils/create-element";
import ProjectShowDom from "./components/layouts/show-project-list-dom";
import ProjectFormDom from "./components/layouts/project-form-dom";
import { v4 as uniqueId } from "uuid";

initialPageLayout();
NewTaskForm();

const tasks = [];
const projects = ["No project"];

// Tasks

let currentPage = "main";

const task = (
  taskId,
  taskName,
  taskDescription,
  taskPriority,
  taskProject,
  dueDate
) => {
  return {
    id: taskId,
    complete: false,
    name: taskName,
    description: taskDescription,
    priority: taskPriority,
    project: taskProject,
    due: dueDate,
  };
};

filterTasks(tasks, "main", projects);
updateFilterDom(currentPage);

const newTask = document.getElementById("newTaskForm");
const newTaskDiv = document.getElementById("formDiv");

newTask.addEventListener("submit", (e) => {
  e.preventDefault();

  let id = uniqueId();
  let name = e.target.elements.taskName.value;
  let description = e.target.elements.taskDescription.value;
  let priority = e.target.elements.priority.value;
  let project = e.target.elements.project.value;
  let due = e.target.elements.dueDate.value;

  let createdTask = task(id, name, description, priority, project, due);
  tasks.push(createdTask);

  e.target.reset();
  newTaskDiv.classList.add("hidden");
  filterTasks(tasks, currentPage, projects);
});

const allTasks = document.getElementById("allTasks");
allTasks.addEventListener("click", () => {
  currentPage = "main";
  updateFilterDom(currentPage);
  filterTasks(tasks, currentPage, projects);
});

const dueToday = document.getElementById("dueToday");
dueToday.addEventListener("click", () => {
  currentPage = "due today";
  updateFilterDom(currentPage);
  filterTasks(tasks, currentPage, projects);
});

const dueThisWeek = document.getElementById("dueThisWeek");
dueThisWeek.addEventListener("click", () => {
  currentPage = "due this week";
  updateFilterDom(currentPage);
  filterTasks(tasks, currentPage, projects);
});

const completeTasks = document.getElementById("completedTasksFilter");
completeTasks.addEventListener("click", () => {
  currentPage = "complete";
  updateFilterDom(currentPage);
  filterTasks(tasks, currentPage, projects);
});

export { tasks };

// Projects
ProjectFormDom()

const projectDropDown = document.getElementById("taskProject");

if (projects.length > 0) {
  for (let i = 0; i < projects.length; i++) {
    const project = createElement({
      element: "option",
      domValue: projects[i],
      domText: projects[i],
    });
    projectDropDown.appendChild(project);
  }
}

const projectForm = document.getElementById('projectForm')

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.projectName.value;

  projects.push(name);
  addProjectToTaskForm(name);
  ProjectShowDom(tasks, projects, currentPage, name);
  e.target.reset();
  projectForm.classList.add("hidden");
});

const projectListDiv = createElement({
  element: "div",
  className: "createdProjects",
  domId: "createdProjects",
});
projectForm.insertAdjacentElement("beforebegin", projectListDiv);

const addProjectToTaskForm = (name) => {
  const project = createElement({
    element: "option",
    domValue: name,
    domText: name,
  });
  projectDropDown.appendChild(project);
};
