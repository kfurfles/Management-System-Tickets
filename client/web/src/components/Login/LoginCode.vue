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
                <b-form @submit="$emit('submit')">
                    <b-form-group
                        label="Digite o código de autenticação">
                        <b-form-input
                            id="authCode"
                            type="email"
                            :value="value.authCode"
                            required
                            @input.native="updateData($event)"
                            ref="authCode"
                            placeholder="ex: UN-9954">
                        </b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
        </b-row>
        <b-row class="text-center mt-2">
            <b-col>
                <b-button class="full-width" variant="success">Entrar</b-button>
            </b-col>
        </b-row>
        <b-row class="text-center mt-2">
            <b-col>
                <b-button @click="$emit('has-email-password')" variant="link">Tenho um login e senha</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import updateData from '@/mixins/updateData'

export default {
  mixins: [updateData]
}
</script>
