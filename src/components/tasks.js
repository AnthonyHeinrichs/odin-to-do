import createElement from "../utils/create-element"
import './styles/tasks.css'

export default function handleTasks() {
  const tasks = []

  const task = (taskName, taskDescription, taskPriority, dueDate) => {
    return {
      id: tasks.length + 1,
      complete: false,
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
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
    let due = e.target.elements.dueDate.value
  
    let createdTask = task(name, description, priority, due)

    tasks.push(createdTask)
    
    e.target.reset()
    newTaskDiv.classList.add('hidden')
    addTaskToDom(createdTask)
    console.log(createdTask)
  })

  const formDiv = document.getElementById('formDiv')

  const noTask = document.getElementById('noTask')

  // Load existing tasks and hide no task div
  if (tasks.length > 0) {
    noTask.classList.add('hidden')
  }

  for (let i = 0; i < tasks.length; i++) {
    const taskDiv = createElement({element: 'div', className: 'task'})
    formDiv.insertAdjacentElement('beforebegin', taskDiv)
    const taskName = createElement({element: 'p', className: 'name', domText: tasks[i].name})
    taskDiv.appendChild(taskName)
    const taskDescription = createElement({element: 'p', className: 'description', domText: tasks[i].description})
    taskDiv.appendChild(taskDescription)
    const taskPriority = createElement({element: 'p', className:'priority', domText: tasks[i].priority})
    taskDiv.appendChild(taskPriority)
    const taskDueDate = createElement({element: 'time', className:'due', domText: tasks[i].due})
    taskDiv.appendChild(taskDueDate)
  }
  

  const addTaskToDom = (task) => {
    if (!(noTask.classList.contains('hidden'))){
      noTask.classList.add('hidden')
    }
    const taskDiv = createElement({element: 'div', className: 'task'})
    formDiv.insertAdjacentElement('beforebegin', taskDiv)
    const taskName = createElement({element: 'p', className: 'name', domText: task.name})
    taskDiv.appendChild(taskName)
    const taskDescription = createElement({element: 'p', className: 'description', domText: task.description})
    taskDiv.appendChild(taskDescription)
    const taskPriority = createElement({element: 'p', className:'priority', domText: task.priority})
    taskDiv.appendChild(taskPriority)
    const taskDueDate = createElement({element: 'time', className:'due', domText: task.due})
    taskDiv.appendChild(taskDueDate)
  }
}