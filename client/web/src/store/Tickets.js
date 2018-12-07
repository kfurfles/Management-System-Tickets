import actions from './Tickets/actions'
import getters from './Tickets/getters'
import mutations from './Tickets/mutations'
import state from './Tickets/state'

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
