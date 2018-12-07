import { mutations } from './mutations'
import AuthClass from '@/core/auth'
const Auth = new AuthClass()

export default {
  loginGoogle ({ commit, dispatch }) {
    return Auth.loginWithGoogle()
      .then(response => {
        if (response) {
          dispatch('Users/createUser', response, { root: true })
          dispatch('setAuthState', true)
          return true
        }
      })
  },
  loginEmail ({ dispatch }, payload) {
    return Auth.loginWithEmail(payload)
      .then(x => {
        dispatch('autoSignIn', payload)
        dispatch('setAuthState', true)
      })
  },
  async createUserEmail ({ dispatch }, payload) {
    return Auth.signInWithEmail(payload)
      .then(response => {
        if (response) {
          dispatch('Users/createUser', response, { root: true })
          dispatch('setAuthState', true)
          return true
        }
      })
  },
  emailRecover ({ commit }, payload) {
    return Auth.recoverPassword(payload)
  },
  setAuthState ({ commit }, payload) {
    localStorage.setItem('isAuth', payload)
    commit(mutations.SET_AUTH, payload)
  },
  async autoSignIn ({ dispatch }, payload) {
    return dispatch('Users/autoSetUserState', payload, { root: true })
  },
  async logout ({ dispatch }) {
    await Auth.logout()
    dispatch('setAuthState', false)
    const initialState = {
      picture: '',
      uid: '',
      email: '',
      name: ''
    }
    dispatch('Users/setUserState', initialState, { root: true })
  }

}
