import { mutations } from './mutations'
import UsersClass from '@/core/users'
const User = new UsersClass()

export default {
  async getAllUsers ({ commit }) {
    commit(mutations.SET_USER_LIST, await User.getAllUsers())
  },
  async getUserById ({ commit }, id) {
    return User.getUserById(id)
  },
  async updateUser ({ dispatch }, payload) {
    const resp = await User.update(payload)
    if (resp) {
      dispatch('Alerts/success', null, { root: true })
      return resp
    }
  },
  async deleteUser ({ dispatch }, id) {
    let resp = await dispatch('Alerts/confirmDelete', null, { root: true })
    if (resp) {
      resp = await User.delete(id)

      if (resp) {
        return dispatch('Alerts/success', null, { root: true })
      }
    }
  },
  async createUser ({ commit, dispatch }, payload) {
    if (payload.hasOwnProperty('additionalUserInfo') && payload.additionalUserInfo.isNewUser) {
      const newUserInfo = User.sanitazeToSaveNew(payload)
      let createdUser = await User.save(newUserInfo)
      createdUser = Object.assign({ 'picture': newUserInfo.picture }, createdUser)
      return dispatch('setUserState', User.objToModel(createdUser))
      // dispatch('Auth/setAuthState', true, { root: true })
    } else {
      const { email, picture } = User.fireBaseObjToModel(payload)
      let dataUser = await User.getUserByEmail(email)
      dataUser = Object.assign({ picture }, dataUser)
      return dispatch('setUserState', User.objToModel(dataUser))
    }
  },
  setUserState ({ commit }, payload) {
    localStorage.setItem('user', JSON.stringify(payload))
    commit(mutations.SET_USER_DATA, payload)
  },
  setFormState ({ commit }, payload) {
    commit(mutations.SET_USER_FORM_STATE, payload)
  },
  async autoSetUserState ({ dispatch }, payload) {
    let { email, picture } = User.sanitazeAutoSign(payload)
    let userData = await User.getUserByEmail(email)
    userData = Object.assign({ picture }, userData)
    userData = await dispatch('setUserState', User.objToModel(userData))
    return userData
  }
}
