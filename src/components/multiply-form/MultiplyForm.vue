<template>
    <div>
        <multiply-form-settings
            @push-items="pullItems"
            :is-ready="isReady"
        />
        <form-wrapper :isReady="isReady" :is-completed="isCompleted">
            <multiply-form-item
                v-for="(item, index) in items"
                :key="index"
                :item="item"
                :isReady="isReady"
                @increase-answer-errors="$emit('increase-answer-errors')"
            />
        </form-wrapper>
    </div>
</template>

<script>
  import FormWrapper from '../common/FormWrapper'
  import MultiplyFormItem from './MultiplyFormItem'
  import MultiplyFormSettings from './MultiplyFormSettings'

  export default {
    name: "MultiplyForm",

    components: {
      FormWrapper,
      MultiplyFormItem,
      MultiplyFormSettings,
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
