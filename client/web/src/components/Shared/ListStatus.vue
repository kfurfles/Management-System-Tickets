<template>
    <ul class="ListStatus__list">
        <li class="ListStatus__item">
            <s-circle class="ListStatus__bullet"/> aberto
        </li>
        <li class="ListStatus__item">
            <s-circle variant="green" class="ListStatus__bullet"/> com resposta
        </li>
        <li class="ListStatus__item">
            <s-circle variant="gray" class="ListStatus__bullet"/> fechado
        </li>
    </ul>
</template>

<script>
import SCircle from '@/components/Shared/Circle'
export default {
  components: {
    SCircle
  }
}
</script>

<style lang="scss">
.ListStatus{
    &__list{
        display: flex;
    }
    &__item{
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        text-transform: capitalize;
        margin-right: 5px;
    }
    &__bullet{
        width: 7px;
        height: 7px;
        margin-right: 5px;
    }
}
</style>
