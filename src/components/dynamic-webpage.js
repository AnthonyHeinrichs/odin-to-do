
export default function dynamicWebpage() {
  // Dynamic webpage
  const leftColumn = document.getElementById('leftColumn')
  const rightColumn = document.getElementById('rightColumn')
  const header = document.getElementById('header')
  const hamburgerDiv = document.getElementById('hamburgerDiv')
  const menuToggle = document.getElementById('menuToggle')

  if (window.innerWidth < 700) {
    leftColumn.classList.add('hidden')
    hamburgerDiv.classList.remove('hidden')
    rightColumn.style.width = '100vw'
    header.style.width = '100vw'
  } else {
    leftColumn.classList.remove('hidden')
    hamburgerDiv.classList.add('hidden')
    rightColumn.style.width = '75vw'
    header.style.width = '75vw'
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 700) {
      leftColumn.classList.add('hidden')
      hamburgerDiv.classList.remove('hidden')
      rightColumn.style.width = '100vw'
      menuToggle.checked = false
      header.style.width = '100vw'
    } else {
      leftColumn.classList.remove('hidden')
      hamburgerDiv.classList.add('hidden')
      rightColumn.style.width = '75vw'
      header.style.width = '75vw'
      menuToggle.checked = false
    }
  });

  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      leftColumn.classList.remove('hidden')
    } else {
      leftColumn.classList.add('hidden')
    }
  })
}