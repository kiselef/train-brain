<template>
    <div>
        <multiply-form-settings
            @push-items="pullItems"
            :is-ready="isReady"
            :is-completed="isCompleted" />
        <fieldset class="container" :disabled="isCompleted">
            <div class="row mt-3" v-if="isReady || isCompleted">
                <multiply-form-item
                    v-for="(item, index) in items"
                    :key="index"
                    :item="item"
                    :isReady="isReady"
                    @increase-answer-errors="$emit('increase-answer-errors')" />
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
      pullItems: function (items) {
        this.items = items
      },
    },

    data: function () {
      return {
        items: [],
      };
    },
  }
</script>

<style lang="less" scoped>

</style>
