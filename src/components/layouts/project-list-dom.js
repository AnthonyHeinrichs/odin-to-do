import createElement from '../../utils/create-element'
import PlusIcon from '../../assets/plus.png'
import '../styles/project-list.css'

// Functions purpose: Create dom elements for projects list dom
export default function ProjectsListDom() {
  // Creating main div for the projects list
  const projectsList = createElement({element: 'div', className: 'projectsList'})
  
  // Create the projects title element and append to main projects list div
  const projectsTitle = createElement({element: 'h2', className: 'projectsTitle', domText: 'Projects'})
  projectsList.appendChild(projectsTitle)
  
  // Create the new projects container and append to main projects list div
  const newProjectsDiv = createElement({element: 'div', className: 'newProjectsContainer'})
  projectsList.appendChild(newProjectsDiv)
  
  // Create the new projects icon and button and append to projects div
  const newProjectsIcon = createElement({
      element: 'img', 
      className:'newProjectIcon', 
      domSrc: PlusIcon, 
      domAlt: 'Plus sign'
    })
  newProjectsDiv.appendChild(newProjectsIcon)
  
  const newProjectsText = createElement({element: 'button', className: 'newProjectButton', domText: 'Add a project'})
  newProjectsDiv.appendChild(newProjectsText)

  return projectsList
}

