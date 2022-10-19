
export default function NewTaskForm() {
  const newTaskButton = document.getElementById('newTask')
  const formDiv = document.getElementById('formDiv')

  newTaskButton.addEventListener('click', () => {
    if (formDiv.classList.contains('hidden')) {
      formDiv.classList.remove('hidden')
    } else {
      formDiv.classList.add('hidden')
    }
  })
}