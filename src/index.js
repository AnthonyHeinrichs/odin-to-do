import './global-style.css';
import './components/styles/projects.css'
import './components/styles/tasks.css'
import initialPageLayout from "./components/layouts/initial-page-layout";
import NewTaskForm from './components/new-task-form'
import filterTasks from './components/filter-tasks'
import updateFilterDom from './components/update-filter-dom'
import createElement from './utils/create-element'
import checklistIcon from './assets/checklist.png'
import { v4 as uniqueId, v4 } from 'uuid'

initialPageLayout()
NewTaskForm()

// Tasks

let currentPage = 'main'
const tasks = []

const task = (taskId, taskName, taskDescription, taskPriority, taskProject, dueDate) => {
  return {
    id: taskId,
    complete: false,
    name: taskName,
    description: taskDescription,
    priority: taskPriority,
    project: taskProject,
    due: dueDate
  }
}

filterTasks(tasks, 'main')
updateFilterDom(currentPage)

const newTask = document.getElementById('newTaskForm')
const newTaskDiv = document.getElementById('formDiv')
  
newTask.addEventListener('submit', e => {
  e.preventDefault()

  let id = uniqueId()
  let name = e.target.elements.taskName.value
  let description = e.target.elements.taskDescription.value
  let priority = e.target.elements.priority.value
  let project = e.target.elements.project.value
  let due = e.target.elements.dueDate.value

  let createdTask = task(id, name, description, priority, project, due)
  tasks.push(createdTask)
  
  e.target.reset()
  newTaskDiv.classList.add('hidden')
  filterTasks(tasks, currentPage)
})

const allTasks = document.getElementById('allTasks')
allTasks.addEventListener('click', () => {
  currentPage = 'main'
  updateFilterDom(currentPage)
  filterTasks(tasks, currentPage)
})

const dueToday = document.getElementById('dueToday')
dueToday.addEventListener('click', () => {
  currentPage = 'due today'
  updateFilterDom(currentPage)
  filterTasks(tasks, currentPage)
})

const dueThisWeek = document.getElementById('dueThisWeek')
dueThisWeek.addEventListener('click', () => {
  currentPage = 'due this week'
  updateFilterDom(currentPage)
  filterTasks(tasks, currentPage)
})

const completeTasks = document.getElementById('completedTasksFilter')
completeTasks.addEventListener('click', () => {
  currentPage = 'complete'
  updateFilterDom(currentPage)
  filterTasks(tasks, currentPage)
})

export { tasks }
// Projects

const projects = ['No project']

const projectDropDown = document.getElementById('taskProject')

if (projects.length > 0) {
  for (let i = 0; i < projects.length; i++) {
    const project = createElement({element: 'option', domValue: projects[i], domText: projects[i]})
    projectDropDown.appendChild(project) 
  }
}

const addProjectButton = document.getElementById('newProject')
const newProjectContainer = document.getElementById('newProjectsContainer')
const projectForm = createElement({element: 'form', domId: 'projectForm', className:'hidden'})
newProjectContainer.insertAdjacentElement('beforebegin', projectForm)

const newProjectName = createElement({
  element: 'input', 
  domType:'text',
  domId: 'projectName',
  domName: 'projectName',
  domPlaceholder: 'Project name...'
})
projectForm.appendChild(newProjectName)

const buttonDiv = createElement({element: 'div', className: 'projectFormButtons'})
projectForm.appendChild(buttonDiv)

const saveButton = createElement({
  element: 'input',
  className: 'projectsSaveButton',
  domType: 'submit',
  domValue: 'Save'
})
buttonDiv.appendChild(saveButton)

const cancelButton = createElement({
  element: 'button',
  className: 'projectsCancelButton',
  domType: 'button',
  domText: 'Cancel',
  domId: 'projectsCancelBtn'
})
buttonDiv.appendChild(cancelButton)

addProjectButton.addEventListener('click', () => {
  projectForm.classList.remove('hidden')
})

cancelButton.addEventListener('click', () => {
  projectForm.classList.add('hidden')
})

projectForm.addEventListener('submit', e => {
  e.preventDefault()

  const name = e.target.elements.projectName.value

  projects.push(name)
  addProjectToTaskForm(name)
  addProjectToProjectList(name)
  e.target.reset()
  projectForm.classList.add('hidden')
})

const projectListDiv = createElement({element: 'div', className: 'createdProjects', domId: 'createdProjects'})
projectForm.insertAdjacentElement('beforebegin', projectListDiv)

const addProjectToProjectList = (name) => {
  const singleProjectDiv = createElement({element:'div', className:'singleProject'})
  const projectIcon = createElement({
    element: 'img', 
    domSrc: checklistIcon, 
    className:'checklistIcon'
  })
  const project = createElement({element: 'button', className: 'project', domText: name})
  const options = document.getElementById('taskProject')
  singleProjectDiv.appendChild(projectIcon)
  singleProjectDiv.appendChild(project)
  projectListDiv.appendChild(singleProjectDiv)
  project.addEventListener('click', () => {
    currentPage = project.innerHTML
    filterTasks(tasks, currentPage)
    updateFilterDom(currentPage)
    options.value = currentPage
  }) 
}

const addProjectToTaskForm = (name) => {
  const project = createElement({element: 'option', domValue: name, domText: name})
  projectDropDown.appendChild(project)
}


