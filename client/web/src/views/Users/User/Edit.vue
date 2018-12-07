<template>
    <b-container>
        <b-row class="mt-5">
            <b-col>
                <form-user update v-model="form" @submit="submit"/>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import FormUser from '@/components/Forms/User'
import '@/compiled-icons/icn_logout'

export default {
  data: () => ({
    form: {
      name: '',
      id: '',
      password: '',
      email: '',
      confirmPassword: '',
      perfil: null,
      departamento: null,
      cargo: null
    }
  }),
  components: {
    FormUser
  },
  methods: {
    async setForm () {
      const response = await this.$store.dispatch('Users/getUserById', this.$route.params.id)
      const { cargoId, departamentoId, email, nome, permissao } = response
      this.form.name = nome
      this.form.id = this.$route.params.id
      this.form.email = email
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

</style>
