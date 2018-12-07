<template>
  <div>
    <router-name/>
    <Router/>
    <menu-bar v-if="auth" v-show="!noMenu"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Router from '@/containers/Router'
import MenuBar from '@/components/Menu/MenuBar'
import RouterName from '@/components/Header/RouterName'
import GenericButton from '@/components/Shared/GenericButton'
import SNewTButton from '@/components/Shared/addButton'
import Vue from 'vue'

Vue.component('s-button', GenericButton)
Vue.component('s-new-t-button', SNewTButton)

export default{
  components: {
    Router,
    MenuBar,
    RouterName
  },
  data: () => ({
    auth: false
  }),
  computed: {
    ...mapState('Auth', ['isAuth']),
    noMenu () {
      return !!this.$route.meta.hasOwnProperty('noMenu')
    }
  },
  watch: {
    isAuth () {
      this.auth = this.setAuth()
    }
  },
  methods: {
    setAuth () {
      return JSON.parse(localStorage.getItem('isAuth'))
    }
  },
  mounted () {
    this.auth = this.setAuth()
  }
}
</script>
