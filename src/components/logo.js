import Icon from '../assets/logo.png'
import CreateElement from '../utils/create-element'

// Functions purpose: Create logo for to-do app
export default function Logo() {
  const logo = CreateElement({element: 'img', domSrc: Icon, domAlt: 'To do', className: 'icon'})
  return logo
}