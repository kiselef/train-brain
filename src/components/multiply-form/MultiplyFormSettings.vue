<template>
    <form>
        <fieldset>
            <div class="row">
                <label>
                    <span>Число примеров </span>
                    <select @change="$emit('update-values')" v-model="settings.itemsNumber">
                        <option v-for="n in 5" v-bind:key="n" :value="calculateItemsNumber(n)">
                            {{ calculateItemsNumber(n) }}
                        </option>
                    </select>
                </label>
            </div>
            <div class="row">
                <label>
                    <span>Размерность <i>x&nbsp;</i></span>
                    <select @change="$emit('update-values')" v-model="settings.xSize">
                        <option v-for="n in 3" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </label>
            </div>
            <div class="row">
                <label>
                    <span>Размерность <i>y&nbsp;</i></span>
                    <select @change="$emit('update-values')" v-model="settings.ySize">
                        <option v-for="n in 3" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </label>
            </div>
            <div class="row">
                <label>
                    <span>Тип операции </span>
                    <select @change="$emit('update-values')" v-model="settings.operation">
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

    data: function () {
      return {
        operationsList: [
          '+', '-', '*', '/'
        ]
      };
    },

    methods: {
      calculateItemsNumber: (n) => n * 10,
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
