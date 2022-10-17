import createElement from "../../utils/create-element";
import '../styles/no-tasks.css'

export default function NoTasks() {
  const noTasks = createElement({
    element: 'p', 
    className: 'noTasks', 
    domText: 'Hooray! You have no more tasks...'
  })

  return noTasks
}