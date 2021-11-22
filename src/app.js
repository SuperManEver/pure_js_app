import { charactersFetcher } from './utils/api'
import { render, createElement } from './utils/ui-builder'

// components
import ListItem from './components/list-item/index.js'

class App {
  constructor() {
    this.items = []
    this.fetcher = charactersFetcher()
  }

  async init() {
    this.toggleMore = document.querySelector('.load-more')
    this.root = document.querySelector('#root')

    if (this.toggleMore) {
      this.toggleMore.addEventListener('click', this.handleLoadMore.bind(this))
    }

    this.items = await this.fetcher.getInitial()

    this.render()
  }

  cleanUp() {
    this.toggleMore.removeEventListener('click', this.handleLoadMore)
  }

  async handleLoadMore() {
    const items = await this.fetcher.getMore()

    this.items = [...this.items, ...items]

    this.render()
  }

  render() {
    if (!this.root) return

    this.root.replaceChildren()
    const container = createElement('div', null, ...this.items.map(ListItem))

    render(container, this.root)
  }
}

const app = new App()

document.addEventListener('DOMContentLoaded', app.init.bind(app))
document.addEventListener('beforeunload', app.cleanUp.bind(app))
