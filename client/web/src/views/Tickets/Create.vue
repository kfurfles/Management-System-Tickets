<template>
    <b-container>
        <s-form class="mt-4" @submit="submit" v-model="form"/>
    </b-container>
</template>

<script>
import SForm from '@/components/Forms/Ticket'
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  data: () => ({
    form: {
      description: '',
      file: ''
    }
  }),
  components: {
    SForm
  },
  computed: {
    ...mapState('Users', ['userData']),
    ...mapGetters('Users', ['userId']),
    fileName () {
      if (this.form.file) {
        return this.form.file.name
      } else {
        return ''
      }
    }
  },
  methods: {
    async submit ($event) {
      const response = await this.$store.dispatch('Tickets/save', this.sanitazeData(this.form))
      if (response) {
        this.$router.go(-1)
      }
    },
    sanitazeData ({ status = 0, description, alert = 0, file = null }) {
      return {
        status,
        description,
        usuarioId: this.userId,
        informations: this.fileName,
        alert,
        file,
        criado: moment()
      }
    }
  }
}
</script>
