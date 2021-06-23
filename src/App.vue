<template>
  <div id="app">
    <h2>Vuex counter</h2>
    <p>{{ counter }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <h2>Pinia counter</h2>
    <p>{{ piniaCount }}</p>
    <p>
      <button @click="incrementPinia">+</button>
      <button @click="decrementPinia">-</button>
    </p>
</div>
</template>

<script>

import { mapState, mapActions } from 'pinia'
import { useStore } from './stores/pinia-store'

export default {
  name: 'App',
  computed: {
    ...mapState(useStore, {piniaCount: 'counter'}),
      counter () {
          return this.$store.state.counter
      }
    },
    methods: {
      ...mapActions(useStore, {
        incrementPinia: 'increment',
        decrementPinia: 'decrement',
      }),
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
          this.$store.commit('decrement')
      },
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
