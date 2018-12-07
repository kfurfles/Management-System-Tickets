import * as firebase from 'firebase'

import configFirebase from '@/config-firebase'
export default firebase
const firebaseInstance = firebase.initializeApp(configFirebase)
export { firebaseInstance }
