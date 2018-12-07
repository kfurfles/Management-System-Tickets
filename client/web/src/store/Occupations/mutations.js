export const mutations = {
  SET_OCCUPATION: 'SET_OCCUPATION'
}

export default {
  [mutations.SET_OCCUPATION]: (state, payload) => (state.list = payload)
}
