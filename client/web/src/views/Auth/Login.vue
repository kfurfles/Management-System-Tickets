<template>
    <b-container style="padding-bottom:20px">
        <b-row>
            <b-col>
                <div class="login__image-container ml-auto mr-auto">
                    <img class="login__image-logo" src="~@/assets/images/logo.png" alt="" srcset="">
                </div>
            </b-col>
        </b-row>

        <login-code @has-email-password="setOption('#normal')" v-if="option === 1" v-model="form" />
        <login-password @has-auth-code="setOption('#easy')" v-if="option === 2" v-model="form" />
        <sign-in-email v-if="option === 4" v-model="form" />
        <recover @back="$router.go(-1)" v-if="option === 3" v-model="form"/>
        <b-row class="text-center mt-1" v-if="option !== 3">
            <b-col>
                <hr>
            </b-col>
        </b-row>
        <login-methods @signInEmail="signInEmail" v-show="option !== 3"/>
        <b-row class="text-center mt-3 mb-5" v-show="option !== 3">
            <b-col>
                <b-button @click="setOption('#recover')" variant="outline-warning">Perdi o acesso</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import LoginCode from '@/components/Login/LoginCode'
import LoginPassword from '@/components/Login/LoginPassword'
import LoginMethods from '@/components/Login/LoginMethods'
import SignInEmail from '@/components/Login/SignInEmail'
import Recover from '@/components/Login/Recover'

export default {
  data: () => ({
    form: {
      email: '',
      password: '',
      authCode: ''
    },
    option: 2
  }),
  methods: {
    setOption (hash) {
      this.$router.push({ hash })
    },
    signInEmail () {
      this.setOption('sigin')
    }
  },
  watch: {
    '$route' (val) {
      if (val.hash.match('easy')) this.option = 1
      if (val.hash.match('normal')) this.option = 2
      if (val.hash.match('recover')) {
        this.option = 3
        this.form.email = ''
      }
      if (val.hash.match('sigin')) this.option = 4
    }
  },
  components: {
    LoginCode,
    LoginPassword,
    LoginMethods,
    SignInEmail,
    Recover
  },
  beforeCreate () {
    this.$router.push({ hash: 'normal' })
  }
}

</script>

<style lang="scss">
.login{
    &__image-container{
        width: 200px;
        margin-top: 50px;
    }

    &__image-logo{
        width: 100%;
        height: auto;
    }
}
</style>
