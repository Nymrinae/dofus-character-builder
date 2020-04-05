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
    { current: null, default: '23002_0' },
    { current: null, default: '23002_0' },
    { current: null, default: '23002_0' },
    { current: null, default: '23002_0' },
    { current: null, default: '23002_0' },
    { current: null, default: '23002_0' }
  ]
})

const mutations = {
  SET_BUILD: (state, build) => state.build = build,
  SET_ITEM: (state, item) => state.build.find(e => e.type === item.type).current = item,
  SET_ITEM_TYPE: (state, itemType) => state.currentActiveItemType = itemType,
  SET_ITEMS: (state, items) => state.currentItems = items
}

const actions = {
  setBuild: async ({ commit }, build) => {
    commit('SET_BUILD', build.build)
  },
  setItemType: async ({ commit }, itemType) => {
    const res = await axios.get('https://fr.dofus.dofapi.fr/equipments')
    const data = res.data.filter(e => e.type === itemType)

    commit('SET_ITEM_TYPE', itemType)
    commit('SET_ITEMS', data)
  },
  setItem: async ({ commit, state }, item) => {
    commit('SET_ITEM', item)
  }
}

export {
  actions,
  mutations,
  state
}
