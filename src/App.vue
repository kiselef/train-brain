<template>
  <div id="app">
    Твое имя: <input type="text" v-model="name" />
    <div v-if="name.length > 3">
      <h3>Привет, {{ name }}. Реши примеры правильно и покажется смайлик 😎</h3>
      <multiply-timer v-bind:isReady="isReady" v-bind:isCompleted="isCompleted" />
      <multiply-form v-if="isReady || isCompleted" v-bind:isCompleted="isCompleted" />
    </div>
  </div>
</template>

<script>
import MultiplyForm from './components/multiply-form/MultiplyForm'
import MultiplyTimer from "./components/multiply-timer/MultiplyTimer";

export default {
  name: 'app',

  data: function () {
    return {
      name: '',
      isReady: false,
      isCompleted: false,
    };
  },

  components: {
    MultiplyTimer,
    MultiplyForm,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
