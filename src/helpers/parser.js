/* eslint-disable */
const stats = {
  'Agilité': 'agi',
  'Chance': 'cha',
  'Critique': 'crit', // need to parse it separately (includes('Critique')
  // need to parse it separately (includes type)
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
  'Sagesse': 'sag',
  'Soins': 'heal',
  'Tacle': 'tacle',
  'Vitalité': 'hp'
}


const cleanItem = parsedItemStat => {
  parsedItemStat
    .map(elem => {
      elem['name'] = stats[elem.name]
    })
  
  console.log('parseditemstat:', parsedItemStat)
  return parsedItemStat
}

const parseItem = itemStats => {
  console.log('itemStat:', itemStats)
  const parsedItemStats = []

  itemStats.map(e => parsedItemStats.push({
    name: getRealStatName(Object.keys(e)[0]), // /\bCritique\b/.test(Object.keys(e)[0]) ? 'Critique' : Object.keys(e)[0],
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

export {
  cleanItem,
  parseItem
}