import Icon from '../assets/logo.png'
import CreateElement from '../helpers/create-element'

export default function Logo() {
  const logo = CreateElement({element: 'img', domSrc: Icon, domAlt: 'To do', className: 'icon'})
  return logo
}