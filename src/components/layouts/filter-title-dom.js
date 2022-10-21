import createElement from "../../utils/create-element";
import '../styles/filter-title.css'

export default function FilterTitle() {
  const filterTitleDiv = createElement({element: 'div', className: 'filterTitle'})
  
  const filterTitle = createElement({
    element: 'h2', 
    className: 'title', 
    domText: 'All tasks',
    domId: 'filterTitle'
  })
  filterTitleDiv.appendChild(filterTitle)
  
  const filterDescription = createElement({
    element: 'h3', 
    className: 'filterDescription', 
    domText: 'Here are all your tasks',
    domId: 'filterDescription'
  })
  filterTitleDiv.appendChild(filterDescription)

  return filterTitleDiv
}



