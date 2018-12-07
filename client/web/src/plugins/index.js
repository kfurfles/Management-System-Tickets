import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import VueSVGIcon from 'vue-svgicon'
import VeeValidate, { Validator } from 'vee-validate'
import VueFire from 'vuefire'
import PtBR from 'vee-validate/dist/locale/pt_BR'

Vue.use(VueFire)
Vue.use(VueSVGIcon)
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {
  locale: 'pt_BR'
})
Validator.localize('pt_BR', PtBR)
