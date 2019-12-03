<template>
    <div>
        <flash-anzan-settings
            :is-ready="isReady"
            @push-settings="pullSettings"
        />
        <flash-anzan-form
            :items="items"
            :speedElements="speedElements"
            :is-ready="isReady"
            :is-completed="isCompleted"
            @increase-answer-errors="$emit('increase-answer-errors')"
            @stop="$emit('stop')"
        />
    </div>
</template>

<script>
  import FlashAnzanSettings from "./FlashAnzanSettings";
  import FlashAnzanForm from "./FlashAnzanForm";

  export default {
    name: "FlashAnzan",

    components: {
      FlashAnzanForm,
      FlashAnzanSettings,
    },

    props: {
      isReady: {
        type: Boolean,
        default: false,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },

    methods: {
      pullSettings: function (settings) {
        const { items, speedElements } = settings
        this.items = items
        this.speedElements = speedElements
      },
    },

    data: function () {
      return {
        items: [],
        speedElements: 0,
      };
    },
  }
</script>

<style lang="less" scoped>

</style>
