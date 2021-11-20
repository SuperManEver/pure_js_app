import { createElement } from '../../utils/ui-builder'

import * as css from './styles.module.css'

function Label({ text }) {
  return createElement('div', { class: css.root }, text)
}

export default Label
