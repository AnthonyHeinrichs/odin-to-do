import "./global-style.css";
import "./components/styles/projects.css";
import "./components/styles/tasks.css";
import initialPageLayout from "./components/layouts/initial-page-layout";
import NewTaskForm from "./components/new-task-form";
import filterTasks from "./components/filter-tasks";
import updateFilterDom from "./components/update-filter-dom";
import dynamicWebpage from "./components/dynamic-webpage";
import createElement from "./utils/create-element";
import ProjectShowDom from "./components/layouts/show-project-list-dom";
import ProjectFormDom from "./components/layouts/project-form-dom";
import ShowProjectListDom from "./components/layouts/show-project-list-dom";
import { v4 as uniqueId } from "uuid";

initialPageLayout();
NewTaskForm();
dynamicWebpage();

const tasks = []
let getTasks = JSON.parse(localStorage.getItem("tasks"));
if (getTasks != null) {
  console.log(getTasks)
  for (let i = 0; i < getTasks.length; i++) {
    tasks.push(getTasks[i])
  }
}

const projects = [];
let getProjects = JSON.parse(localStorage.getItem("projects"));
console.log(getProjects)
if (getProjects != null) {
  console.log(getProjects)
  for (let i = 0; i < getProjects.length; i++) {
    projects.push(getProjects[i])
  }
}

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
  localStorage.setItem('tasks', JSON.stringify(tasks));

  e.target.reset();
  newTaskDiv.classList.add("hidden");
  filterTasks(tasks, currentPage, projects);
});

const leftColumn = document.getElementById("leftColumn");
const menuToggle = document.getElementById("menuToggle");
const allTasks = document.getElementById("allTasks");
allTasks.addEventListener("click", () => {
  if (window.innerWidth < 700) {
    leftColumn.classList.add("hidden");
  }
  menuToggle.checked = false;
  currentPage = "main";
  updateFilterDom(currentPage);
  filterTasks(tasks, currentPage, projects);
});

const dueToday = document.getElementById("dueToday");
dueToday.addEventListener("click", () => {
  if (window.innerWidth < 700) {
    leftColumn.classList.add("hidden");
  }
  menuToggle.checked = false;
  currentPage = "due today";
  updateFilterDom(currentPage);
  filterTasks(tasks, currentPage, projects);
});

const dueThisWeek = document.getElementById("dueThisWeek");
dueThisWeek.addEventListener("click", () => {
  if (window.innerWidth < 700) {
    leftColumn.classList.add("hidden");
  }
  menuToggle.checked = false;
  currentPage = "due this week";
  updateFilterDom(currentPage);
  filterTasks(tasks, currentPage, projects);
});

const completeTasks = document.getElementById("completedTasksFilter");
completeTasks.addEventListener("click", () => {
  if (window.innerWidth < 700) {
    leftColumn.classList.add("hidden");
  }
  menuToggle.checked = false;
  currentPage = "complete";
  updateFilterDom(currentPage);
  filterTasks(tasks, currentPage, projects);
});

export { tasks };

// Projects
ProjectFormDom();

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

const projectForm = document.getElementById("projectForm");

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.projectName.value;

  projects.push(name);
  addProjectToTaskForm(name);
  ProjectShowDom(tasks, projects, currentPage, name);
  localStorage.setItem('projects', JSON.stringify(projects));
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

for (let i = 0; i < projects.length; i++) {
  ShowProjectListDom(tasks, projects, currentPage, projects[i])
}
