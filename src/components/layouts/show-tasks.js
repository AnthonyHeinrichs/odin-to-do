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
    const taskDetailsDiv = createElement({element: 'div', className: 'taskDetails'})
    taskDiv.appendChild(taskDetailsDiv)

    const taskCheckbox = createElement({element: 'input', domType: 'checkbox', domName: 'complete'})
    if (tasks[i].complete) {
      taskCheckbox.setAttribute('checked', 'checked')
    } else {
      taskCheckbox.removeAttribute('checked')
    }
    taskDetailsDiv.appendChild(taskCheckbox)

    const taskName = createElement({element: 'p', className: 'name', domText: tasks[i].name})
    taskDetailsDiv.appendChild(taskName)
    const taskDescription = createElement({element: 'p', className: 'description', domText: tasks[i].description})
    taskDetailsDiv.appendChild(taskDescription)
    const taskPriority = createElement({element: 'p', className:'priority', domText: tasks[i].priority})
    taskDetailsDiv.appendChild(taskPriority)
    const taskProject = createElement({element: 'p', className:'projectRef', domText: tasks[i].project})
    taskDetailsDiv.appendChild(taskProject)
    const taskDueDate = createElement({element: 'time', className:'due', domText: tasks[i].due})
    taskDetailsDiv.appendChild(taskDueDate)

    const btnDiv = createElement({element:'div', className:'taskBtnDiv'})
    taskDiv.appendChild(btnDiv)
    const taskUpdateBtn = createElement({element: 'button', className:'updateBtn', domText: 'Update'})
    btnDiv.classList.add('hidden')
    btnDiv.appendChild(taskUpdateBtn)


    taskCheckbox.addEventListener('change', () => {
      if (taskCheckbox.checked) {
        tasks[i].complete = true
        taskCheckbox.setAttribute('checked', 'checked')
      } else {
        tasks[i].complete = false
        taskCheckbox.setAttribute('checked', 'unchecked')
      }
    })

    taskName.addEventListener('click', () => {
      if (taskDiv.classList.contains('taskExpanded')) {
        taskDiv.classList.remove('taskExpanded')
        btnDiv.classList.add('hidden')
      } else {
        taskDiv.classList.add('taskExpanded')
        btnDiv.classList.remove('hidden')
      }
    })
  }
}