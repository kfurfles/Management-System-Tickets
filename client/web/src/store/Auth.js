import actions from './Auth/actions'
import getters from './Auth/getters'
import mutations from './Auth/mutations'
import state from './Auth/state'

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
