/* eslint-disable */
const stats = () => {
  return {
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
    shield: 0,
    dmgneutre: 0,
    dmgterre: 0,
    dmgfeu: 0,
    dmgeau: 0,
    dmgair: 0,
    varresneutre: 0,
    varresterre: 0,
    varresfeu: 0,
    varreseau: 0,
    varresair: 0,
    fixresneutre: 0,
    fixresterre: 0,
    fixresfeu: 0,
    fixreseau: 0,
    fixresair: 0
    }
  }
}

const state = stats()

const mutations = {
  RESET_STATS: (state) => Object.assign(state, stats()),
  UPDATE_STATS: (state, stats) => state.stats = stats
}

const actions = {
  setStats: ({ commit, state }, stats) => {
    const build = stats.build.filter(x => x.current != null)
    const newStats = Object.assign({}, state.stats)
    const updateStatArray = []
    
    build.forEach(e => {
      e.current.stats.map(e => { 
        updateStatArray.push({ [e.name]: e.min })
      })
    })

    Object.keys(newStats).map(e => {
      for (const item of updateStatArray) {
        if (e in item) {
          newStats[e] += item[e]
        }
      }
    })

    commit('UPDATE_STATS', newStats)
  },
  updateStats: ({ commit, state }, incStats) => {
    const newStats = Object.assign({}, state.stats)

    Object.keys(newStats).map((e) => {
      if (e in incStats) {
        newStats[e] += incStats[e]
      }
    })
    commit('UPDATE_STATS', newStats)
  },
  updateStatsFromItem: ({ commit, state }, [stats, type]) => {
    const newStats = Object.assign({}, state.stats)

    Object.keys(newStats).map((e) => {
      for (const item of stats) {
        if (e in item) {
          type === 'add'
          ? newStats[e] += item[e]
          : newStats[e] -= item[e]
        }
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
