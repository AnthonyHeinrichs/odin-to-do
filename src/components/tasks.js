import showTasks from "./layouts/show-tasks"
import './styles/tasks.css'

const tasks = []

export default function handleTasks() {
  
  const task = (taskName, taskDescription, taskPriority, taskProject, dueDate) => {
    return {
      id: tasks.length + 1,
      complete: false,
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      project: taskProject,
      due: dueDate
    }
  }
  
  const newTaskDiv = document.getElementById('formDiv')
  const newTask = document.getElementById('newTaskForm')
  
  newTask.addEventListener('submit', e => {
    e.preventDefault()
  
    let name = e.target.elements.taskName.value
    let description = e.target.elements.taskDescription.value
    let priority = e.target.elements.priority.value
    let project = e.target.elements.project.value
    let due = e.target.elements.dueDate.value
  
    let createdTask = task(name, description, priority, project, due)

    tasks.push(createdTask)
    
    e.target.reset()
    newTaskDiv.classList.add('hidden')
    showTasks(tasks)
  })
  showTasks(tasks)
}

export { tasks }