import { loadItem } from './api'
import { add } from './utils.js'

// components
import ListItem from './list-item/index.js'

const VALUES = ['ONE', 'TWO', 'THREE']

let toggleMore = null

function handleLoadMore() {
  console.log('load more')
}

function init() {
  const root = document.querySelector('#root')

  toggleMore = document.querySelector('.load-more')

  if (!root) return

  if (toggleMore) {
    toggleMore.addEventListener('click', handleLoadMore)
  }

  VALUES.forEach((val) => {
    root.appendChild(ListItem({ name: val }))
  })
}

function cleanUp() {
  toggleMore.removeEventListener('click', handleLoadMore)
}

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('beforeunload', cleanUp)
