<template>
    <div>
        <multiply-form-settings
            @update-settings-values="updateSettingsValues"
            @start="$emit('start')"
            :is-ready="isReady"
            :is-completed="isCompleted"
            :settings="settings" />
        <fieldset class="container" :disabled="isCompleted">
            <div class="row" v-if="isReady || isCompleted">
                <multiply-form-item
                    ref="item"
                    v-for="index in settings.itemsNumber"
                    :key="index"
                    :index="index"
                    :settings="settings"
                    @increase-answer-errors="$emit('increase-answer-errors')"/>
            </div>
        </fieldset>
    </div>
</template>

<script>
  import MultiplyFormSettings from './MultiplyFormSettings.vue'
  import MultiplyFormItem from './MultiplyFormItem.vue'

  export default {
    name: "MultiplyForm",

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

    components: {
      MultiplyFormItem,
      MultiplyFormSettings,
    },

    methods: {
      updateSettingsValues: function () {
        this.$refs.item.forEach(itemComponent => itemComponent.updateValues());
      },
    },

    data: function () {
      return {
        settings: {
          itemsNumber: 12,
          xSize: 1,
          ySize: 1,
          operation: '+',
          immediatelyCheck: true,
        },
      };
    },
  }
</script>

<style lang="less" scoped>

</style>
