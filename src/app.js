import { charactersFetcher } from './api'

// components
import ListItem from './list-item/index.js'

let toggleMore = null

function handleLoadMore() {
  console.log('load more')
}

function renderList(characters) {
  const root = document.querySelector('#root')

  if (!root) return

  characters.forEach((character) => {
    root.appendChild(ListItem(character))
  })
}

async function init() {
  toggleMore = document.querySelector('.load-more')

  const fetcher = charactersFetcher()

  if (toggleMore) {
    toggleMore.addEventListener('click', handleLoadMore)
  }

  const characters = await fetcher.getInitial()

  renderList(characters)
}

function cleanUp() {
  toggleMore.removeEventListener('click', handleLoadMore)
}

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('beforeunload', cleanUp)
