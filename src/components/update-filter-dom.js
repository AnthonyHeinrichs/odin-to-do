
export default function updateFilterDom(page) {
  const title = document.getElementById('filterTitle')
  const description = document.getElementById('filterDescription')

  // Update filter title in right header depending on selected page
  if (page === 'main') {
    title.innerHTML = 'All tasks'
    description.innerHTML = 'Here are all your tasks'
  } else if (page === 'due today') {
    title.innerHTML = 'Due today'
    description.innerHTML = 'Here are your tasks due today'
  } else if (page === 'due this week') {
    title.innerHTML = 'Due this week'
    description.innerHTML = 'Here are your tasks due this week'
  } else if (page === 'complete') {
    title.innerHTML = 'Completed tasks'
    description.innerHTML = 'Here are your completed tasks' 
  } else {
    title.innerHTML = page
    description.innerHTML = `Here are your tasks for the ${page} project`
  }
}