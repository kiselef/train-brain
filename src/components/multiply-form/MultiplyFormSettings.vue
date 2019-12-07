<template>
    <settings-wrapper>
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
                    :label="`Размерность ${index + 1}`"
                    label-cols="8"
                >
                    <b-form-select
                        v-model="sizesOfElement[index]"
                        :options="optionsLists.sizesOfElement"
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
    </settings-wrapper>
</template>

<script>
  import SettingsWrapper from "../common/SettingsWrapper";
  import {store} from "../../lib/store";
  export default {
    name: "MultiplyFormSettings",

    components: {
      SettingsWrapper
    },

    created: function () {
      this.initSizesOfElement();
    },

    data: function () {
      return {
        // примеры список
        items: [],
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

    computed: {
      isReady() {
        return store.isReady
      },
    },

    watch: {
      isReady: function (value) {
        if (value) {
          this.items = []
          for (let iItems = 0; iItems < this.numberOfItems; iItems++) {
            this.items.push(this.createItem())
          }
          this.$emit('push-items', this.items)
        }
      }
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

      /**
       * Создает один рандомный пример
       *
       * @returns {{elements: Array, label: string, result: number}}
       */
      createItem: function () {
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

        return currentItem;
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

</style>
