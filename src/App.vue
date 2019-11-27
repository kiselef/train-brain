<template>
  <div id="app">
      <who-are-you v-if="!name" @user-name-changed="login" />
      <div v-else>
          <top-nav :name="name" @user-logout="logout" />
          <!-- TODO: isReady/isCompleted напрашиваются на Vuex -->
          <multiply-form
              :isReady="isReady"
              :isCompleted="isCompleted"
              @increase-answer-errors="errorsAnswerCounter++"
          />
          <multiply-results
              :errorsAnswerCounter="errorsAnswerCounter"
              :isReady="isReady"
              :isCompleted="isCompleted"
              @start="start"
              @stop="stop"
          />
      </div>
  </div>
</template>

<script>
import MultiplyForm from './components/multiply-form/MultiplyForm'
import MultiplyResults from "./components/MultiplyResults";
import WhoAreYou from "./components/WhoAreYou";
import TopNav from "./components/top-nav/TopNav";

export default {
  name: 'app',

  data: function () {
    return {
      name: '',
      isReady: false,
      isCompleted: false,
      errorsAnswerCounter: 0,
    };
  },

  mounted: function () {
    this.name = localStorage.name || ''
  },

  components: {
    TopNav,
    WhoAreYou,
    MultiplyResults,
    MultiplyForm,
  },

  methods: {
    start: function () {
      this.isReady = true
      this.isCompleted = false
      this.errorsAnswerCounter = 0
    },

    stop: function () {
      this.isReady = false
      this.isCompleted = true
    },

    login: function (name) {
      this.name = name;
    },

    logout: function () {
      this.name = ''
      this.isReady = false
      this.isCompleted = false
    },
  },

  watch: {
    name (newName) {
      localStorage.name = newName
    }
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
