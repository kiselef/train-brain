<template>
    <div>
        <button class="btn btn-ready" @click="start" v-if="!isReady && !isCompleted">Я готов!</button>
        <button class="btn btn-complete" @click="complete" v-if="isReady">Я закончил!</button>
        <div v-if="isReady || isCompleted">
            <div v-if="timeSecSummary > 0">
                <span>Время: </span>
                <span v-if="timeMin > 0">{{ timeMin }} мин. </span>
                <span v-if="timeSecInMin > 0">{{ timeSecInMin }} сек.</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MultiplyTimer",

    props: {
      isReady: Boolean,
      isCompleted: Boolean,
    },

    data: function () {
      return {
        timeSecSummary: 0,
        timeSecInMin: 0,
        executingTimeInterval: null,
      };
    },

    computed: {
      timeMin: function () {
        return Math.floor(this.timeSecSummary / 60)
      }
    },

    methods: {
      start: function () {
        if (this.isReady) {
          return
        }
        this.executingTimeInterval = setInterval(() => {
          this.timeSecSummary++
          this.timeSecInMin = this.timeSecSummary % 60
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
