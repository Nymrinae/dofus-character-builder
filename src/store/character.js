const state = () => ({
  activeClass: 'feca',
  classes: [
    'cra', 'ecaflip', 'eliotrope', 'eniripsa', 'enutrof', 'feca', 'huppermage', 'iop', 'osamodas',
    'ouginak', 'pandawa', 'roublard', 'sacrieur', 'sadida', 'sram', 'steamer', 'xelor', 'zobal'
  ],
  level: 200,
  sex: 'male',
  stats: {
    hp: 55,
    pa: 6,
    pm: 3,
    ini: 0,
    pp: 100,
    po: 0,
    invoc: 0,
    sag: 0,
    str: 0,
    int: 0,
    cha: 0,
    agi: 0,
    crit: 0,
    heal: 0,
    dmg: 0,
    pui: 0,
    rdmg: 0,
    trapdmg: 0,
    trappui: 0,
    fuite: 0,
    tacle: 0,
    esqpa: 0,
    retpa: 0,
    esqpm: 0,
    retpm: 0,
    pods: 1000,
    shield: 0
  }
})

const getters = {
  getActiveClass: state => state.activeClass,
  getClasses: state => state.classes,
  getLevel: state => state.level,
  getSex: state => state.sex,
  getStats: state => state.stats
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
