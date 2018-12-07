<template>
    <div></div>
</template>
<script>
export default {
  async created () {
    await this.$store.dispatch('Auth/logout')
    this.$router.push({ name: 'Login' })
  }
}
</script>

<style  scoped>
.Logout{
  display: none
}
</style>
