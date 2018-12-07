<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="RouterName__container">
                    <button class="RouterName__back-icon" v-show="showBackArrow" @click="$router.go(-1)">
                        <svgicon icon="icn_arrow" width="22" height="22" color="#444"></svgicon>
                    </button>
                    <div class="RouterName__route-name">
                        <b>{{ $route.meta.name }}</b>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import '@/compiled-icons/icn_arrow.js'

export default {
  computed: {
    showBackArrow () {
      return this.$route.meta.hasOwnProperty('showBack') && this.$route.meta
    }
  }
}
</script>

<style lang="scss">
.RouterName{
    &__container{
        display: flex;
        text-transform: uppercase;
        z-index: 10;
        position: relative;
        background-color: #fafdff;
        padding-top: 19px;
        margin-right: -15px;
    }
    &__back-icon{
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            transform: rotate(90deg);
        }
    }
}
</style>
