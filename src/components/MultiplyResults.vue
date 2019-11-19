<template>
    <div>
        <div v-if="isCompleted && errorsAnswerCounter">Ошибок: {{ errorsAnswerCounter }}</div>
    </div>
</template>

<script>
  export default {
    name: "MultiplyResults",

    props: {
      isCompleted: Boolean,
      errorsAnswerCounter: Number,
    },

    data: function () {
      return {
      };
    },
  }
</script>

<style scoped>

</style>
