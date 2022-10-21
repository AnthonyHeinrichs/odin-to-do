import createElement from "../../utils/create-element";
import { tasks } from '../../index'
import TaskFiltersDom from "./task-filter-dom";

export default function showTasks(passedTasks) {
  const formDiv = document.getElementById('formDiv')

  const noTask = document.getElementById('noTask')
  if (!(noTask.classList.contains('hidden'))){
    noTask.classList.add('hidden')
  }

  const tasksToRemoveFromDom = document.querySelectorAll('.task')
  tasksToRemoveFromDom.forEach(el => el.remove())

  for (let i = 0; i < passedTasks.length; i++) {
    const taskDiv = createElement({element: 'div', className: 'task'})
    formDiv.insertAdjacentElement('beforebegin', taskDiv)
    const taskDetailsDiv = createElement({element: 'div', className: 'taskDetails'})
    taskDiv.appendChild(taskDetailsDiv)

    const taskCheckbox = createElement({element: 'input', domType: 'checkbox', domName: 'complete'})
    if (passedTasks[i].complete) {
      taskCheckbox.setAttribute('checked', 'checked')
    } else {
      taskCheckbox.removeAttribute('checked')
    }
    taskDetailsDiv.appendChild(taskCheckbox)

    const taskName = createElement({element: 'p', className: 'name', domText: passedTasks[i].name})
    taskDetailsDiv.appendChild(taskName)
    const taskDescription = createElement({element: 'p', className: 'description', domText: passedTasks[i].description})
    taskDetailsDiv.appendChild(taskDescription)
    const taskPriority = createElement({element: 'p', className:'priority', domText: passedTasks[i].priority})
    taskDetailsDiv.appendChild(taskPriority)
    const taskProject = createElement({element: 'p', className:'projectRef', domText: passedTasks[i].project})
    taskDetailsDiv.appendChild(taskProject)
    const taskDueDate = createElement({element: 'time', className:'due', domText: passedTasks[i].due})
    taskDetailsDiv.appendChild(taskDueDate)

    const btnDiv = createElement({element:'div', className:'taskBtnDiv'})
    taskDiv.appendChild(btnDiv)
    const taskUpdateBtn = createElement({element: 'button', className:'updateBtn', domText: 'Update'})
    btnDiv.appendChild(taskUpdateBtn)
    const taskDeleteBtn = createElement({element: 'button', className:'deleteBtn', domText: 'Delete'})
    btnDiv.appendChild(taskDeleteBtn)
    btnDiv.classList.add('hidden')
    


    taskCheckbox.addEventListener('change', () => {
      if (taskCheckbox.checked) {
        passedTasks[i].complete = true
        taskCheckbox.setAttribute('checked', 'checked')
      } else {
        passedTasks[i].complete = false
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

    taskDeleteBtn.addEventListener('click', () => {
      const taskIndexToRemove = tasks.findIndex((obj) => obj.id === passedTasks[i].id)
      tasks.splice(taskIndexToRemove, 1)
      taskDiv.remove()
      console.log(tasks)
    })
  }
}