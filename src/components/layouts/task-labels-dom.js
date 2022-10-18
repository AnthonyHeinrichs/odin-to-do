import createElement from "../../utils/create-element";
import '../styles/task-labels.css'

export default function TaskLabels() {

  const taskLabelsDiv = createElement({
    element: 'div',
    className: 'taskLabels'
  })

  const taskName = createElement({
    element: 'p', 
    className: 'nameLabel', 
    domText: 'Task:'
  })
  taskLabelsDiv.appendChild(taskName)

  const taskDescription = createElement({
    element: 'p', 
    className: 'descriptionLabel', 
    domText: 'Description:'
  })
  taskLabelsDiv.appendChild(taskDescription)

  const taskPriority = createElement({
    element: 'p', 
    className: 'priorityLabel', 
    domText: 'Priority:'
  })
  taskLabelsDiv.appendChild(taskPriority)

  const taskDueDate = createElement({
    element: 'p', 
    className: 'dueDateLabel', 
    domText: 'Due:'
  })
  taskLabelsDiv.appendChild(taskDueDate)

  return taskLabelsDiv
}