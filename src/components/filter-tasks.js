import { tasks } from './tasks'
import { format, isThisWeek, parseISO } from 'date-fns'
import createElement from '../utils/create-element'

export default function filterTasks() {
  const dateToday = format(Date.now(), 'yyyy-MM-dd')

  // Show all tasks
  const allTasks = document.getElementById('allTasks')
  allTasks.addEventListener('click', () => {
    filterTaskList(tasks)
  })

  // Show only tasks due today
  const dueToday = document.getElementById('dueToday')
  dueToday.addEventListener('click', () => {
    let tasksDueToday = tasks.filter(el => {
      return el.due == dateToday
    })
    filterTaskList(tasksDueToday)
  })

  const dueThisWeek = document.getElementById('dueThisWeek')
  dueThisWeek.addEventListener('click', () => {
    let tasksDueThisWeek = tasks.filter(el => {
      return isThisWeek(Date.parse(el.due))
    })
    filterTaskList(tasksDueThisWeek)
  })
  
  const filterTaskList = (tasks) => {
    if (tasks.length > 0) {
      const tasksToRemoveFromDom = document.querySelectorAll('.task')
      tasksToRemoveFromDom.forEach(el => el.remove())
  
      for (let i = 0; i < tasks.length; i++) {
        const taskDiv = createElement({element: 'div', className: 'task'})
        formDiv.insertAdjacentElement('beforebegin', taskDiv)
        const taskName = createElement({element: 'p', className: 'name', domText: tasks[i].name})
        taskDiv.appendChild(taskName)
        const taskDescription = createElement({element: 'p', className: 'description', domText: tasks[i].description})
        taskDiv.appendChild(taskDescription)
        const taskPriority = createElement({element: 'p', className:'priority', domText: tasks[i].priority})
        taskDiv.appendChild(taskPriority)
        const taskProject = createElement({element: 'p', className:'project', domText: tasks[i].project})
        taskDiv.appendChild(taskProject)
        const taskDueDate = createElement({element: 'time', className:'due', domText: tasks[i].due})
        taskDiv.appendChild(taskDueDate)
      }
    }
  }
}