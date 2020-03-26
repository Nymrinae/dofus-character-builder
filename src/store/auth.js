import { auth, db } from '../api/firebase'

const state = () => ({
  isAuthed: false,
  user: null
})

const getters = {
  getUsername: state => state.user.username
}

const mutations = {
  CHANGE_USER_STATE: (state) => { state.isAuthed = !state.isAuthed },
  SET_USER: (state, user) => { state.user = user }
}

const actions = {
  login: async ({ commit }, user) => {
    try {
      const res = await auth.signInWithEmailAndPassword(user.email, user.password)
      const data = {
        username: res.user.displayName,
        uid: res.user.uid
      }
      commit('CHANGE_USER_STATE')
      commit('SET_USER', data)

      console.log(res)

      return true
    } catch (e) {
      return false
    }
  },
  register: async ({ commit }, user) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(user.email, user.password)

      const newUser = {
        items: []
      }

      if (res) {
        const ref = db.collection('users').doc(res.user.uid)

        res.user.updateProfile({
          displayName: user.username
        })

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
