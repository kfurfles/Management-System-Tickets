<template>
<div>
    <b-row class="text-center">
        <b-col>
            <legend class="col-form-label">Ou entrar com</legend>
        </b-col>
    </b-row>
    <b-row class="text-center mt-2">
        <b-col>
            <b-button class="LoginMethods__button is--left" variant="outline-danger" @click="loginWithGoogle">
                <svgicon icon="google-brands" width="22" height="27" color="#fff"></svgicon>
            </b-button>
        </b-col>
        <b-col>
            <b-button class="LoginMethods__button is--right" variant="outline-primary" @click="$emit('signInEmail')">
                <svgicon icon="icn_email" width="22" height="27" color="#3f8df7"></svgicon>
            </b-button>
        </b-col>
    </b-row>
</div>
</template>

<script>
import '@/compiled-icons/google-brands.js'
import '@/compiled-icons/icn_email'

export default {
  methods: {
    async loginWithGoogle () {
      this.$store.dispatch('Auth/loginGoogle')
        .then(() => this.$router.push({ name: '/' }))
    }
  }
}
</script>
<style lang="scss">
.LoginMethods{
    &__button{
        display: block;
        &.is--left{
            margin-left: auto;
            margin-right: 0;
        }
        &.is--right{
            margin-left: 0;
            margin-right: auto;

        }
    }
}
</style>
