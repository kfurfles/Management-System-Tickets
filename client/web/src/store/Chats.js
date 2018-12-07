import actions from './Chats/actions'
import getters from './Chats/getters'
import mutations from './Chats/mutations'
import state from './Chats/state'

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
