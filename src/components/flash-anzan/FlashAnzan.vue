<template>
    <div>
        <flash-anzan-settings
            @push-settings="pullSettings"
        />
        <flash-anzan-form
            :items="items"
            :speedElements="speedElements"
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
