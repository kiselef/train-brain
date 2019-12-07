<template>
    <div>
        <multiply-form-settings
            @push-items="pullItems"
        />
        <form-wrapper>
            <multiply-form-item
                v-for="(item, index) in items"
                :key="index"
                :item="item"
            />
        </form-wrapper>
    </div>
</template>

<script>
  import FormWrapper from '../common/FormWrapper'
  import MultiplyFormItem from './MultiplyFormItem'
  import MultiplyFormSettings from './MultiplyFormSettings'
  import {store} from "../../lib/store";

  export default {
    name: "MultiplyForm",

    components: {
      FormWrapper,
      MultiplyFormItem,
      MultiplyFormSettings,
    },

    computed: {
      isReady() {
        return store.isReady
      },
      isCompleted() {
        return store.isCompleted
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
