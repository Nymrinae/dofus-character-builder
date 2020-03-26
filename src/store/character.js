const state = () => ({
  activeClass: 'feca',
  classes: [
    'cra', 'ecaflip', 'eliotrope', 'eniripsa', 'enutrof', 'feca', 'huppermage', 'iop', 'osamodas',
    'ouginak', 'pandawa', 'roublard', 'sacrieur', 'sadida', 'sram', 'steamer', 'xelor', 'zobal'
  ],
  level: 1
})

const getters = {
  getActiveClass: state => state.activeClass,
  getCurrentLevel: state => state.level,
  getClasses: state => state.classes
}

const mutations = {
  UPDATE_ACTIVE_CLASS: (state, newClass) => { state.activeClass = newClass }
}

const actions = {
  updateClass: ({ commit }, newClass) => {
    commit('UPDATE_ACTIVE_CLASS', newClass)
  }
}

export {
  actions,
  getters,
  mutations,
  state
}
