import createElement from "../utils/create-element"
import checklistIcon from '../assets/checklist.png'
import { filterByProject } from "./filter-tasks"
import './styles/projects.css'

export default function handleProjects() {
  const projects = ['No project']

  const projectDropDown = document.getElementById('taskProject')

  if (projects.length > 0) {
    for (let i = 0; i < projects.length; i++) {
      const project = createElement({element: 'option', domValue: projects[i], domText: projects[i]})
      projectDropDown.appendChild(project) 
    }
  }

  const addProjectButton = document.getElementById('newProject')
  const newProjectContainer = document.getElementById('newProjectsContainer')
  const projectForm = createElement({element: 'form', domId: 'projectForm', className:'hidden'})
  newProjectContainer.insertAdjacentElement('beforebegin', projectForm)

  const newProjectName = createElement({
    element: 'input', 
    domType:'text',
    domId: 'projectName',
    domName: 'projectName',
    domPlaceholder: 'Project name...'
  })
  projectForm.appendChild(newProjectName)
  
  const buttonDiv = createElement({element: 'div', className: 'projectFormButtons'})
  projectForm.appendChild(buttonDiv)

  const saveButton = createElement({
    element: 'input',
    className: 'projectsSaveButton',
    domType: 'submit',
    domValue: 'Save'
  })
  buttonDiv.appendChild(saveButton)

  const cancelButton = createElement({
    element: 'button',
    className: 'projectsCancelButton',
    domType: 'button',
    domText: 'Cancel',
    domId: 'projectsCancelBtn'
  })
  buttonDiv.appendChild(cancelButton)

  addProjectButton.addEventListener('click', () => {
    projectForm.classList.remove('hidden')
  })

  cancelButton.addEventListener('click', () => {
    projectForm.classList.add('hidden')
  })

  projectForm.addEventListener('submit', e => {
    e.preventDefault()

    const name = e.target.elements.projectName.value

    projects.push(name)
    addProjectToTaskForm(name)
    addProjectToProjectList(name)
    e.target.reset()
    projectForm.classList.add('hidden')
  })

  const projectListDiv = createElement({element: 'div', className: 'createdProjects', domId: 'createdProjects'})
  projectForm.insertAdjacentElement('beforebegin', projectListDiv)

  const addProjectToProjectList = (name) => {
    const singleProjectDiv = createElement({element:'div', className:'singleProject'})
    const projectIcon = createElement({
      element: 'img', 
      domSrc: checklistIcon, 
      className:'checklistIcon'
    })
    const project = createElement({element: 'button', className: 'project', domText: name})
    singleProjectDiv.appendChild(projectIcon)
    singleProjectDiv.appendChild(project)
    projectListDiv.appendChild(singleProjectDiv)
    project.addEventListener('click', () => {
      filterByProject(project.innerHTML)
    }) 
  }

  const addProjectToTaskForm = (name) => {
    const project = createElement({element: 'option', domValue: name, domText: name})
    projectDropDown.appendChild(project)
  }
}