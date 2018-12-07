import actions from './Areas/actions'
import getters from './Areas/getters'
import mutations from './Areas/mutations'
import state from './Areas/state'

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
