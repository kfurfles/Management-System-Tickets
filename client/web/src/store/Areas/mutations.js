export const mutations = {
  SET_AREAS: 'SET_AREAS'
}

export default {
  [mutations.SET_AREAS]: (state, payload) => (state.list = payload)
}
