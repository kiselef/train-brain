<template>
    <div class="main container">
        <multiply-form-settings
             v-on:update-settings-values="updateSettingsValues"
             v-bind:settings="settings" />
        <div class="row">
            <multiply-form-item
                ref="item"
                v-for="index in settings.itemsNumber"
                v-bind:key="index"
                v-bind:index="index"
                v-bind:settings="settings" />
        </div>
    </div>
</template>

<script>
  import MultiplyFormSettings from './MultiplyFormSettings.vue'
  import MultiplyFormItem from './MultiplyFormItem.vue'

  export default {
    name: "MultiplyForm",

    components: {
      MultiplyFormItem,
      MultiplyFormSettings,
    },

    methods: {
      updateSettingsValues: function () {
        this.$refs.item.forEach(itemComponent => itemComponent.updateValues());
      }
    },

    data: function () {
      return {
        settings: {
          itemsNumber: 10,
          xSize: 1,
          ySize: 1,
          operation: '+',
          immediatelyCheck: false,
        },
      };
    },
  }
</script>

<style lang="less" scoped>

</style>
