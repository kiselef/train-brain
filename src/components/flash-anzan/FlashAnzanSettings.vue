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
                                        label="Скорость примеров"
                                        :min="0"
                                        :max="5000"
                                        :step="500"
                                        v-model="speedItems"
                                    />
                                </div>
                                <div class="col-sm-6">
                                    <settings-item-crease
                                        label="Скорость слагаемых"
                                        :min="0"
                                        :max="5000"
                                        :step="500"
                                        v-model="speedElements"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-lg-4">
                                    <settings-item-crease
                                        label="Число слагаемых"
                                        :min="2"
                                        :max="30"
                                        v-model="numberOfElements"
                                    />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="row mt-2">
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
                    <div class="form-row">

                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">

                </div>
            </div>
        </settings-wrapper>
    </div>
</template>

<script>
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

    data: function () {
      return {
        items: [],
        speedItems: 1000,
        speedElements: 500,
        numberOfItems: 1,
        numberOfElements: 2,
        sizeFrom: 1,
        sizeTo: 1,
      };
    },

    methods: {

    },
  }
</script>

<style lang="less" scoped>

</style>
