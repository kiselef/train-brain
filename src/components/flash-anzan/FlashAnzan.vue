<template>
    <div>
        <flash-anzan-settings :is-ready="isReady" />
        <flash-anzan-form />
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

    data: function () {
      return {
        name: 'FlashAnzan',
      };
    },
  }
</script>

<style lang="less" scoped>

</style>
