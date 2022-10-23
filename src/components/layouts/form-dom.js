import createElement from "../../utils/create-element";
import '../styles/form-styles.css'

export default function FormDom() {
  const formDiv = createElement({element: 'div', className:'taskForm', domId: 'formDiv'})
  // formDiv.classList.add('hidden')

  const form = createElement({element: 'form', domId: 'newTaskForm'})
  formDiv.appendChild(form)

  const inputDiv = createElement({element: 'div', className: 'inputs'})
  form.appendChild(inputDiv)

  const newTaskName = createElement({
    element: 'input', 
    domType:'text',
    domId: 'taskName',
    domName: 'taskName',
    domPlaceholder: 'Task name...'
  })
  newTaskName.setAttribute('required', 'required')
  newTaskName.setAttribute('maxlength', '20')
  inputDiv.appendChild(newTaskName)

  const newTaskDescription = createElement({
    element: 'input', 
    domType:'text',
    domId: 'taskDescription',
    domName: 'taskDescription',
    domPlaceholder: 'Task description...'
  })
  newTaskDescription.setAttribute('required', 'required')
  newTaskDescription.setAttribute('maxlength', '60')
  inputDiv.appendChild(newTaskDescription)

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
  inputDiv.appendChild(newTaskPriority)

  const newTaskProject = createElement({
    element: 'select', 
    domId: 'taskProject',
    domName: 'project',
  })
  inputDiv.appendChild(newTaskProject)

  const dueDate = createElement({
    element: 'input',
    domId: 'dueDate',
    domType: 'date'
  })
  inputDiv.appendChild(dueDate)

  const buttonDiv = createElement({element: 'div', className: 'formButtons'})
  form.appendChild(buttonDiv)

  const saveButton = createElement({
    element: 'input',
    className: 'saveButton',
    domType: 'submit',
    domValue: 'Save'
  })
  buttonDiv.appendChild(saveButton)

  const cancelButton = createElement({
    element: 'button',
    className: 'cancelButton',
    domType: 'button',
    domText: 'Cancel',
    domId: 'cancelBtn'
  })
  buttonDiv.appendChild(cancelButton)

  formDiv.classList.add('hidden')

  return formDiv
}