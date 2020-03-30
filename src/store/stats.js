const state = () => ({
  stats: {
    hp: 55,
    pa: 6,
    pm: 3,
    ini: 0,
    pp: 100,
    po: 0,
    invoc: 0,
    sagesse: 0,
    force: 0,
    int: 0,
    chance: 0,
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

const mutations = {
  UPDATE_STATS: (state, stats) => { state.stats = stats }
}

const actions = {
  updateStats: ({ commit, state }, incStats) => {
    const newStats = Object.assign({}, state.stats)

    Object.keys(newStats).map((e) => {
      if (e in incStats) {
        newStats[e] += incStats[e]
      }
    })
    commit('UPDATE_STATS', newStats)
  }
}

export {
  actions,
  mutations,
  state
}
