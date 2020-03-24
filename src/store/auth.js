import { auth, db } from '../api/firebase'

const state = () => ({
  isAuth: false
})

const getters = {

}

const mutations = {
  CHANGE_USER_STATE: (state) => { state.isAuth = !state.isAuth }
}

const actions = {
  login: async ({ commit }, user) => {
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password)

      commit('CHANGE_USER_STATE')

      return true
    } catch (e) {
      return false
    }
  },
  register: async ({ commit }, user) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(user.email, user.password)
      const newUser = {
        username: user.username,
        items: []
      }

      if (res) {
        const ref = db.collection('users').doc(res.user.uid)

        await ref.set(newUser)
      }

      commit('CHANGE_USER_STATE')

      return true
    } catch (e) {
      return false
    }
  }
}

export {
  actions,
  getters,
  mutations,
  state
}
