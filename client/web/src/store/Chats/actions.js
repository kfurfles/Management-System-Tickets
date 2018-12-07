import {
  mutations
} from './mutations'
import ChatClass from '@/core/chats'

const Chat = new ChatClass()
export default {
  addNewMessage ({ commit }, payload) {
    return Chat.addNewMessage(payload)
  },
  async updateMessageList ({ commit }, payload) {
    await commit(mutations.SET_MESSAGELIST, payload)
  },
  async openedMessage ({ commit }, payload) {
    await Chat.openedMessage(payload)
  },
  instanceFirebase ({ commit }) {
    return Chat
  }
}
