<template>
    <div>
        <form-wrapper :is-ready="isReady" :is-completed="isCompleted" v-if="!isCompleted">
            <div class="question col-lg-12 text-center mb-4 mt-3">{{ question }}</div>
            <div class="answer col-lg-4 col-sm-6 m-auto">
                <b-form-input
                    v-model.number="userAnswer"
                    :state="isRightAnswer"
                    @keydown="isRightAnswer = null"
                    @change="changeUserAnswer"
                    placeholder="Ответ"
                ></b-form-input>
            </div>
        </form-wrapper>
    </div>
</template>

<script>
  import FormWrapper from "../common/FormWrapper";
  export default {
    name: "FlashAnzanForm",

    components: {
      FormWrapper
    },

    props: {
      items: Array,
      speedElements: Number,
      isReady: {
        type: Boolean,
        default: false,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      isNextElement: function () {
        return typeof this.items[this.currentItemNumber + 1] !== "undefined"
      },

      currentItem: function () {
        return this.items[this.currentItemNumber]
      }
    },

    watch: {
      isReady: function (value) {
        if (value) {
          this.start()
        } else {
          this.stop()
        }
      },

      currentItem: function (value) {
        if (typeof value !== "undefined") {
          this.generateCurrentItemQuestion()
        }
      },
    },

    data: function () {
      return {
        userAnswer: '',
        isRightAnswer: null,
        question: '',
        questionInterval: null,
        // индекс текущего примера
        currentItemNumber: -1,
        startSteps: [
          {text: 'На старт', timeout: 0},
          {text: 'Внимание', timeout: 900},
          {text: 'Поехали!', timeout: 1800},
        ],
      };
    },

    methods: {
      generateCurrentItemQuestion: function () {
        this.userAnswer = ''
        this.isRightAnswer = null

        let ms = 0
        const elements = this.currentItem.elements;
        for (let iElement in elements) {
          setTimeout(() => {
            this.question = elements[iElement]
          }, ms)
          ms += this.speedElements
        }
      },

      nextItem: function () {
        setTimeout(() => {
          if (this.isNextElement) {
            this.currentItemNumber++
          } else {
            this.$emit('stop')
          }
        }, 800)
      },

      changeUserAnswer: function () {
        this.isRightAnswer = this.currentItem.result === this.userAnswer
        if (!this.isRightAnswer) {
          this.$emit('increase-answer-errors')
        } else {
          this.nextItem()
        }
      },

      start: function () {
        this.startSteps.forEach((step, index) => {
          setTimeout(() => {
            this.question = step.text
            if (typeof this.startSteps[index + 1] === "undefined") {
              setTimeout(() => { this.currentItemNumber++ }, 800)
            }
          }, step.timeout)
        })
      },

      stop: function () {
        this.currentItemNumber = -1
        this.userAnswer = ''
      },
    },
  }
</script>

<style lang="less" scoped>
    .question {
        font-size: 4.5em;
    }
</style>
