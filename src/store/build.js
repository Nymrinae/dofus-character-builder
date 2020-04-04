/* eslint-disable */
import axios from 'axios'

const state = () => ({
  build: [
    {
      type: 'Amulette',
      default: '1229_0',
      current: null
    },
    {
      type: 'Bouclier',
      default: '82063_0',
      current: null
    },
    {
      type: 'Anneau',
      default: '9211_0',
      current: null
    },
    {
      type: 'Ceinture',
      default: '10243_0',
      current: null
    },
    {
      type: 'Bottes',
      default: '11235_0',
      current: null
    },
    {
      type: 'Chapeau',
      default: '16284_0',
      current: null
    },
    {
      type: 'weapon',
      default: '7067_0',
      current: null
    },
    {
      type: 'Anneau',
      default: '9211_0',
      current: null
    },
    {
      type: 'Cape',
      default: '17291_0',
      current: null
    },
    {
      type: 'dd',
      default: '18094_0',
      current: null
    }
  ],
  currentActiveItemType: null,
  currentItems: null,
  dofus: [
    { default: '23002_0', current: null },
    { default: '23002_0', current: null },
    { default: '23002_0', current: null },
    { default: '23002_0', current: null },
    { default: '23002_0', current: null },
    { default: '23002_0', current: null }
  ]
})

const mutations = {
  SET_ITEM: (state, item) => { state.build[0].current = item },
  SET_ITEM_TYPE: (state, itemType) => { state.currentActiveItemType = itemType },
  SET_ITEMS: (state, items) => { state.currentItems = items }
}

const actions = {
  setItemType: async ({ commit }, itemType) => {
    const res = await axios.get('https://fr.dofus.dofapi.fr/equipments')
    const data = res.data.filter(e => e.type === itemType)

    commit('SET_ITEM_TYPE', itemType)
    commit('SET_ITEMS', data)
  },
  setItem: async ({ commit }, item) => {
    commit('SET_ITEM', item)
  }
}

export {
  actions,
  mutations,
  state
}
