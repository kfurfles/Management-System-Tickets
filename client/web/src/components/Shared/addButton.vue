<template>
    <b-button :variant="variant" class="addButton" @click="$emit('click',$event)">
        <svgicon icon="icn_plus" width="18" height="18" color="#fff"></svgicon>
        <span> Novo <slot></slot>
        </span>
    </b-button>
</template>

<script>
import '@/compiled-icons/icn_plus'

export default {
  props: {
    variant: {
      default: 'success'
    }
  }
}
</script>

<style lang="scss" scoped>
.addButton{
    position: absolute;
    z-index: 11;
    top: 10px;
    right: 12px;
    padding: 0.375rem 0.75rem;
    display: flex;
    align-items: center;

    svg{
        margin-right: 5px;
    }
}
</style>
