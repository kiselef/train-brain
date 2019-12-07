<template>
    <div class="container">
        <sudoku-form-row-cells v-for="(rowCells, index) in items" :key="index" :cells="rowCells" />
    </div>
</template>

<script>
  import SudokuFormRowCells from "./SudokuFormRowCells";
  export default {
    name: "SudokuForm",

    components: {
      SudokuFormRowCells,
    },

    props: {
      items: {
        type: Array,
        required: true,
      }
    },

    data: function () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
