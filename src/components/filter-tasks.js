import { format, isThisWeek } from 'date-fns'
import showTasks from "./layouts/show-tasks"

export default function filterTasks(tasks, page) {
  const dateToday = format(Date.now(), 'yyyy-MM-dd')
  const options = document.getElementById('taskProject')

  // Show all tasks
  if (page === 'main') {
    showTasks(tasks)
    options.value = 'No project'
  } else if (page === 'due today') {
    let tasksDueToday = tasks.filter(el => {
      return el.due == dateToday
    })
    showTasks(tasksDueToday)
    options.value = 'No project'
  } else if (page === 'due this week') {
    let tasksDueThisWeek = tasks.filter(el => {
      return isThisWeek(Date.parse(el.due))
    })
    showTasks(tasksDueThisWeek)
    options.value = 'No project'
  } else {
    let tasksByProject = tasks.filter(el => {
      return el.project === page
    })
    showTasks(tasksByProject)
    options.value = page
  }
}