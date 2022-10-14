import CreateElement from '../utils/create-element'
import './styles/task-filters.css' 
import FolderIcon from '../assets/folder.png'
import DayIcon from '../assets/calendar-checkmark.png'
import WeekIcon from '../assets/full-calendar.png'

export default function TaskFilters() {
  // Create main div for filters
  const mainFilterDiv = CreateElement({element: 'div', className: 'allFilters'})

  // Create div for first filter icon & button and append to main filters div
  const allTasksDiv = CreateElement({element: 'div', className: 'filter'})
  mainFilterDiv.appendChild(allTasksDiv)

  // Create folder icon and append to all tasks div
  const folderIcon = CreateElement(
    {
      element: 'img', 
      className:'filterIcon', 
      domSrc: FolderIcon, 
      domAlt: 'folder'
    })
  allTasksDiv.appendChild(folderIcon)

  // Create all tasks button and append to all tasks div
  const allTasksButton = CreateElement({
    element: 'button',
    className: 'filterButton',
    domText: 'All tasks'
  })
  allTasksDiv.appendChild(allTasksButton)

  // Create div for second filter icon & button and append to main filters div
  const dayTasksDiv = CreateElement({element: 'div', className: 'filter'})
  mainFilterDiv.appendChild(dayTasksDiv)

  // Create day icon and append to all tasks div
  const dueTodayIcon = CreateElement(
    {
      element: 'img', 
      className:'filterIcon', 
      domSrc: DayIcon, 
      domAlt: 'Day calendar'
    })
  dayTasksDiv.appendChild(dueTodayIcon)

  // Create due today button and append to all tasks div
  const dayTasksButton = CreateElement({
    element: 'button',
    className: 'filterButton',
    domText: 'Due today'
  })
  dayTasksDiv.appendChild(dayTasksButton)

  // Create div for third filter icon & button and append to main filters div
  const weekTasksDiv = CreateElement({element: 'div', className: 'filter'})
  mainFilterDiv.appendChild(weekTasksDiv)

  // Create due this week icon and append to all tasks div
  const dueWeekIcon = CreateElement(
    {
      element: 'img', 
      className:'filterIcon', 
      domSrc: WeekIcon, 
      domAlt: 'Week calendar'
    })
  weekTasksDiv.appendChild(dueWeekIcon)

  // Create due this week button and append to all tasks div
  const dueWeekButton = CreateElement({
    element: 'button',
    className: 'filterButton',
    domText: 'Due this week'
  })
  weekTasksDiv.appendChild(dueWeekButton)

  // return the main div so it can be added to main page layout
  return mainFilterDiv
}

