/* eslint-disable */
const stats = {
  'Vitalité': 'hp',
  'Intelligence': 'int',
  'Force': 'force',
  'Soins': 'heal'
}


const cleanItem = parsedItemStat => {
  parsedItemStat.map(elem => {
    elem['name'] = stats[elem.name]
  })
  return parsedItemStat
}

const parseItem = itemStats => {
  const parsedItemStats = []

  itemStats.map(e => parsedItemStats.push({
    name: Object.keys(e)[0],
    ...Object.values(e)[0]
  }))

  console.log('parseitem:', parsedItemStats)

  return parsedItemStats
}

export {
  cleanItem,
  parseItem
}