<template>
    <fieldset :disabled="isReady">
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#" @click="visible = !visible" :class="{ collapsed: !visible }">Настройки</b-navbar-brand>
        </b-navbar>
        <b-collapse
            id="multiply-form-settings"
            class="mt-4"
            :visible="visible"
            accordion="my-accordion"
            role="tabpanel">
            <div class="container">
                <slot></slot>
            </div>
        </b-collapse>
    </fieldset>
</template>

<script>
  export default {
    name: "SettingsWrapper",

    props: {
      isReady: {
        type: Boolean,
        default: false,
      },
    },

    data: function () {
      return {
        visible: true
      };
    },

    watch: {
      isReady: function (value) {
        if (value) {
          this.visible = false
        } else {
          this.visible = true
        }
      }
    },
  }
</script>

<style lang="less" scoped>
    fieldset {
        border: none;
    }
    nav {
        a.navbar-brand {
            &:after {
                 content: " 🐵";
            }
            &.collapsed:after {
                 content: " 🙈";
            }
        }
    }
</style>
