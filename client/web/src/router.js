import Vue from 'vue'
import VueRouter from 'vue-router'

import routeImporter from '@/modules/importers/routeImporter'
import before from '@/middlewares/autorization.js'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Root',
  redirect: { name: '/' }
}].concat(routeImporter(require.context('./routes', false, /.*\.js$/)))

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes,
  mode: 'history'
})
router.beforeEach(before)

export default router
