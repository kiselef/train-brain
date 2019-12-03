<template>
    <div>
        <settings-wrapper :is-ready="isReady">
            <div class="row">
                <div class="col-sm-12 col-lg-12">
                    <div class="row">
                        <div class="col-lg-4">
                            <b-form-group :label="`Число примеров: ${this.numberOfItems}`">
                                <b-form-input class="mt-2" v-model.number="numberOfItems" type="range" min="1" max="10"></b-form-input>
                            </b-form-group>
                            <div class="row">
                                <div class="col-sm-6">
                                    <settings-item-crease
                                        label="Число слагаемых"
                                        :min="2"
                                        :max="30"
                                        v-model="numberOfElements"
                                    />
                                </div>
                                <div class="col-sm-6">
                                    <settings-item-crease
                                        label="Скорость слагаемых"
                                        :min="500"
                                        :max="5000"
                                        :step="250"
                                        v-model="speedElements"
                                    />
                                </div>
                            </div>
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

  export default {
    name: "FlashAnzanSettings",

    components: {
      SettingsWrapper,
      SettingsItemCrease,
    },

    props: {
      isReady: {
        type: Boolean,
        default: false,
      },
    },

    created: function () {
      this.createItems()
    },

    data: function () {
      return {
        items: [],
        speedElements: 500,
        numberOfItems: 2,
        numberOfElements: 2,
        sizeFrom: 1,
        sizeTo: 1,
      };
    },

    watch: {
      isReady: function (value) {
        if (value) {
          this.createItems()
          this.$emit('push-settings', {
            items: this.items,
            speedItems: this.speedItems,
            speedElements: this.speedElements,
          })
        }
      }
    },

    methods: {
      createItems: function () {
        this.items = []
        for (let i = 0; i < this.numberOfItems; i++) {
          this.items.push(this.createItem())
        }
      },

      createItem: function () {
        const item = {
          elements: [],
          result: 0,
        }

        for (let i = 0; i < this.numberOfElements; i++) {
          let element = this.createElement();
          item.result += element
          item.elements.push(element)
        }

        return item
      },

      createElement: function () {
        return BrainMath.getNumberBySize(BrainMath.getRandomNumber(this.sizeFrom, this.sizeTo))
      },
    },
  }
</script>

<style lang="less" scoped>

</style>
