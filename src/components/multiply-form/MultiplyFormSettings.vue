<template>
    <fieldset :disabled="isReady">
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
                            label="Число элементов"
                            label-for="multiply-form_numberOfElements"
                            label-cols="8"
                        >
                            <b-form-select
                                v-model="numberOfElements"
                                @change="initSizesOfElement"
                                :options="optionsLists.numberOfElements"
                                id="multiply-form_numberOfElements"
                                size="sm"
                            ></b-form-select>
                        </b-form-group>
                        <b-form-group
                            v-for="(n, index) in sizesOfElement"
                            :key="index"
                            class="mb-1"
                            :label="'Размерность ' + index"
                            :label-for="'multiply-form_sizeOfElement_' + index"
                            label-cols="8"
                        >
                            <b-form-select
                                v-model="sizesOfElement[index]"
                                :options="optionsLists.sizesOfElement"
                                :id="'multiply-form_sizeOfElement_' + index"
                                size="sm"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <b-form-group
                            class="mb-1"
                            label="Число примеров"
                            label-for="multiply-form_itemsNumber"
                            label-cols="8">
                            <b-form-select
                                v-model="numberOfItems"
                                :options="optionsLists.numberOfItems"
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
                                v-model="operation"
                                :options="optionsLists.operation"
                                id="multiply-form_operation"
                                size="sm"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                </div>
            </div>
        </b-collapse>
    </fieldset>
</template>

<script>
  export default {
    name: "MultiplyFormSettings",

    props: {
      isReady: {
        type: Boolean,
        default: false,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },

    watch: {
      isReady: function (value) {
        if (value) {
          this.$emit('push-items', this.items)
        }
      }
    },

    computed: {
      // сгенерированные примеры по настройкам
      items: function () {
        let items = [];
        if (this.isReady) {
          for (let iItems = 0; iItems < this.numberOfItems; iItems++) {
            // создаем каждый пример
            let currentItem = {
              elements: [],
              label: '',
              result: 0,
            };
            for (let iElements = 0; iElements < this.numberOfElements; iElements++) {
              // создаем каждый элемент примера
              let currentElement = this.getNumberBySize(this.sizesOfElement[iElements]);
              currentItem.elements.push(currentElement);
              currentItem.label += this.numberOfElements === iElements + 1 ? currentElement : `${currentElement} ${this.operation} `;
            }
            currentItem.result = eval(currentItem.label);
            items.push(currentItem)
          }
        }

        return items;
      }
    },

    created: function () {
      this.initSizesOfElement();
    },

    data: function () {
      return {
        // текущая операция
        operation: '+',
        // количество примеров
        numberOfItems: 12,
        // количество элементов (слагаемых/множителей/...) в примере
        numberOfElements: 2,
        // размерность (число цифр) каждого элемента в примере
        sizesOfElement: [],
        // options для select'ов (список возможных вариантов полей)
        optionsLists: {
          numberOfItems: [12, 24, 36, 48],
          numberOfElements: [2, 3, 4, 5],
          sizesOfElement: [1, 2, 3, 4],
          operation: ['+', '-', '*', '/'],
        },
      };
    },

    methods: {
      initSizesOfElement: function () {
        const diffCurrentAndNewSizes = this.numberOfElements - this.sizesOfElement.length;
        if (diffCurrentAndNewSizes > 0) {
          for (let i = 0; i < diffCurrentAndNewSizes; i++) {
            this.sizesOfElement.push(1);
          }
        } else {
          this.sizesOfElement = this.sizesOfElement.slice(0, this.numberOfElements);
        }
      },
      // TODO: вынести эту пару методов в отдельную либу, подключать через import
      getNumberBySize: function (size = 1) {
        const
          min = Math.pow(10, size - 1),
          max = Math.pow(10, size) - 1;

        let rand = this.getRandomNumber(min, max);
        // числа должны быть без нуля на конце
        if (rand % 10 === 0) {
          rand += this.getRandomNumber(1, 9);
        }

        return rand;
      },

      getRandomNumber: (min, max) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
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
