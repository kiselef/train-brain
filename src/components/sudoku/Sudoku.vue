<template>
    <div class="sudoku-wrapper">
        <form-wrapper :isReady="isReady" :is-completed="isCompleted">
            <sudoku-form :items="items" />
        </form-wrapper>
    </div>
</template>

<script>
  import SudokuForm from "./SudokuForm";
  import FormWrapper from "../common/FormWrapper";

  export default {
    name: "Sudoku",

    components: {
      FormWrapper,
      SudokuForm
    },

    props: ['isReady', 'isCompleted'],

    data: function () {
      return {
        items: [
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
        ]
      }
    }
  }
</script>

<style scoped>

</style>
