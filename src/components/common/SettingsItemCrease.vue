<template>
    <b-form-group
        class="mb-1"
        :label="label"
    >
        <b-input-group :prepend="prepend">
            <b-form-input
                @keypress.prevent="keyPress"
                :value="value"
                type="text"
            ></b-form-input>
            <b-input-group-append>
                <b-button class="crease" variant="primary" @click="increase()" :disabled="value >= max"><b>+</b></b-button>
                <b-button class="crease" variant="dark" @click="decrease()" :disabled="value <= min"><b>-</b></b-button>
            </b-input-group-append>
        </b-input-group>
    </b-form-group>
</template>

<script>
  export default {
    name: "SettingsItemCrease",

    props: {
      max: Number,
      min: Number,
      label: String,
      value: Number,
      prepend: {
        type: String,
        default: ''
      },
      step: {
        type: Number,
        default: 1,
      },
    },

    methods: {
      increase: function () {
        this.$emit('input', this.value + this.step)
      },

      decrease: function () {
        this.$emit('input', this.value - this.step)
      },

      keyPress: function () {
        return false
      },
    },
  }
</script>

<style lang="less" scoped>
    .btn {
        &.crease {
            padding: 0.375rem 0.95rem;
        }
    }
    input {
        text-align: center;
    }
</style>
