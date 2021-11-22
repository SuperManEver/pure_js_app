import { charactersFetcher } from './utils/api'
import { render, createElement } from './utils/ui-builder'

// components
import ListItem from './components/list-item/index.js'

let toggleMore = null
const fetcher = charactersFetcher()
let characters = []

async function handleLoadMore() {
  const items = await fetcher.getMore()

  characters = [...characters, ...items]

  renderView(characters)
}

function renderView(items) {
  const root = document.querySelector('#root')

  if (!root) return

  root.replaceChildren()
  const container = createElement('div', null, ...items.map(ListItem))

  render(container, root)
}

async function init() {
  toggleMore = document.querySelector('.load-more')

  if (!toggleMore) return

  // @todo: fix later
  toggleMore.addEventListener('click', handleLoadMore)

  characters = await fetcher.getInitial()

  renderView(characters)
}

function cleanUp() {
  toggleMore.removeEventListener('click', handleLoadMore)
}

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('beforeunload', cleanUp)
