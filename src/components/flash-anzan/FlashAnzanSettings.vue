<template>
    <div>
        <settings-wrapper :is-ready="isReady">
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <b-form-group
                        class="mb-1"
                        label="Число элементов"
                        label-for="multiply-form_numberOfElements"
                        label-cols="8"
                    >
                        <b-form-select
                            :options="[1,2,3]"
                            id="multiply-form_numberOfElements"
                            size="sm"
                        ></b-form-select>
                    </b-form-group>
                </div>
                <div class="col-sm-6 col-lg-3">

                </div>
            </div>
        </settings-wrapper>
    </div>
</template>

<script>
  import SettingsWrapper from '../common/SettingsWrapper'

  export default {
    name: "FlashAnzanSettings",

    components: {
      SettingsWrapper,
    },

    props: {
      isReady: {
        type: Boolean,
        default: false,
      },
    },

    data: function () {
      return {
        name: 'FlashAnzanSettings',
      };
    },
  }
</script>

<style lang="less" scoped>

</style>
