import Vue from 'vue'
import Vuex from 'vuex'

import Auth from '@/store/Auth.js'
import Users from '@/store/Users.js'
import Areas from '@/store/Areas.js'
import Profiles from '@/store/Profiles.js'
import Occupations from '@/store/Occupations.js'
import Alerts from '@/store/Alerts.js'
import Tickets from '@/store/Tickets.js'
import Chats from '@/store/Chats.js'
import { firebaseMutations } from 'vuexfire'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Alerts,
    Auth,
    Users,
    Areas,
    Occupations,
    Profiles,
    Tickets,
    Chats
  },
  mutations: {
    ...firebaseMutations
  }
})
