import CreateElement from './create-element'

// Functions purpose: Initially append page DOM elements
export default function InitialPageLoad() {
  // Grab content div from dist index.html file
   const mainDiv = document.getElementById('content')
  
  // Create div element for left hand page column and append to mainDiv
  const leftColumnDiv = CreateElement({element: 'div', className: 'leftColumn'})
  mainDiv.appendChild(leftColumnDiv)

  // Create div element for right hand page column and append to mainDiv
  const rightColumnDiv = CreateElement({element: 'div', className: 'rightColumn'})
  mainDiv.appendChild(rightColumnDiv)

  const headerDiv = CreateElement({element: 'div', className: 'header'})
  rightColumnDiv.appendChild(headerDiv)
}