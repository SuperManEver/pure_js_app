import { createElement } from '../utils/didact'

import * as css from './styles.module.css'

function _ListItem({ name, image, status, species }) {
  const container = document.createElement('div')

  container.className = css.root

  /*
    section
      image 
      div
        h3
        p
  */

  container.appendChild(document.createTextNode(name))

  return container
}

function ListItem({ name, image, status, species }) {
  const element = createElement(
    'section',
    { class: css.root },
    createElement(
      'div',
      null,
      createElement('h3', null, name),
      createElement('p', null, species)
    )
  )

  return element
}

export default ListItem
