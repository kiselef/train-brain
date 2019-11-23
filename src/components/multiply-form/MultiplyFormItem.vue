<template>
    <div
        class="col-sm-6 col-md-4 col-lg-3"
        :class="{ successful: isRightAnswer && isChanged, changed: isChanged }"
        @change="changedAnswer"
        >
        <b-input-group :prepend="calculatingTextLabel" class="mt-3" size="sm">
            <b-form-input type="number" v-model="userAnswer" :disabled="isRightAnswer"></b-form-input>
            <!-- <b-input-group-append>
                <b-input-group-text>R</b-input-group-text>
            </b-input-group-append> -->
        </b-input-group>

    </div>
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
      },

      calculatingTextLabel: function () {
        return this.xValue + ' ' + this.settings.operation + ' ' + this.yValue + ' =';
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
          max = Math.pow(10, size) - 1;

        let rand = this.getRandomNumber(min, max);
        // числа должны быть без нуля на конце
        if (rand % 10 === 0) {
          rand += this.getRandomNumber(1, 9);
        }

        return rand;
      },

      getRandomNumber: (min, max) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
    },
  }
</script>

<style lang="less" scoped>
    .input-group {
        &:after {
            content: "❓";
            position: absolute;
            font-size: 1.4em;
            top: 0;
            right: 0;
        }
    }
    .changed {
        .input-group {
            &:after {
                content: "🙄‍";
            }
        }
        &:not(.successful) input {
            border-color: #cc8f93;
        }
    }
    .changed.successful, &.successful {
        .input-group:after {
            content: "😎";
        }
        input {
            color: green;
            border-color: #87ccaf;
        }
    }
</style>
