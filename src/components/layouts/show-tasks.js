import createElement from "../../utils/create-element";

export default function showTasks(tasks) {
  const formDiv = document.getElementById('formDiv')

  const noTask = document.getElementById('noTask')
  if (!(noTask.classList.contains('hidden'))){
    noTask.classList.add('hidden')
  }

  const tasksToRemoveFromDom = document.querySelectorAll('.task')
  tasksToRemoveFromDom.forEach(el => el.remove())

  for (let i = 0; i < tasks.length; i++) {
    const taskDiv = createElement({element: 'div', className: 'task'})
    formDiv.insertAdjacentElement('beforebegin', taskDiv)
    const taskCheckbox = createElement({element: 'input', domType: 'checkbox', domName: 'complete'})
    if (tasks[i].complete) {
      taskCheckbox.setAttribute('checked', 'checked')
    } else {
      taskCheckbox.removeAttribute('checked')
    }
    taskDiv.appendChild(taskCheckbox)
    const taskName = createElement({element: 'p', className: 'name', domText: tasks[i].name})
    taskDiv.appendChild(taskName)
    const taskDescription = createElement({element: 'p', className: 'description', domText: tasks[i].description})
    taskDiv.appendChild(taskDescription)
    const taskPriority = createElement({element: 'p', className:'priority', domText: tasks[i].priority})
    taskDiv.appendChild(taskPriority)
    const taskProject = createElement({element: 'p', className:'projectRef', domText: tasks[i].project})
    taskDiv.appendChild(taskProject)
    const taskDueDate = createElement({element: 'time', className:'due', domText: tasks[i].due})
    taskDiv.appendChild(taskDueDate)

    taskCheckbox.addEventListener('change', () => {
      if (taskCheckbox.checked) {
        tasks[i].complete = true
        taskCheckbox.setAttribute('checked', 'checked')
      } else {
        tasks[i].complete = false
        taskCheckbox.setAttribute('checked', 'unchecked')
      }
    })
  }
}