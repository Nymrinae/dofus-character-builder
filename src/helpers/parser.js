/* eslint-disable */
const stats = {
  'Vitalité': 'hp',
  'Force': ''
}

const parseRes = object => {
  const items = []

  object.map(e => items.push({
    name: Object.keys(e)[0],
    ...Object.values(e)[0]
  }))

  return items
}

export default parseRes