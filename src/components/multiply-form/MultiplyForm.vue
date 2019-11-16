<template>
    <div class="main">
        <div class="settings">
            <multiply-form-settings
                v-on:set-items-numbers="changeItems"
                v-on:set-x-size="changeXSize"
                v-on:set-y-size="changeYSize"
                v-on:set-operation="changeOperation"
                v-bind:settings="settings" />
        </div>
        <div class="form">
            <ul class="brain-form-ul">
                <multiply-form-item
                    ref="item"
                    v-for="index in settings.itemsNumber"
                    v-bind:key="index"
                    v-bind:index="index"
                    v-bind:settings="settings" />
            </ul>
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
      changeItems: function (n) {
        this.settings.itemsNumber = n;
        this.updateFormItemValues();
      },
      changeXSize: function (n) {
        this.settings.xSize = n;
        this.updateFormItemValues();
      },
      changeYSize: function (n) {
        this.settings.ySize = n;
        this.updateFormItemValues();
      },
      changeOperation: function (n) {
        this.settings.operation = n;
        this.updateFormItemValues();
      },
      updateFormItemValues: function () {
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
    ul.brain-form-ul {
        list-style-type: none;
    }
    .main {
        margin: 0 auto;
        > div {
            box-sizing: border-box;
            float: left;
            padding: 10px;
        }
        .settings {
            width: 20%;
        }
        .form {
            width: 80%;
        }
    }
</style>
