import createElement from '../../utils/create-element'
import Logo from './logo'
import TaskFiltersDom from './task-filter-dom'
import ProjectsListDom from './project-list-dom'
import NoTasks from './no-task-dom'
import NewTaskDom from './task-button-dom'
import FormDom from './form-dom'
import TaskLabels from './task-labels-dom'
import FilterTitle from './filter-title-dom'
import '../styles/layout-styles.css'

// Functions purpose: Initially append page DOM elements
export default function initialPageLayout() {
  // Grab content div from dist index.html file
   const mainDiv = document.getElementById('content')
  
  // Create div element for left hand page column and append to mainDiv
  const leftColumnDiv = createElement({element: 'div', className: 'leftColumn', domId: 'leftColumn'})
  mainDiv.appendChild(leftColumnDiv)

  // Create div element for right hand page column and append to mainDiv
  const rightColumnDiv = createElement({element: 'div', className: 'rightColumn', domId: 'rightColumn'})
  mainDiv.appendChild(rightColumnDiv)

  const headerDiv = createElement({element: 'div', className: 'header'})
  rightColumnDiv.appendChild(headerDiv)

  // Creating a div for the logo to be centered in
  const logoCenter = createElement({element: 'div', className: 'logoCenter'})
  leftColumnDiv.appendChild(logoCenter)

  // Append main logo to left coumn div
  logoCenter.appendChild(Logo())

  // Creating a div for the line to be centered in
  const lineCenter = createElement({element: 'div', className: 'lineCenter'})
  leftColumnDiv.appendChild(lineCenter)

  // Creating and appending a line to the left column
  const line = createElement({element: 'div', className: 'line'})
  lineCenter.appendChild(line)

  // Render to left column div the task filters and projects list
  leftColumnDiv.appendChild(TaskFiltersDom())
  leftColumnDiv.appendChild(ProjectsListDom())

  // Render to right column div the new task icon and button
  headerDiv.appendChild(FilterTitle())
  rightColumnDiv.appendChild(TaskLabels())
  rightColumnDiv.appendChild(NoTasks())
  rightColumnDiv.appendChild(FormDom())
  rightColumnDiv.appendChild(NewTaskDom())
}