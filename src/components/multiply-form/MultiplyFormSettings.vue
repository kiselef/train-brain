<template>
    <form>
        <fieldset>
            <div class="row">
                <label>
                    <span>Число примеров </span>
                    <select @change="$emit('set-items-numbers', itemsNumbers)" v-model="itemsNumbers">
                        <option v-for="n in 5" v-bind:key="n" :value="calculateItemsNumber(n)">
                            {{ calculateItemsNumber(n) }}
                        </option>
                    </select>
                </label>
            </div>
            <div class="row">
                <label>
                    <span>Размерность <i>x&nbsp;</i></span>
                    <select @change="$emit('set-x-size', xSize)" v-model="xSize">
                        <option v-for="n in 3" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </label>
            </div>
            <div class="row">
                <label>
                    <span>Размерность <i>y&nbsp;</i></span>
                    <select @change="$emit('set-y-size', ySize)" v-model="ySize">
                        <option v-for="n in 3" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </label>
            </div>
            <div class="row">
                <label>
                    <span>Тип операции </span>
                    <select @change="$emit('set-operation', operation)" v-model="operation">
                        <option v-for="n in operationsList" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </label>
            </div>
            <div class="row">
                <label>
                    <span>Проверять сразу </span>
                    <input type="checkbox" disabled />
                </label>
            </div>
        </fieldset>
    </form>
</template>

<script>
  export default {
    name: "MultiplyFormSettings",

    props: {
      settings: Object
    },

    created: function () {
      this.itemsNumbers = this.settings.itemsNumber;
      this.xSize = this.settings.xSize;
      this.ySize = this.settings.ySize;
      this.operation = this.settings.operation;
    },

    data: function () {
      return {
        itemsNumbers: 10,
        xSize: 1,
        ySize: 1,
        operation: '+',
        operationsList: [
          '+', '-', '*', '/'
        ]
      };
    },

    methods: {
      calculateItemsNumber: (n) => n * 10
    }
  }
</script>

<style scoped>
    fieldset {
        border: none;
    }
    .row {
        clear: both;
        width: 100%;
    }
</style>
