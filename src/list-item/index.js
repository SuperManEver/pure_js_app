import { createElement } from '../utils/ui-builder'

import * as css from './styles.module.css'

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
