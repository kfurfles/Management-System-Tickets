<template>
    <b-container>
        <b-row class="mt-5">
            <b-col>
                <form-user update v-model="form" @submit="submit"/>
                <button class="Profile__logout-button" @click="$router.push({ name: 'Logout' })">
                    <svgicon icon="icn_logout" width="22" height="22" color="#babaca"></svgicon>
                </button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import FormUser from '@/components/Forms/User'
import '@/compiled-icons/icn_logout'
import { mapState } from 'vuex'

export default {
  data: () => ({
    form: {
      id: '',
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      perfil: '',
      departamento: '',
      cargo: ''
    }
  }),
  computed: {
    ...mapState('Users', ['userData'])
  },
  components: {
    FormUser
  },
  watch: {
    userData () {
      this.setForm()
    }
  },
  methods: {
    setForm () {
      const { id, email, nome, permissao, departamentoId, cargoId } = this.userData
      this.form.id = id
      this.form.email = email
      this.form.name = nome
      this.form.perfil = permissao
      this.form.departamento = departamentoId
      this.form.cargo = cargoId
    },
    async submit () {
      const r = await this.$store.dispatch('Users/updateUser', this.form)
      console.log(r)
    }
  },
  mounted () {
    this.setForm()
  }
}
</script>

<style lang="scss">
.Profile{
  &__logout-button{
      position: absolute;
      top: -83px;
      right: 0px;
      padding: 10px;
      z-index: 10;
  }
}
</style>
