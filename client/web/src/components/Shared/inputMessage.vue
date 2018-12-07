<template>
    <b-container class="inputMessage">
        <form @submit.prevent="submit" :class="{'disabled': disabled}">
        <b-row>
            <b-col>
                <textarea :placeholder="placeholder" class="inputMessage__input" v-model="inputMessage" name="" id="" />
            </b-col>
            <b-col cols="2">
                <button class="inputMessage__button" type="submit">
                    <svgicon icon="icn_paper-plane" width="22" height="22" color="#3f8df7"></svgicon>
                </button>
            </b-col>
        </b-row>
        </form>
    </b-container>
</template>

<script>
import '@/compiled-icons/icn_paper-plane'
import { mapGetters } from 'vuex'
export default {
  props: {
    disabled: {
      default: true
    }
  },
  data: () => ({
    inputMessage: ''
  }),
  computed: {
    ...mapGetters('Users', ['userId']),
    ...mapGetters('Users', ['isAdmin']),
    placeholder () {
      if (this.disabled) {
        return 'Este chamado foi fechado'
      } else {
        return 'Digite sua mensagem'
      }
    }
  },
  methods: {
    async submit ($event) {
      if (this.disabled) return false
      if (this.inputMessage.length > 0) {
        await this.$store.dispatch('Chats/addNewMessage', {
          ticketId: this.$route.params.id.toString(),
          userId: this.userId,
          isAdmin: this.isAdmin,
          created: new Date(),
          message: this.inputMessage
        })
        this.inputMessage = ''
        this.$emit('created')
      }
    }
  }
}
</script>

<style lang="scss">
.disabled{
    user-select: none;
    svg path {
        fill: #babaca
    }
    pointer-events: none;
}
.inputMessage{
    z-index: 10;
    background-color: #fafdff;
    position: fixed;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-box-shadow: -1px -1px 7px rgba(0, 0, 0, 0.2);
    box-shadow: -1px -1px 7px rgba(0, 0, 0, 0.2);

    &__input{
        width: 100%;
        resize: none;
        overflow: hidden;
        height: 35px;
        max-height: 100px;
        padding-top: 5px;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    &__button{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-content: center;
    }
}
</style>
