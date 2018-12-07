<template>
    <transition>
        <router-view :class="[{ animated: true},route]"/>
    </transition>
</template>

<script>

export default {
  name: 'Router',
  computed: {
    route () {
      return this.$route.name
    }
  }
}

</script>
