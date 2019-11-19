<template>
    <div>
        <button class="btn btn-ready" @click="start" v-if="!isReady && !isCompleted">Я готов!</button>
        <button class="btn btn-complete" @click="complete" v-if="isReady">Я закончил!</button>
        <div v-if="isReady || isCompleted">
            <div v-if="timeSecTookSummary > 0">
                <span v-if="!isCompleted">Время:</span>
                <span v-if="isCompleted">Затрачено времени:</span>
                <span v-if="timeMinTook > 0">{{ timeMinTook }} мин. </span>
                <span v-if="timeSecTookInMin > 0">{{ timeSecTookInMin }} сек.</span>
            </div>
            <div v-if="isCompleted && errorsAnswerCounter">Ошибок: {{ errorsAnswerCounter }}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MultiplyTimer",

    props: {
      isReady: Boolean,
      isCompleted: Boolean,
      errorsAnswerCounter: Number,
    },

    data: function () {
      return {
        timeSecTookSummary: 0,
        timeSecTookInMin: 0,
        executingTimeInterval: null,
      };
    },

    computed: {
      timeMinTook: function () {
        return Math.floor(this.timeSecTookSummary / 60);
      }
    },

    methods: {
      start: function () {
        if (this.isReady) {
          return
        }
        this.executingTimeInterval = setInterval(() => {
          this.timeSecTookSummary++
          this.timeSecTookInMin = this.timeSecTookInMin === 59 ? 0 : this.timeSecTookInMin + 1
        }, 1000)
        this.$emit('change-main-props', {
          isReady: true,
        })
      },

      complete: function () {
        clearInterval(this.executingTimeInterval);
        this.$emit('change-main-props', {
          isCompleted: true,
          isReady: false,
        })
      },
    },
  }
</script>

<style scoped>

</style>
