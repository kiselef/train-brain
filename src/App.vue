<template>
  <div id="app">
      <who-are-you v-if="!name" @user-name-changed="login" />
      <div v-else>
          <top-nav :name="name" @user-logout="logout" />
          <!-- TODO: isReady/isCompleted напрашиваются на Vuex -->
          <router-view
              :isReady="isReady"
              :isCompleted="isCompleted"
              @increase-answer-errors="errorsAnswerCounter++"
              @stop="stop"
          ></router-view>
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
    },

    // isReady (value) {
    //   this.$route.is
    // },
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
