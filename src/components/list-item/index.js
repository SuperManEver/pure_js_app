import { createElement } from '../../utils/ui-builder'

import Label from '../label'

import * as css from './styles.module.css'

function ListItem({ name, status, species }) {
  return createElement(
    'section',
    { class: css.root },
    createElement(
      'div',
      { class: css.content },
      createElement('h3', null, name),
      createElement('p', null, `species: ${species}`),
      Label({ text: status })
    )
  )
}

export default ListItem
