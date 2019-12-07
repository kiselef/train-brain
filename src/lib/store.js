import Vue from 'vue'

const store = Vue.observable({
  isReady: false,
  isCompleted: false,
  errorsAnswerCounter: 0,
})

const mutation = {
  setIsReady(value) {
    store.isReady = value
  },
  setIsCompleted(value) {
    store.isCompleted = value
  },
  clearErrorsAnswerCounter() {
    store.errorsAnswerCounter = 0
  },
  increaseErrorsAnswerCounter() {
    store.errorsAnswerCounter++
  },
}

export {store, mutation}
