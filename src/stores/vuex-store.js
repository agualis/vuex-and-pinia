import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const vuexStore = new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
        increment: state => state.counter++,
      decrement: state => state.counter--
    }
  })
