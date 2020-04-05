/* eslint-disable */
const stats = {
  'Agilité': 'agi',
  'Chance': 'cha',
  'Critique': 'crit',
  'Dommages': 'dmg',
  'Dommages Air': 'dmgair',
  'Dommages Eau': 'dmgeau',
  'Dommages Feu': 'dmgfeu',
  'Dommages Neutre': 'dmgneutre',
  'Dommages Terre': 'dmgterre',
  'Dommage Critiques': 'crit',
  'Force': 'force',
  'Fuite': 'fuite',
  'Initiative': 'ini',
  'Intelligence': 'int',
  'Invocations': 'invoc',
  'PA': 'pa',
  'PM': 'pm',
  'Portée': 'po',
  'Prospection': 'pp',
  'Puissance': 'pui',
  'Résistance Air': 'varresair',
  'Résistance Eau': 'varreseau',
  'Résistance Feu': 'varresfeu',
  'Résistance Neutre': 'varresneutre',
  'Résistance Terre': 'varresterre',
  'Sagesse': 'sagesse',
  'Soins': 'heal',
  'Tacle': 'tacle',
  'Vitalité': 'hp'
}


const cleanItem = parsedItemStat => {
  parsedItemStat.map(elem => elem['name'] = stats[elem.name])
  const filterUndefinedValues = parsedItemStat.filter(e => e.name)

  return filterUndefinedValues
}

const parseItem = itemStats => {
  const parsedItemStats = []

  itemStats.map(e => parsedItemStats.push({
    name: getRealStatName(Object.keys(e)[0]),
    ...Object.values(e)[0]
  }))

  return parsedItemStats
}

const getRealStatName = stat => {
  const CritiqueRegex = /\bCritique\b/
  const ResistanceRegex = /\bRésistance\b/

  const isCritique = CritiqueRegex.test(stat)
  const isResistance = ResistanceRegex.test(stat)

  if (isCritique) return 'Critique'
  if (isResistance) return `Résistance ${stat.split(' ').slice(-1)}`

  return stat
}

const getKeyByValue = value => {
  return Object.keys(stats).find(k => stats[k] === value)
}

export {
  cleanItem,
  getKeyByValue,
  parseItem
}