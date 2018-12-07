<template>
    <b-container>
        <b-row class="mt-4">
            <b-col>
                <span class="bold">
                    Novo Usuário
                </span>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                <b-form @submit="submit">
                    <b-form-group
                        label="Nome">
                        <b-form-input
                            id="nameSignIn"
                            type="text"
                            v-model="value.name"
                            data-vv-name="name"
                            v-validate="'required'"
                            :state="stateButtons.name"
                            placeholder="Digite o nome">
                        </b-form-input>
                        <b-form-invalid-feedback>
                            {{ errors.first('name') }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Email">
                        <b-form-input
                            id="emailSignIn"
                            type="email"
                            v-model="value.email"
                            data-vv-name="email"
                            v-validate="'required|email'"
                            :state="stateButtons.email"
                            placeholder="Digite o Email">
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
                    <b-form-group
                        label="Confirme sua Senha">
                        <b-form-input
                            id="passwordConfirmSignIn"
                            type="password"
                            v-model="value.passwordConfirm"
                            :data-vv-name="'passwordConfirm'"
                            :state="stateButtons.passwordConfirm"
                            v-validate="'required|confirmed:password'"
                            placeholder="Digite a Confirmação de senha">
                        </b-form-input>
                        <b-form-invalid-feedback>
                            {{ errors.first('passwordConfirm') }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-form>
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
                <b-button @click="submit" class="full-width" type="submit" variant="success">Criar Usuário</b-button>
            </b-col>
        </b-row>
        <b-row class="text-center mt-4">
            <b-col>
                <b-button @click="$router.go(-1)" variant="link">voltar</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import GoogleTranslator from '@/core/googleTranslate'
const Google = new GoogleTranslator()
export default {
  data: () => ({
    showMessage: false,
    messageError: '',
    value: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    stateButtons: {
      name: null,
      email: null,
      password: null,
      passwordConfirm: null
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
    async submit () {
      const validate = await this.validateForm()
      if (validate) {
        this.showMessage = false
        this.$store.dispatch('Auth/createUserEmail', this.value)
          .then(() => this.$router.push({ name: '/' }))
          .catch(async ({ message }) => {
            this.messageError = await Google.translate(message)
            this.showMessage = true
          })
      }
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
    }
  },
  mounted () {
    this.$validator.reset()
  }
}
</script>
