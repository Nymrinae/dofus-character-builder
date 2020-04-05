/* eslint-disable */
const state = () => ({
  activeClass: 'feca',
  classes: [
    'cra', 'ecaflip', 'eliotrope', 'eniripsa', 'enutrof', 'feca', 'huppermage', 'iop', 'osamodas',
    'ouginak', 'pandawa', 'roublard', 'sacrieur', 'sadida', 'sram', 'steamer', 'xelor', 'zobal'
  ],
  level: 1,
  sex: 'male'
})

const mutations = {
  UPDATE_ACTIVE_CLASS: (state, newClass) => state.activeClass = newClass,
  UPDATE_LEVEL: (state, level) => state.level = level,
  UPDATE_SEX: (state, sex) => state.sex = sex
}

const actions = {

}

export {
  actions,
  mutations,
  state
}
