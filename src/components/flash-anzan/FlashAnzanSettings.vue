<template>
    <div>
        <settings-wrapper :is-ready="isReady">
            <div class="row">
                <div class="col-sm-12 col-lg-12">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="row mb-3">
                                <div class="col-sm-6">
                                    <settings-item-crease
                                        label="Число примеров"
                                        :min="1"
                                        :max="30"
                                        v-model="numberOfItems"
                                    />
                                </div>
                                <div class="col-sm-6">
                                    <settings-item-crease
                                        label="Число слагаемых"
                                        :min="2"
                                        :max="30"
                                        v-model="numberOfElements"
                                    />
                                </div>
                            </div>
                            <b-form-group :label="`Скорость слагаемых: ${this.speedElementsInSec} сек`">
                                <b-form-input class="mt-2" v-model.number="speedElements" type="range" step="100" min="200" max="2500"></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <label>Размерность слагаемых</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <settings-item-crease
                                                prepend="от"
                                                :min="1"
                                                :max="30"
                                                v-model="sizeFrom"
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <settings-item-crease
                                                prepend="до"
                                                :min="1"
                                                :max="30"
                                                v-model="sizeTo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <b-form-checkbox v-model="onlyPositiveElements" class="mt-3">
                                        Только положительные слагаемые
                                    </b-form-checkbox>
                                    <b-form-checkbox v-model="onlyPositiveResult" :disabled="onlyPositiveElements">
                                        Только положительный результат
                                    </b-form-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </settings-wrapper>
    </div>
</template>

<script>
  import BrainMath from '../../lib/math'
  import SettingsWrapper from '../common/SettingsWrapper'
  import SettingsItemCrease from '../common/SettingsItemCrease';
  import {store} from "../../lib/store";

  export default {
    name: "FlashAnzanSettings",

    components: {
      SettingsWrapper,
      SettingsItemCrease,
    },

    computed: {
      speedElementsInSec() {
        return this.speedElements / 1000
      },

      isReady() {
        return store.isReady
      },
    },

    created: function () {
      this.createItems()
    },

    data: function () {
      return {
        items: [],
        speedElements: 1000,
        numberOfItems: 2,
        numberOfElements: 3,
        sizeFrom: 1,
        sizeTo: 1,
        onlyPositiveElements: true,
        onlyPositiveResult: true,
      };
    },

    watch: {
      isReady(value) {
        if (value) {
          this.createItems()
          this.$emit('push-settings', {
            items: this.items,
            speedItems: this.speedItems,
            speedElements: this.speedElements,
          })
        }
      },

      onlyPositiveElements(value) {
        if (value) {
          this.onlyPositiveResult = true
        }
      },
    },

    methods: {
      createItems() {
        this.items = []
        for (let i = 0; i < this.numberOfItems; i++) {
          this.items.push(this.createItem())
        }
      },

      createItem() {
        const item = {
          elements: [],
          result: 0,
        }

        for (let i = 0; i < this.numberOfElements; i++) {
          let element = this.createElement(item.result)
          item.result += element
          item.elements.push(element)
        }

        return item
      },

      createElement(relatedValue = 0) {
        let element;
        if (this.onlyPositiveElements) {
          element = this.createRandomNumber()
        } else if (this.onlyPositiveResult) {
          element = this.createRandomNumber(relatedValue)
        } else {
          element = this.createRandomNumber(-1)
        }

        return element
      },

      createRandomNumber(relatedValue = 0) {
        const randomSize = BrainMath.getRandomNumber(this.sizeFrom, this.sizeTo);

        return BrainMath.getNumberBySize(randomSize, relatedValue)
      }
    },
  }
</script>

<style lang="less" scoped>

</style>
