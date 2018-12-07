export const mutations = {
  SET_TICKETS_LIST: 'SET_TICKETS_LIST'
}

export default {
  [mutations.SET_TICKETS_LIST]: (state, payload) => (state.ticketList = payload)
}
