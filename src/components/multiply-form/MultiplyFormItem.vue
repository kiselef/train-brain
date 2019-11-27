<template>
    <div
        class="col-sm-6 col-md-4 col-lg-3"
        :class="{ successful: isRightAnswer && isChanged, changed: isChanged }"
        @change="changedAnswer"
        >
        <div class="mb-3">
            <label class="mb-0 input-group-text">{{ item.label }}</label>
            <input type="number" class="form-control form-control-sm" v-model="userAnswer" :disabled="isRightAnswer">
        </div>
    </div>
</template>

<script>
  export default {
    name: "MultiplyFormItem",

    props: {
      item: Object,
      isReady: Boolean,
    },

    data: function () {
      return {
        userAnswer: '',
        rightAnswer: null,
        isChanged: false,
      }
    },

    watch: {
      isReady: function (value) {
        if (value) {
          this.updateValues();
        }
      }
    },

    computed: {
      isRightAnswer: function () {
        return this.isChanged
          ? this.item.result === Number(this.userAnswer)
          : false
      },
    },

    methods: {
      updateValues: function () {
        this.userAnswer = '';
        this.isChanged = false;
      },

      changedAnswer: function () {
        if (this.isChanged) {
          return;
        }
        this.isChanged = true;
        if (!this.isRightAnswer) {
          this.$emit('increase-answer-errors');
        }
      },
    },
  }
</script>

<style lang="less" scoped>
    label {
        display: inline-block;
        width: 100%;
        text-align: center;
        padding: 0 5px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom: 0;
        &:after {
            content: "❓";
            position: absolute;
            font-size: 1.4em;
            top: 1.15em;
            right: 0.8em;
        }
    }
    input {
        border-radius: 0;
    }
    .changed {
        label {
            &:after {
                content: "🙄‍";
            }
        }
        &:not(.successful) input {
            border-color: #cc8f93;
        }
    }
    .changed.successful, .successful {
        label:after {
            content: "😎";
        }
        input {
            color: green;
            border-color: #87ccaf;
        }
    }
</style>
