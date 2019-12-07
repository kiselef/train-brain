<template>
  <div id="app">
      <who-are-you v-if="!name" @user-name-changed="login" />
      <div v-else>
          <top-nav :name="name" @user-logout="logout" />
          <router-view
              @stop="stop"
          ></router-view>
          <multiply-results
              @start="start"
              @stop="stop"
          />
      </div>
  </div>
</template>

<script>
import MultiplyResults from "./components/MultiplyResults";
import WhoAreYou from "./components/WhoAreYou";
import TopNav from "./components/top-nav/TopNav";
import {store, mutation} from './lib/store'

export default {
  name: 'app',

  data: function () {
    return {
      name: '',
    };
  },

  computed: {
    isReady() {
      return store.isReady
    },

    isCompleted() {
      return store.isCompleted
    },

    errorsAnswerCounter() {
      return store.errorsAnswerCounter
    },
  },

  created: function () {
    this.name = localStorage.name || ''
  },

  components: {
    TopNav,
    WhoAreYou,
    MultiplyResults,
  },

  methods: {
    start: function () {
      mutation.setIsReady(true)
      mutation.setIsCompleted(false)
      mutation.clearErrorsAnswerCounter()
    },

    stop: function () {
      mutation.setIsReady(false)
      mutation.setIsCompleted(true)
    },

    login: function (name) {
      this.name = name;
    },

    logout: function () {
      this.name = ''
      mutation.setIsReady(false)
      mutation.setIsCompleted(false)
    },
  },

  watch: {
    name (newName) {
      localStorage.name = newName
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 0 70px 0;
}
</style>
