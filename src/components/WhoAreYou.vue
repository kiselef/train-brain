<template>
    <div class="text-center">
        <form @submit.prevent="setUsername">
            <h1 class="h3 mb-3 font-weight-normal">Как тебя зовут?</h1>
            <input v-model="name" type="text" class="form-control" placeholder="Введи свое имя" required="" autofocus="">
            <button class="btn btn-lg btn-primary btn-block mt-3">Готово 😎</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "WhoAreYou",

    data: function () {
      return {
        name: '',
      }
    },

    methods: {
      setUsername: function () {
        if (this.name.length === 0) {
          return;
        }

        this.$emit('user-name-changed', this.name)
      },
    },
  }
</script>

<style scoped>
    form {
        width: 100%;
        max-width: 330px;
        margin: 0 auto;
    }
</style>
