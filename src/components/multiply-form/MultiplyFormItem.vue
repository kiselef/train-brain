<template>
    <div
        class="col-sm-6 col-md-4 col-lg-3 mb-3"
        :class="{ successful: isRightAnswer && isChanged, changed: isChanged }"
        @change="changedAnswer"
        >
            <label class="mb-0 input-group-text">{{ item.label }}</label>
            <input
                type="number"
                class="form-control form-control-sm"
                v-model.number="userAnswer"
                :readonly="isRightAnswer"
                @keyup.enter.exact = "nextItem"
                @keyup.shift.arrow-right = "nextItem"
                @keyup.shift.arrow-left = "prevItem"
            >
    </div>
</template>

<script>
  import {mutation} from "../../lib/store";

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
          ? this.item.result === this.userAnswer
          : false
      },
    },

    methods: {
      nextItem: function ($e) {
        const nextWrap = $e.target.parentElement.nextElementSibling;
        if (nextWrap) {
          nextWrap.getElementsByTagName('input')[0].focus();
        }
      },

      prevItem: function ($e) {
        const prevWrap = $e.target.parentElement.previousElementSibling;
        if (prevWrap) {
          prevWrap.getElementsByTagName('input')[0].focus();
        }
      },

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
          mutation.increaseErrorsAnswerCounter()
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
