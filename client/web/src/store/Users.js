import actions from './Users/actions'
import getters from './Users/getters'
import mutations from './Users/mutations'
import state from './Users/state'

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
