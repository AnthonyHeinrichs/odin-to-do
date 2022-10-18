import createElement from "../../utils/create-element";
import '../styles/filter-title.css'

export default function FilterTitle() {
  const filterTitleDiv = createElement({element: 'div', className: 'filterTitle'})
  
  const filterTitle = createElement({element: 'h2', className: 'title', domText: 'All tasks'})
  filterTitleDiv.appendChild(filterTitle)
  
  const filterDescription = createElement({element: 'h3', className: 'description', domText: 'Here are all your tasks'})
  filterTitleDiv.appendChild(filterDescription)

  return filterTitleDiv
}



