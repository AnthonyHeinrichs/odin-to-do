import CreateElement from '../helpers/create-element'
import Logo from './logo'

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

  // Creating a div for the logo to be centered in
  const logoCenter = CreateElement({element: 'div', className: 'logoCenter'})
  leftColumnDiv.appendChild(logoCenter)

  // Append main logo to left coumn div
  logoCenter.appendChild(Logo())

  // Creating a div for the line to be centered in
  const lineCenter = CreateElement({element: 'div', className: 'lineCenter'})
  leftColumnDiv.appendChild(lineCenter)

  // Creating and appending a line to the left column
  const line = CreateElement({element: 'div', className: 'line'})
  lineCenter.appendChild(line)
}