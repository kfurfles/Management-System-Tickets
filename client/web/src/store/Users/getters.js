export default {
  Profile: (state, getters, rootState, rootGetters) => {
    const { userData } = state
    if (userData.hasOwnProperty('permissao')) {
      return rootGetters['Profiles/getProfileById'](userData.permissao)
    } else {
      return ''
    }
  },
  isAdmin: (state, getters) => {
    if (getters.Profile && parseInt(getters.Profile.id) === 2) {
      return true
    } else {
      return false
    }
  },
  userId: (state, getters) => {
    if (state.userData.hasOwnProperty('idUsuarios')) {
      return state.userData.idUsuarios
    }
    if (state.userData.hasOwnProperty('id')) {
      return state.userData.id
    }
  }
}
