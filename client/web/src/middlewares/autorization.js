import store from './../store'

import auth from './Auth'
import guest from './Guest'

export default (to, from, next) => {
  if (store.state.Auth.isAuth) {
    auth(to, from, next)
  } else {
    guest(to, from, next)
  }
}
