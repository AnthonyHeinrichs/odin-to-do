import createElement from "../utils/create-element"

export default function handleProjects() {
  const projects = ['None', 'clothes', 'workout', 'home']
  const projectDropDown = document.getElementById('taskProject')

  if (projects.length > 0) {
    for (let i = 0; i < projects.length; i++) {
      const project = createElement({element: 'option', domValue: projects[i], domText: projects[i]})
      projectDropDown.appendChild(project) 
    }
  }
}