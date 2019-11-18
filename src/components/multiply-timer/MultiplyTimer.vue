<template>
    <div>
        <button class="btn btn-ready" @click="start" v-if="!isReady && !isCompleted">Я готов!</button>
        <button class="btn btn-complete" @click="complete" v-if="isReady">Я закончил!</button>
        <div v-if="isReady || isCompleted">
        <span>Затрачено времени:
          <span v-if="timeMinTook > 0">{{ timeMinTook }} мин. </span>
          <span v-if="timeSecTookInMin > 0">{{ timeSecTookInMin }} сек.</span>
        </span>
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
          return;
        }

        this.isReady = true;
        this.executingTimeInterval = setInterval(() => {
          this.timeSecTookSummary++;
          this.timeSecTookInMin = this.timeSecTookInMin === 59 ? 0 : this.timeSecTookInMin + 1;
        }, 1000);
      },

      complete: function () {
        clearInterval(this.executingTimeInterval);
        this.isCompleted = true;
        this.isReady = false;
      },
    },
  }
</script>

<style scoped>

</style>
