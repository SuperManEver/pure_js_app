const LANGUAGES = [
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
  },
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
  },
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
  },
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
  },
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
  },
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
  },
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
  },
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
  },
]

function getDelay() {
  const MIN_NUMBER = 300
  const MAX_NUMBER = 600

  return Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER
}

export function loadItem() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(LANGUAGES), getDelay())
  })
}
