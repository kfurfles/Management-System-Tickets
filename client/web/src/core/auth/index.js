import firebase from './../firebase'

export default class Auth {
  constructor () {
    this.firebase = firebase
    this.google_provider = new firebase.auth.GoogleAuthProvider()
  }
  loginWithGoogle () {
    return this.loginBase(this.google_provider)
  }
  loginWithEmail ({ email, password }) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
  async signInWithEmail ({ name, email, password }) {
    let response = JSON.parse(JSON.stringify(await firebase.auth().createUserWithEmailAndPassword(email, password)))
    const addInfo = Object.assign({ name, email, password }, response.additionalUserInfo.profile)
    response.additionalUserInfo.profile = addInfo
    return response
  }
  loginBase (provider) {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        return firebase.auth().signInWithPopup(provider)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  async recoverPassword ({ email }) {
    const response = await firebase.auth().sendPasswordResetEmail(email)
    console.log(response)
    return response
  }
  async logout () {
    return firebase.auth().signOut()
  }
}

// export default Auth
