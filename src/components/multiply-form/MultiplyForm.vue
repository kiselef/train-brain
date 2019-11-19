<template>
    <fieldset class="main" v-bind:disabled="isCompleted" v-bind:class="{ disabled: isCompleted }">
        <div class="settings">
            <multiply-form-settings
                v-on:update-settings-values="updateSettingsValues"
                v-bind:settings="settings" />
        </div>
        <div class="form">
            <ul class="brain-form-ul">
                <multiply-form-item
                    ref="item"
                    v-for="index in settings.itemsNumber"
                    v-bind:key="index"
                    v-bind:index="index"
                    v-bind:settings="settings"
                    v-on:increase-answer-errors="$emit('increase-answer-errors')"/>
            </ul>
        </div>
    </fieldset>
</template>

<script>
  import MultiplyFormSettings from './MultiplyFormSettings.vue'
  import MultiplyFormItem from './MultiplyFormItem.vue'

  export default {
    name: "MultiplyForm",

    props: {
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
          itemsNumber: 10,
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
    ul.brain-form-ul {
        list-style-type: none;
    }
    .main {
        border: 0;
        &.disabled {
            opacity: 0.6;
        }
        > div {
            box-sizing: border-box;
            float: left;
        }
        .settings {
            width: 20%;
        }
        .form {
            width: 80%;
        }
    }
</style>
