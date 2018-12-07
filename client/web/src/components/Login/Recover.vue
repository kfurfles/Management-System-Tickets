<template>
    <b-container>
        <b-form @submit="emitSubmit">
        <b-row class="mt-4">
            <b-col>
                <b-form-group
                    label="Endereço de Email">
                    <b-form-input
                        id="recoverEmail"
                        type="email"
                        :value="value.email"
                        @input.native="updateData($event)"
                        ref="email"
                        :state="stateButtons.email"
                        :data-vv-name="'email'"
                        v-validate="'required|email'"
                        placeholder="Digite seu email">
                    </b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.first('email') }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row v-if="showMessage">
            <b-col>
                <b-alert show :variant="variant">
                    <div v-if="variant === 'success'">
                        <span>
                            For enviado um email para: <b>{{ sendedEmail }}</b>
                        </span>
                    </div>
                    <div v-else>
                        <span>
                            Email não foi encontrado o email: <b>{{ sendedEmail }}</b>
                        </span>
                    </div>
                </b-alert>
            </b-col>
        </b-row>
        <b-row class="text-center mt-2" v-if="!hiddeButton">
            <b-col>
                <b-button @click="emitSubmit" class="full-width" variant="success">Enviar</b-button>
            </b-col>
        </b-row>

        <b-row class="text-center mt-2">
            <b-col>
                <b-button @click="$emit('back')" variant="link">Voltar</b-button>
            </b-col>
        </b-row>
        </b-form>
    </b-container>
</template>

<script>
import updateData from '@/mixins/updateData'

export default {
  mixins: [updateData],
  data: () => ({
    showMessage: false,
    hiddeButton: false,
    sendedEmail: '',
    variant: 'success',
    stateButtons: {
      email: null
    }
  }),
  watch: {
    'errors.items' (val) {
      this.stateAllInputs(val)
    }
  },
  methods: {
    async validateForm () {
      const validatorResponse = await this.$validator.validateAll()
      this.stateAllInputs()
      return validatorResponse
    },
    stateAllInputs () {
      const v = this.value
      const sButtons = this.stateButtons
      Object.keys(v).map(p => {
        if (v[p] === '') {
          sButtons[p] = null
          if (this.errors.has(p)) {
            sButtons[p] = false
          }
        }
        if (this.errors.has(p)) {
          sButtons[p] = false
        } else {
          sButtons[p] = true
        }
      })
    },
    async emitSubmit ($event) {
      const validate = await this.$validator.validateAll()
      if (validate) {
        this.sendedEmail = this.value.email
        this.showMessage = false
        this.$store.dispatch('Auth/emailRecover', this.value)
          .then(() => {
            this.variant = 'success'
            this.showMessage = true
            this.hiddeButton = true
          })
          .catch(() => {
            this.showMessage = true
            this.variant = 'warning'
          })
      }
    }
  },
  activated () {
    this.$validator.reset()
  }
}
</script>
