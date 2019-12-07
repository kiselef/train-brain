<template>
    <div class="row">
        <sudoku-cell v-for="cell in cells" :key="cell" :cell="cell" />
    </div>
</template>

<script>
  import SudokuCell from "./SudokuCell";
  export default {
    name: "SudokuFormRowCells",

    components: {
      SudokuCell
    },

    props: {
      cells: {
        type: Array,
        required: true,
        validator: values => values.length === 9
      },
    },
  }
</script>

<style scoped>

</style>
