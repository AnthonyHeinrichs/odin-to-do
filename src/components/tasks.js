export default function createTasks() {
  const tasks = []

  const task = (taskName, taskDescription, taskPriority, dueDate) => {
    return {
      complete: false,
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      due: dueDate
    }
  }
  
  const newTask = document.getElementById('newTaskForm')
  
  newTask.addEventListener('submit', e => {
    e.preventDefault()
  
    let name = e.target.elements.taskName.value
    let description = e.target.elements.taskDescription.value
    let priority = e.target.elements.priority.value
    let due = e.target.elements.dueDate.value
  
    let createdTask = task(name, description, priority, due)
    
    tasks.push(createdTask)
    console.log(tasks)
  })
}