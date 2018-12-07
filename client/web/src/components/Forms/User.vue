<template>
    <b-container class="p-0">
        <b-form @submit="emitSubmit">
            <b-row>
                <b-col>
                    Email: {{ value.email }}
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col>
                    <b-form-group
                        label="Nome">
                        <b-form-input
                            id="name"
                            type="text"
                            :value="value.name"
                            required
                            @input.native="updateData()"
                            ref="name"
                            placeholder="Seu Nome">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                        label="Perfil">
                        <b-form-select
                            id="perfil"
                            :value="value.perfil"
                            required
                            @input.native="updateData()"
                            ref="perfil"
                            placeholder="Escolha o Perfil">
                            <option :value="null" selected disabled>Escolha um Perfil</option>
                            <option :value="1">Comum</option>
                            <option :value="2">Administrador</option>
                        </b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                        label="Nova Senha">
                        <b-form-input
                            id="password"
                            type="password"
                            :value="value.password"
                            @input.native="updateData()"
                            ref="password"
                            placeholder="Sua Senha">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                        label="Confirme sua senha">
                        <b-form-input
                            id="confirmPassword"
                            type="password"
                            :value="value.confirmPassword"
                            @input.native="updateData()"
                            ref="confirmPassword"
                            placeholder="Seu Nome">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                        label="Departamento">
                        <b-form-select
                            id="departamento"
                            :value="value.departamento"
                            required
                            @input.native="updateData()"
                            ref="departamento"
                            placeholder="Escolha o Departamento">
                            <option :value="''" selected disabled>Escolha um Departamento</option>
                            <option v-for="opt in departamentoList" :key="opt.idDepartamento" :value="opt.idDepartamento">
                                {{ opt.departamento }}
                            </option>
                        </b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                        label="Cargo">
                        <b-form-select
                            id="cargo"
                            :value="value.cargo"
                            required
                            @input.native="updateData()"
                            ref="cargo"
                            placeholder="Escolha o Cargo">
                            <option :value="''" selected disabled>Escolha um Cargo</option>
                            <option v-for="opt in cargoList" :key="opt.idCargos" :value="opt.idCargos">
                                {{ opt.cargo }}
                            </option>
                        </b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="mt-2 mb-2">
                <b-col>
                    <s-button style="width:100%;" type="submit">
                        {{ update ? 'Atualizar' : 'Criar' }}
                    </s-button>
                </b-col>
            </b-row>
        </b-form>
    </b-container>
</template>

<script>
export default {
  props: {
    value: {},
    profile: {
      type: Boolean,
      default: false
    },
    update: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateData () {
      let obj = {}
      Object.keys(this.value).map(prop => {
        if (this.$refs[prop]) {
          if (prop === 'cargo' || prop === 'departamento') {
            obj[prop] = this.$refs[prop].$el.value || null
          } else {
            obj[prop] = this.$refs[prop].$el.value
          }
        } else {
          obj[prop] = this.value[prop]
        }
      })
      this.$emit('input', obj)
    },
    emitSubmit ($event) {
      $event.preventDefault()
      this.$emit('submit')
    }
  },
  computed: {
    departamentoList () {
      return this.$store.state.Areas.list
    },
    cargoList () {
      return this.$store.state.Occupations.list
    }
  }
}
</script>
