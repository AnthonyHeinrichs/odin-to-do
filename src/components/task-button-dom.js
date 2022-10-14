import CreateElement from '../utils/create-element'
import './styles/new-task-button.css'
import PlusIcon from '../assets/plus.png'

export default function NewTaskDom() {
  // Create new div for all new tasks
  const newTaskDiv = CreateElement({element: 'div', className: 'newTask'})
  
  // Create new icon img and append to div for all new tasks
  const newTaskIcon = CreateElement({
    element: 'img',
    className: 'newTaskIcon',
    domSrc: PlusIcon,
    domAlt: 'plus icon'
  })
  newTaskDiv.appendChild(newTaskIcon)
  
  // Create new task button and append to div for all new tasks
  const newTaskButton = CreateElement({element: 'button', className: 'newTaskButton', domText: 'Add task'})
  newTaskDiv.appendChild(newTaskButton)
  
  // Return new task div with appended elements
  return newTaskDiv
}



