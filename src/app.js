import { charactersFetcher } from './utils/api'
import { render, createElement } from './utils/ui-builder'

// components
import ListItem from './components/list-item/index.js'

let toggleMore = null
const fetcher = charactersFetcher()

async function handleLoadMore() {
  console.log('load more')

  const items = await fetcher.getMore()

  console.log(items)
}

function renderView(items) {
  const root = document.querySelector('#root')

  if (!root) return

  const container = createElement('div', null, ...items.map(ListItem))

  render(container, root)
}

async function init() {
  toggleMore = document.querySelector('.load-more')

  if (!toggleMore) return

  // @todo: fix later
  toggleMore.addEventListener('click', handleLoadMore)

  const characters = await fetcher.getInitial()

  renderView(characters)
}

function cleanUp() {
  toggleMore.removeEventListener('click', handleLoadMore)
}

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('beforeunload', cleanUp)
