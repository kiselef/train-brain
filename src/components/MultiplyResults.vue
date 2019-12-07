<template>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="bottom">
        <b-navbar-nav>
            <multiply-timer />
            <div v-if="isCompleted">
                <div>Ошибок: <span>{{ errorsAnswerCounter }}</span></div>
            </div>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <button class="btn btn-success" v-if="!isReady" @click.prevent="$emit('start')">Я готов!</button>
            <button class="btn btn-outline-success" v-if="isReady && !isCompleted" @click="$emit('stop')">Завершить</button>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
  import MultiplyTimer from "./multiply-timer/MultiplyTimer";
  import {store} from "../lib/store";

  export default {
    name: "MultiplyResults",

    components: {
      MultiplyTimer
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
  }
</script>

<style scoped>

</style>
