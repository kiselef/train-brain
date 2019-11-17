<template>
    <div class="row">
        <div class="col-sm-4">
            <div class="form-group row">
                <label for="multiply-form_inputNumbers" class="col-sm-7 col-form-label">Число примеров</label>
                <div class="col-sm-5">
                    <select @change="$emit('update-settings-values')" v-model="settings.itemsNumber" id="multiply-form_inputNumbers" class="form-control form-control-sm">
                        <option v-for="n in itemsNumberList" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="multiply-form_operation" class="col-sm-7 col-form-label">Тип операции</label>
                <div class="col-sm-5">
                    <select @change="$emit('update-settings-values')" v-model="settings.operation" id="multiply-form_operation" class="form-control form-control-sm">
                        <option v-for="n in operationsList" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="multiply-form_immediatelyCheck">Проверять сразу</label>
                <input type="checkbox" v-model="settings.immediatelyCheck" id="multiply-form_immediatelyCheck" />
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group row">
                <label for="multiply-form_xSize" class="col-sm-7 col-form-label">Размерность <i>x&nbsp;</i></label>
                <div class="col-sm-5">
                    <select @change="$emit('update-settings-values')" v-model="settings.xSize" id="multiply-form_xSize">
                        <option v-for="n in 3" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="multiply-form_ySize" class="col-sm-7 col-form-label">Размерность <i>y&nbsp;</i></label>
                <div class="col-sm-5">
                    <select @change="$emit('update-settings-values')" v-model="settings.ySize" id="multiply-form_ySize">
                        <option v-for="n in 3" v-bind:key="n" :value="n">{{ n }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MultiplyFormSettings",

    props: {
      settings: Object
    },

    created: function () {
      this.initNumbersList();
    },

    data: function () {
      return {
        itemsNumberList: [],
        operationsList: [
          '+', '-', '*', '/'
        ]
      };
    },

    methods: {
      initNumbersList: function () {
        for (let i = 1; i <= 5; i++) {
          this.itemsNumberList.push(i * 10)
        }
      },
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
