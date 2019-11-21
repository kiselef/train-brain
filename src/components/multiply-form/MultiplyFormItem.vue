<template>
    <li :data-index="index"
        v-bind:class="{ successful: isRightAnswer && isChanged, changed: isChanged }"
        @change="changedAnswer"
        >
        <label>
            <span>{{ xValue }} {{ settings.operation }} {{ yValue }}</span>
            <input
                 type="number"
                 v-model="userAnswer"
                 :disabled="isRightAnswer"
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
        return this.isChanged
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
        this.xValue = this.getNumberBySize(this.settings.xSize);
        this.yValue = this.getNumberBySize(this.settings.ySize);
        this.rightAnswer = eval(this.xValue + this.settings.operation + this.yValue);
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

      getNumberBySize: function (size = 1) {
        const
          min = Math.pow(10, size - 1),
          max = Math.pow(10, size) - 1,
          rand = min - 0.5 + Math.random() * (max - min + 1);

        let completedRand = Math.round(rand);
        // числа должны быть без нуля на конце
        if (completedRand % 10 === 0) {
          completedRand += this.getRandomNumber(1, 9);
        }

        return completedRand;
      },

      getRandomNumber: (min, max) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
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
            &:not(.successful) input {
                border-color: #cc8f93;
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
