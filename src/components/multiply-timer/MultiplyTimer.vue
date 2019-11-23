<template>
    <div>
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

    watch: {
      isReady(status) {
        if (status) {
          this.start()
        } else {
          this.stop()
        }
      },
    },

    methods: {
      start: function () {
        this.timeSecSummary = 0
        this.executingTimeInterval = setInterval(() => {
          this.timeSecSummary++
          this.timeSecInMin = this.timeSecSummary % 60
        }, 1000)
      },

      stop: function () {
        clearInterval(this.executingTimeInterval)
      },
    },
  }
</script>

<style scoped>

</style>
