export const mutations = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  SET_MESSAGELIST: 'SET_MESSAGELIST'
}

export default {
  [mutations.ADD_MESSAGE]: (state, payload) => (state.chatMessageList.push(payload)),
  [mutations.SET_MESSAGELIST]: (state, payload) => (state.chatMessageList = payload)
}
