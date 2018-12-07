<template>
    <b-button
        variant="success"
        :type="type"
        @click="$emit('click',$event)"
        :class="{'TopButton': topButton}">
        <slot/>
    </b-button>
</template>

<script>
export default {
  props: {
    topButton: {
      default: false,
      type: Boolean
    },
    type: {

    }
  }
}
</script>

<style lang="scss" scoped>
.TopButton{
    position: absolute;
    top: 10px;
    right: 12px;
    padding: 0.375rem 0.75rem;
}
</style>
