<template>
  <div id="app">
    Твое имя: <input type="text" v-model="name" />
    <div v-if="name.length > 3">
      <h3>Привет, {{ name }}. Реши примеры правильно и покажется смайлик 😎</h3>
      <multiply-form />
    </div>
  </div>
</template>

<script>
import MultiplyForm from './components/multiply-form/MultiplyForm.vue'

export default {
  name: 'app',

  data: function () {
    return {
      name: '',
    };
  },

  components: {
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
