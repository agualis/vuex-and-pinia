import Vue from 'vue'
import App from './App.vue'
import { vuexStore } from './stores/vuex-store'
import { createPinia, PiniaPlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI)
Vue.use(PiniaPlugin)
const pinia = createPinia()

Vue.config.productionTip = false

new Vue({
  store: vuexStore,
  pinia,
  render: h => h(App),
}).$mount('#app')
