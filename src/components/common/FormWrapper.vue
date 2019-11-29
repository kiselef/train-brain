<template>
    <fieldset class="container" :disabled="isCompleted">
        <div class="row mt-3" v-if="isReady || isCompleted">
            <slot></slot>
        </div>
    </fieldset>
</template>

<script>
  export default {
    name: "FormWrapper",

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
        visible: true,
      };
    }
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
