import { format, isThisWeek } from 'date-fns'
import showTasks from "./layouts/show-tasks"

export default function filterTasks(tasks, page) {
  const dateToday = format(Date.now(), 'yyyy-MM-dd')
  const options = document.getElementById('taskProject')

  // Show all tasks
  if (page === 'main') {
    let allUncompleteTasks = tasks.filter(el => {
      return (el.complete == false)
    })
    showTasks(allUncompleteTasks)
    options.value = 'No project'
  } else if (page === 'due today') {
    let tasksDueToday = tasks.filter(el => {
      return (el.due == dateToday && el.complete == false)
    })
    showTasks(tasksDueToday)
    options.value = 'No project'
  } else if (page === 'due this week') {
    let tasksDueThisWeek = tasks.filter(el => {
      return isThisWeek(Date.parse(el.due) && el.complete == false)
    })
    showTasks(tasksDueThisWeek)
    options.value = 'No project'
  } else if (page === 'complete') {
    let completedTasks = tasks.filter(el => {
      return el.complete == true
    })
    showTasks(completedTasks)
  } else {
    let tasksByProject = tasks.filter(el => {
      return (el.project === page && el.complete == false)
    })
    showTasks(tasksByProject)
    options.value = page
  }
}