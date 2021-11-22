import { charactersFetcher } from './utils/api'
import { render, createElement } from './utils/ui-builder'

// components
import ListItem from './components/list-item/index.js'

let toggleMore = null
const fetcher = charactersFetcher()
let characters = []

// async function handleLoadMore() {
//   const items = await fetcher.getMore()

//   characters = [...characters, ...items]

//   renderView(characters)
// }

// function renderView(items) {
//   const root = document.querySelector('#root')

//   if (!root) return

//   root.replaceChildren()
//   const container = createElement('div', null, ...items.map(ListItem))

//   render(container, root)
// }

// async function init() {
//   toggleMore = document.querySelector('.load-more')

//   if (toggleMore) {
//     toggleMore.addEventListener('click', handleLoadMore)
//   }

//   characters = await fetcher.getInitial()

//   renderView(characters)
// }

// function cleanUp() {
//   toggleMore.removeEventListener('click', handleLoadMore)
// }

class App {
  constructor() {
    this.items = []
    this.fetcher = charactersFetcher()
  }

  async init() {
    this.toggleMore = document.querySelector('.load-more')
    this.root = document.querySelector('#root')

    if (this.toggleMore) {
      this.toggleMore.addEventListener('click', this.handleLoadMore)
    }

    this.items = await fetcher.getInitial()

    this.render()
  }

  cleanUp() {
    this.toggleMore.removeEventListener('click', this.handleLoadMore)
  }

  async handleLoadMore() {
    const items = await fetcher.getMore()

    this.items = [...characters, ...items]

    this.render(characters)
  }

  render() {
    if (!this.root) return

    this.root.replaceChildren()
    const container = createElement('div', null, ...this.items.map(ListItem))

    render(container, this.root)
  }
}

const app = new App()

document.addEventListener('DOMContentLoaded', () => app.init())
document.addEventListener('beforeunload', () => app.cleanUp())
