<template>
    <b-container>
        <b-row class="mt-5">
            <b-col>
                <form-user v-model="form" @submit="submit"/>
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
      password: '',
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
    submit () {

    }
  }
}
</script>

<style lang="scss">

</style>
