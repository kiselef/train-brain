<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light" >
            <b-navbar-brand href="#" v-b-toggle.multiply-form-settings>Настройки</b-navbar-brand>
            <!--<b-navbar-nav class="ml-auto">
                <button class="btn btn-outline-dark" v-if="!isReady && !isCompleted" @click.prevent="$emit('start')">Я готов!</button>
            </b-navbar-nav>-->
        </b-navbar>
        <b-collapse id="multiply-form-settings" class="pt-3" visible accordion="my-accordion" role="tabpanel">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <b-form-group
                            class="mb-1"
                            label="Число примеров"
                            label-for="multiply-form_itemsNumber"
                            label-cols="8">
                            <b-form-select
                                @change="$emit('update-settings-values')"
                                v-model="settings.itemsNumber"
                                :options="itemsNumberList"
                                id="multiply-form_itemsNumber"
                                size="sm"
                            ></b-form-select>
                        </b-form-group>
                        <b-form-group
                            class="mb-1"
                            label="Тип операции"
                            label-for="multiply-form_sizesListY"
                            label-cols="8"
                        >
                            <b-form-select
                                @change="$emit('update-settings-values')"
                                v-model="settings.operation"
                                :options="operationsList"
                                id="multiply-form_operation"
                                size="sm"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <b-form-group
                            class="mb-1"
                            label="Размерность X"
                            label-for="multiply-form_sizesListX"
                            label-cols="8"
                        >
                            <b-form-select
                                @change="$emit('update-settings-values')"
                                v-model="settings.xSize"
                                :options="sizesList"
                                id="multiply-form_sizesListX"
                                size="sm"
                            ></b-form-select>
                        </b-form-group>
                        <b-form-group
                            class="mb-1"
                            label="Размерность Y"
                            label-for="multiply-form_sizesListY"
                            label-cols="8"
                        >
                            <b-form-select
                                @change="$emit('update-settings-values')"
                                v-model="settings.ySize"
                                :options="sizesList"
                                id="multiply-form_sizesListY"
                                size="sm"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
  export default {
    name: "MultiplyFormSettings",

    components: {
    },

    props: {
      settings: Object,
      isReady: {
        type: Boolean,
        default: false,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },

    created: function () {
      this.initForm();
    },

    data: function () {
      return {
        itemsNumberList: [],
        sizesList: [],
        operationsList: [
          '+', '-', '*', '/'
        ]
      };
    },

    methods: {
      initForm: function () {
        this.initNumberLists();
        this.initSizes();
      },
      initNumberLists: function () {
        for (let i = 1; i <= 3; i++) {
          this.itemsNumberList.push(i * 12)
        }
      },
      initSizes: function () {
        for (let i = 1; i <= 5; i++) {
          this.sizesList.push(i)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    fieldset {
        border: none;
    }
    nav {
        a.navbar-brand {
            &:after {
                content: " 🐵";
            }
            &.collapsed:after {
                content: " 🙈";
            }
        }
    }
</style>
