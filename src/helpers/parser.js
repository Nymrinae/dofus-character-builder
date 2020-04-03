/* eslint-disable */
const stats = {
  'Agilité': 'agi',
  'Critique': 'crit', // need to parse it separately (includes('Critique')
  // need to parse it separately (includes type)
  'Dommages Air': '',
  'Dommages Eau': '',
  'Dommages Feu': '',
  'Dommages Neutre': '',
  'Dommages Terre': '',
  'Force': 'force',
  'Fuite': 'fuite',
  'Initiative': 'ini',
  'Intelligence': 'int',
  'PA': 'pa',
  'PM': 'pm',
  'Portée': 'po',
  'Prospection': 'pp',
  'Sagesse': 'sag',
  'Soins': 'heal',
  'Tacle': 'tacle',
  'Vitalité': 'hp'
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