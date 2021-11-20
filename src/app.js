import { charactersFetcher } from './utils/api'
import { render, createElement } from './utils/didact'

// components
import ListItem from './list-item/index.js'

let toggleMore = null

function handleLoadMore() {
  console.log('load more')
}

async function init() {
  const root = document.querySelector('#root')
  toggleMore = document.querySelector('.load-more')

  const fetcher = charactersFetcher()

  if (!root || !toggleMore) return

  // toggleMore.addEventListener('click', handleLoadMore)

  const characters = await fetcher.getInitial()

  const first = characters[0]

  // const container = createElement('div', null, characters.map(ListItem))

  const item = ListItem(first)

  console.log(item)

  render(item, root)
}

function cleanUp() {
  toggleMore.removeEventListener('click', handleLoadMore)
}

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('beforeunload', cleanUp)
