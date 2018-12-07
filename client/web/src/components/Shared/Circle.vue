<template>
    <div
        :class="[
            'Circle__container',
            variantColor]"
        ref="Circle__Container"
        :style="{'font-size': fontSize }">
        <slot/>
    </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'blue',
      validator (val) {
        return ['blue', 'green', 'gray'].indexOf(val) > -1
      }
    }
  },
  data: () => ({
    fontSize: ''
  }),
  computed: {
    variantColor () {
      if ('blue'.match(this.variant)) return 'is--blue'
      if ('green'.match(this.variant)) return 'is--green'
      if ('gray'.match(this.variant)) return 'is--gray'
    }
  },
  methods: {
    getFontSize () {
      // console.log(this.$refs.Circle__Container.offsetWidth)
      const fSize = `calc(${this.$refs.Circle__Container.offsetWidth}px * 0.5)`
      this.fontSize = fSize
    }
  },
  mounted () {
    this.getFontSize()
  }
}
</script>

<style lang="scss">
$blue: #3f8df7;
$green: #76d672;
$gray: #999999;

.Circle{
    &__container{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        // ;
        text-align: center;
        border-radius: 50%;
        &.is--blue{
            background-color: $blue;
            box-shadow: 2px 2px 10px $blue;
        }
        &.is--green{
            background-color: $green;
            box-shadow: 2px 2px 10px $green;
        }
        &.is--gray{
            background-color: $gray;
            box-shadow: 2px 2px 10px $gray;
        }
    }
}
</style>
