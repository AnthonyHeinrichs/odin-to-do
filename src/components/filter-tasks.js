import { tasks } from './tasks'
import { format, isThisWeek } from 'date-fns'
import showTasks from "./layouts/show-tasks"
import createElement from '../utils/create-element'

export default function filterTasks() {
  const dateToday = format(Date.now(), 'yyyy-MM-dd')

  // Show all tasks
  const allTasks = document.getElementById('allTasks')
  allTasks.addEventListener('click', () => {
    showTasks(tasks)
  })

  // Show only tasks due today
  const dueToday = document.getElementById('dueToday')
  dueToday.addEventListener('click', () => {
    let tasksDueToday = tasks.filter(el => {
      return el.due == dateToday
    })
    showTasks(tasksDueToday)
  })

  const dueThisWeek = document.getElementById('dueThisWeek')
  dueThisWeek.addEventListener('click', () => {
    let tasksDueThisWeek = tasks.filter(el => {
      return isThisWeek(Date.parse(el.due))
    })
    showTasks(tasksDueThisWeek)
  })
}

export const filterByProject = (projectName) => {
  let tasksByProject = tasks.filter(el => {
    return el.project === projectName
  })
  showTasks(tasksByProject)
}