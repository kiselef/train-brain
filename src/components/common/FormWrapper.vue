<template>
    <fieldset class="container" :disabled="isCompleted">
        <div class="row mt-3" v-if="isReady || isCompleted">
            <slot></slot>
        </div>
    </fieldset>
</template>

<script>
  import {store} from "../../lib/store";

  export default {
    name: "FormWrapper",

    computed: {
      isReady() {
        return store.isReady
      },

      isCompleted() {
        return store.isCompleted
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
