export const mutations = {
  SET_USER_DATA: 'SET_USER_DATA',
  SET_USER_LIST: 'SET_USER_LIST',
  SET_USER_FORM_STATE: 'SET_USER_FORM_STATE'
}

export default {
  [mutations.SET_USER_DATA]: (state, payload) => (state.userData = payload),
  [mutations.SET_USER_LIST]: (state, payload) => (state.userList = payload),
  [mutations.SET_USER_FORM_STATE]: (state, payload) => (state.userFormState = payload)
}
