const URL = 'https://rickandmortyapi.com/api/character'

function getDelay() {
  const MIN_NUMBER = 300
  const MAX_NUMBER = 600

  return Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER
}

export async function getAllCharacters() {
  const response = await fetch(URL)
  const data = await response.json()

  console.log(data)

  return new Promise((resolve) => {
    setTimeout(() => resolve([]), getDelay())
  })
}

export function charactersFetcher() {
  async function getInitial() {
    const response = await fetch(URL)
    const { info, results } = await response.json()

    return results
  }

  function getMore() {}

  return {
    getInitial,
    getMore,
  }
}
