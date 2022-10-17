import createElement from "../../utils/create-element";

export default function FormDom() {
  const formDiv = createElement({element: 'div', className:'newTaskForm'})
  // formDiv.classList.add('hidden')

  const form = createElement({element: 'form'})
  formDiv.appendChild(form)

  const newTaskName = createElement({
    element: 'input', 
    domType:'text',
    domId: 'taskName',
    domName: 'taskName',
  })
  form.appendChild(newTaskName)

  const newTaskDescription = createElement({
    element: 'input', 
    domType:'text',
    domId: 'taskDescription',
    domName: 'taskDescription',
  })
  form.appendChild(newTaskDescription)

  const newTaskPriority = createElement({
    element: 'select', 
    domId: 'priority',
    domName: 'priority',
  })

  const lowPriority = createElement({
    element: 'option',
    domValue: 'low',
    domText: 'Low'
  })
  newTaskPriority.appendChild(lowPriority)

  const mediumPriority = createElement({
    element: 'option',
    domValue: 'medium',
    domText: 'Medium'
  })
  newTaskPriority.appendChild(mediumPriority)

  const highPriority = createElement({
    element: 'option',
    domValue: 'high',
    domText: 'High'
  })
  newTaskPriority.appendChild(highPriority)

  form.appendChild(newTaskPriority)

  const dueDate = createElement({
    element: 'input',
    domType: 'date'
  })

  form.appendChild(dueDate)

  return formDiv
}