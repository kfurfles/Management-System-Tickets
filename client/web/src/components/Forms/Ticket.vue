<template>
    <div>
        <b-row>
            <b-col>
                <b-form-group @submit="emitSubmit"
                    label="Descrição do chamado">
                    <b-form-textarea
                        class="Ticket__description"
                        id="description"
                        type="textarea"
                        :value="value.description"
                        :data-vv-name="'description'"
                        v-validate="'required|min:5'"
                        :state="stateButtons.description"
                        @input.native="updateLocalState($event)"
                        ref="description"
                        rows="3"
                        placeholder="Insira aqui a descrição">
                    </b-form-textarea>
                    <b-form-invalid-feedback>
                            {{ errors.first('description') }}
                        </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <label for="fileUpload" class="Ticket__input default-border">
                    <svgicon icon="icn_niveis" width="22" height="22" color="#3f8df7"></svgicon>
                    <span class="Ticket__input-text mt-3">
                        Enviar arquivos ou imagens
                    </span>
                </label>
                <div class="Ticket__upload-container">
                <b v-if="value.file">Arquivo: </b>
                <b-form-file
                    class="Ticket__upload"
                    type="file"
                    :value="value.file"
                    ref="file"
                    @change="updateLocalState"
                    id="fileUpload"/>
                </div>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col>
                <s-button @click="emitSubmit" style="width:100%;">
                    Abrir Chamado
                </s-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import '@/compiled-icons/icn_niveis'

export default {
  props: {
    value: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    stateButtons: {
      description: null
    }
  }),
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
    updateLocalState () {
      this.$emit('input', {
        description: this.$refs.description.$el.value,
        file: this.$refs.file.$el.children[0].files[0]
      })
    },
    async emitSubmit () {
      const response = await this.validateForm()
      if (response) {
        this.$emit('submit')
      }
    }
  }
}
</script>

<style lang="scss">
.Ticket{
    &__description{
        border-radius: 5px;
    }
    &__input{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 42px 0;
        flex-flow: column nowrap;
        cursor: pointer;
    }
    &__input-text{
        font-weight: bold;
        font-size: 1.1rem;
    }
    &__upload-container{
        display: flex;
        align-items: center;
        pointer-events: none;

        .custom-file-label{
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    &__upload{
        label{
            border: none;
            outline-color: transparent;
            &:after{
                display: none;
            }
        }
    }
}
</style>
