/* eslint-disable */
import axios from 'axios'

const state = () => ({
  build: [
    {
      current: null,
      default: '1229_0',
      type: 'Amulette',
    },
    {
      current: null,
      default: '82063_0',
      type: 'Bouclier'
    },
    {
      current: null,
      default: '9211_0',
      type: 'Anneau'
    },
    {
      current: null,
      default: '10243_0',
      type: 'Ceinture'
    },
    {
      current: null,
      default: '11235_0',
      type: 'Bottes'
    },
    {
      current: null,
      default: '16284_0',
      type: 'Chapeau'
    },
    {
      current: null,
      default: '7067_0',
      type: 'weapon'
    },
    {
      current: null,
      default: '9211_0',
      type: 'Anneau'
    },
    {
      current: null,
      default: '17291_0',
      type: 'Cape'
    },
    {
      current: null,
      default: '18094_0',
      type: 'dd'
    }
  ],
  currentActiveItemType: null,
  currentItems: null,
  dofus: [
    { current: null, default: '23002_0', type: 'dofus' },
    { current: null, default: '23002_0', type: 'dofus' },
    { current: null, default: '23002_0', type: 'dofus' },
    { current: null, default: '23002_0', type: 'dofus' },
    { current: null, default: '23002_0', type: 'dofus' },
    { current: null, default: '23002_0', type: 'dofus' }
  ]
})

const mutations = {
  REMOVE_ITEM: (state, item) => {
    state.build.find(e => e.type === item.type).current = null
  },
  SET_BUILD: (state, build) => state.build = build,
  SET_ITEM: (state, item) => {
    console.log(item.type)
    const weapons = ['Arc', 'Batôn', 'Épée', 'Baguette', 'Dague', 'Faux', 'Hache', 'Marteau', 'Pelle']
    let itemType = null

    if (['Dofus', 'Trophée'].includes(item.type)) {
      const pos = state.dofus.map(e => !e.current).indexOf(true)

      state.dofus[pos].current = item
    } else {
      if (weapons.includes(item.type))
        itemType = 'weapon'
      else if (item.type == 'Familier')
        itemType = 'dd'
      else
        itemType = item.type
      
      if (itemType == 'Anneau') {
        const pos = state.build.filter(e => e.type === 'Anneau').map(e => !e.current).indexOf(true)

        state.build.filter(e => e.type === 'Anneau')[pos].current = item
      } else {
        state.build.find(e => e.type === itemType).current = item
      }
    }
  },
  SET_ITEM_TYPE: (state, itemType) => state.currentActiveItemType = itemType,
  SET_ITEMS: (state, items) => state.currentItems = items
}

const actions = {
  removeItem: async ({ commit }, item) => {
    commit('REMOVE_ITEM', item)
  },
  setBuild: async ({ commit }, build) => {
    commit('SET_BUILD', build.build)
  },
  setItem: async ({ commit }, item) => {
    commit('SET_ITEM', item)
  },
  setItemType: async ({ commit }, itemType) => {
    let res = null
    let data = null
    console.log(itemType)

    switch (itemType) {
      case 'weapon':
        res = await axios.get('https://fr.dofus.dofapi.fr/weapons')
        data = res.data
        break
      case 'dd':
        const pets = await axios.get('https://fr.dofus.dofapi.fr/pets')
        const mounts = await axios.get('https://fr.dofus.dofapi.fr/mounts')

        data = [...pets.data, ...mounts.data]
        break
      case 'dofus':
        res = await axios.get('https://fr.dofus.dofapi.fr/equipments')
        data = res.data.filter(e => ['Dofus', 'Trophée'].includes(e.type))
        console.log(data)
        break
      default:
        res = await axios.get('https://fr.dofus.dofapi.fr/equipments')
        data = res.data.filter(e => e.type === itemType)
    }

    commit('SET_ITEM_TYPE', itemType)
    commit('SET_ITEMS', data)
  }
}

export {
  actions,
  mutations,
  state
}
