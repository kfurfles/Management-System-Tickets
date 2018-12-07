import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import firebase from '@/core/firebase'
import '@/plugins'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'))

    if (isAuth) {
      this.firebaseCheckOut()

      //   QUANDO TIVER OFFLINE
      // this.$store.dispatch('Users/setUserState', {
      //   'idUsuarios': 1,
      //   'uidUsuarios': 'S8phMkKClPh278gTphU4cD62Fxp2',
      //   'nome': 'Kelvin Silva',
      //   'email': 'kelvinsilva.ksv@gmail.com',
      //   'permissao': 2,
      //   'cargoId': 1,
      //   'departamentoId': 1,
      //   'cargo': 'Att Cargo',
      //   'departamento': 'Financeiro'
      // })
    } else {
      this.$router.push({ name: 'Logout' })
    }

    this.$store.dispatch('Areas/getListAreas')
    this.$store.dispatch('Occupations/getListOccupations')
  },
  methods: {
    firebaseCheckOut () {
      firebase.auth().onAuthStateChanged(async (user) => {
        // QUANDO TIVER ONLINE
        if (user) {
        // QUANDO TIVER OFFLINE
        // if (true) {
          // QUANDO TIVER ONLINE
          this.$store.dispatch('Auth/setAuthState', true)
          this.$store.dispatch('Auth/autoSignIn', user)
          // this.$store.dispatch('Users/setUserState', user)

          // QUANDO TIVER OFFLINE
          // this.$store.dispatch('Auth/setAuthState', true)
        } else {
          this.$store.dispatch('Auth/setAuthState', false)
        }
      })
    }
  }
}).$mount('#app')
