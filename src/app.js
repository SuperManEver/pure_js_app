import { charactersFetcher } from './utils/api'
import { render, createElement } from './utils/ui-builder'

// components
import ListItem from './components/list-item/index.js'

let toggleMore = null

function handleLoadMore() {
  console.log('load more')
}

async function init() {
  const root = document.querySelector('#root')
  toggleMore = document.querySelector('.load-more')

  const fetcher = charactersFetcher()

  if (!root || !toggleMore) return

  // @todo: fix later
  // toggleMore.addEventListener('click', handleLoadMore)

  const characters = await fetcher.getInitial()

  const container = createElement('div', null, ...characters.map(ListItem))

  render(container, root)
}

function cleanUp() {
  toggleMore.removeEventListener('click', handleLoadMore)
}

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('beforeunload', cleanUp)
