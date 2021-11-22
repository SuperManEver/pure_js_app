const URL = 'https://rickandmortyapi.com/api/character'

export function charactersFetcher() {
  let state = null

  async function getRequest(url) {
    const response = await fetch(url)
    return response.json()
  }

  async function getInitial() {
    const { info, results } = await getRequest(URL)

    state = info

    return results
  }

  async function getMore() {
    if (!state) return

    const { next } = state
    const { info, results } = await getRequest(next)

    state = info

    return results
  }

  return {
    getInitial,
    getMore,
  }
}
