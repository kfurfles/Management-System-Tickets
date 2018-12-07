export const mutations = {
  SET_AUTH: 'SET_AUTH'
}

export default {
  [mutations.SET_AUTH]: (state, payload) => (state.isAuth = payload)
}
