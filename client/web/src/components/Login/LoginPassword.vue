<template>
    <b-container>
        <b-row class="mt-4">
            <b-col>
                <span class="bold">
                    Codigo do sistema
                </span>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                <div @submit="submit">
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
                    <b-form-group
                        label="Senha">
                        <b-form-input
                            ref="password"
                            type="password"
                            v-model="value.password"
                            :data-vv-name="'password'"
                            v-validate="'required|min:6'"
                            :state="stateButtons.password"
                            placeholder="Digite a Senha">
                        </b-form-input>
                        <b-form-invalid-feedback>
                            {{ errors.first('password') }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                </div>
            </b-col>
        </b-row>
        <b-row v-if="showMessage">
            <b-col>
                <b-alert show variant="warning">
                    <div>
                        {{ messageError }}
                    </div>
                </b-alert>
            </b-col>
        </b-row>
        <b-row class="text-center mt-3">
            <b-col>
                <b-button class="full-width" @click="submit" variant="success">Entrar</b-button>
            </b-col>
        </b-row>
        <!-- <b-row class="text-center mt-2">
            <b-col>
                <b-button @click="$emit('has-auth-code')" variant="link">Tenho um código de autorização</b-button>
            </b-col>
        </b-row> -->
    </b-container>
</template>

<script>
import updateData from '@/mixins/updateData'
import GoogleTranslator from '@/core/googleTranslate'
import { setTimeout } from 'timers'
const Google = new GoogleTranslator()

export default {
  mixins: [updateData],
  data: () => ({
    showMessage: false,
    hiddeButton: false,
    sendedEmail: '',
    variant: 'success',
    stateButtons: {
      email: null,
      password: null
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
    async submit () {
      const validate = await this.validateForm()
      if (validate) {
        this.showMessage = false
        this.$store.dispatch('Auth/loginEmail', this.value)
          .then((x) => {
            this.$router.push({ name: '/' })
          })
          .catch(async ({ message }) => {
            this.messageError = await Google.translate(message)
            this.showMessage = true
          })
      }
    }
  },
  activated () {
    setTimeout(() => {
      this.$validator.reset()
    })
  }

}
</script>
