<template>
    <div class="sudoku-cell">
        <input type="text" :readonly="readonly" v-model="digit" />
    </div>
</template>

<script>
  export default {
    name: "SudokuCell",

    props: ['cell'],

    data: function () {
      return {
        digit: null,
        readonly: false,
      }
    },

    created: function () {
      this.digit = this.cell
      this.readonly = Number.isInteger(this.digit)
    },
  }
</script>

<style lang="less" scoped>
    .sudoku-cell {
        width: 40px;
        height: 40px;
        display: table-cell;
        input {
            text-align: center;
            width: 100%;
            height: 100%;
        }
    }
</style>
