<template>
    <li :data-index="index" v-bind:class="{ successful: isRightAnswer, changed: isChanged && this.settings.immediatelyCheck }" @change="isChanged = true">
        <label>
            <span>{{ xValue }} {{ settings.operation }} {{ yValue }}</span>
            <input
                 type="number"
                 v-model="userAnswer"
            />
        </label>
    </li>
</template>

<script>
  export default {
    name: "MultiplyFormItem",

    data: function () {
      return {
        userAnswer: '',
        rightAnswer: null,
        xValue: null,
        yValue: null,
        isChanged: false,
      }
    },

    computed: {
      isRightAnswer: function () {
        return this.settings.immediatelyCheck && this.userAnswer.length
          ? this.rightAnswer === Number(this.userAnswer)
          : false
      }
    },

    created: function () {
      this.updateValues();
    },

    props: {
      index: Number,
      settings: Object,
    },

    methods: {
      updateValues: function () {
        this.xValue = this.getRandomNumber(this.settings.xSize);
        this.yValue = this.getRandomNumber(this.settings.ySize);
        this.rightAnswer = eval(this.xValue + this.settings.operation + this.yValue);
        this.userAnswer = '';
      },

      getRandomNumber: (x = 1) => Math.floor(Math.random() * Math.pow(10, x)),
    },
  }
</script>

<style lang="less" scoped>
    li {
        position: relative;
        float: left;
        label {
            span {
                clear: both;
                display: block;
            }
            input {
                width: 90px;
                border: 2px solid #ccc;
                margin-right: 5px;
                font-size: 1.3em;
                padding: 3px 2px;
            }
            &:after {
                content: "❓";
                position: absolute;
                font-size: 1.6em;
                top: 22px;
                right: 8px;
            }
            &:focus-within:after {
                content: "🤔";
            }

        }
        &.changed {
            label {
                &:focus-within:after {
                    content: "🤔";
                }
                &:after {
                    content: "🙄‍";
                }
            }
        }
        &.changed.successful, &.successful {
            label:after {
                content: "😎";
            }
            input {
                color: green;
                border-color: #87ccaf;
            }
        }
    }
</style>
