// Functions purpose: create a dom element with recieved props and return it
export default function createElement(
  {
  element = undefined,
  className = undefined,
  domId = undefined,
  domText = undefined,
  domSrc = undefined,
  domAlt = undefined,
  domHref = undefined,
  domType = undefined,
  domName = undefined,
  domValue = undefined,
  domPlaceholder = undefined,
  })
  {
  // Create new dom element
  const elementCreated = document.createElement(element)
  
  // Checks if a class name was passed, and if so, adds class name to dom element
  if (typeof className != "undefined") {
    elementCreated.classList.add(className)
  }
  
  if (typeof domId != "undefined") {
    elementCreated.id = domId
  }
  
  if (typeof domText != "undefined") {
    elementCreated.innerText = domText
  }
  
  if (typeof domSrc != "undefined") {
    elementCreated.src = domSrc
  }
  
  if (typeof domAlt != "undefined") {
    elementCreated.alt = domAlt
  }
  
  if (typeof domHref != "undefined") {
    elementCreated.href = domHref
  }

  if (typeof domType != "undefined") {
    elementCreated.type = domType
  }

  if (typeof domName != "undefined") {
    elementCreated.name = domName
  }

  if (typeof domValue != "undefined") {
    elementCreated.value = domValue
  }

  if (typeof domPlaceholder != "unedefined") {
    elementCreated.placeholder = domPlaceholder
  }
  
  return elementCreated
 }
 