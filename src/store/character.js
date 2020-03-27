const state = () => ({
  activeClass: 'feca',
  classes: [
    'cra', 'ecaflip', 'eliotrope', 'eniripsa', 'enutrof', 'feca', 'huppermage', 'iop', 'osamodas',
    'ouginak', 'pandawa', 'roublard', 'sacrieur', 'sadida', 'sram', 'steamer', 'xelor', 'zobal'
  ],
  level: 200,
  sex: 'male'
})

const getters = {
  getActiveClass: state => state.activeClass,
  getLevel: state => state.level,
  getClasses: state => state.classes,
  getSex: state => state.sex
}

const mutations = {
  UPDATE_ACTIVE_CLASS: (state, newClass) => { state.activeClass = newClass },
  UPDATE_LEVEL: (state, level) => { state.level = level },
  UPDATE_SEX: (state, sex) => { state.sex = sex }
}

const actions = {
  updateClass: ({ commit }, newClass) => {
    commit('UPDATE_ACTIVE_CLASS', newClass)
  },
  updateLevel: ({ commit }, newLevel) => {
    commit('UPDATE_LEVEL', newLevel)
  },
  updateSex: ({ commit }, newSex) => {
    commit('UPDATE_SEX', newSex)
  }
}

export {
  actions,
  getters,
  mutations,
  state
}
