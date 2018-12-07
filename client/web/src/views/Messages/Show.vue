<template>
    <b-container>
        <div class="ChatMessage__white-block"></div>
        <s-new-t-button v-if="isAdmin && isCloseTicket" @click="reOpenTicket" variant="secondary" v-html="'Reabrir Chamado'"></s-new-t-button>
        <s-new-t-button v-if="isAdmin && !isCloseTicket" @click="closeTicket" variant="secondary" v-html="'Fechar Chamado'"></s-new-t-button>
        <b-row>
            <b-col>
                <div class="ChatMessage__title"> {{ infos.description }}</div>
                <div class="ChatMessage__dta"> Aberto em {{ infos.criado | formatData }} </div>
            </b-col>
        </b-row>
        <b-row class="ChatMessage__messages" :style="maxHeight">
            <b-col>
                <b-row v-for="(msg,i) in formatedList" :key="i">
                    <b-col cols="12">
                        <message-box :variant="msg.userId == userId ? 'green' : 'blue'">
                            <template slot="text">
                                {{ msg.message }}
                            </template>
                            <template slot="time">
                                {{ msg.created | formatData }}
                            </template>

                        </message-box>
                    </b-col>
                    <b-col class="mt-4" v-if="formatedList.length - 1 === i && isCloseTicket">
                      <b-alert show variant="danger" class="text-center">
                        {{  closedMessage }}
                      </b-alert>
                    </b-col>
                </b-row>
                <b-row v-if="!formatedList.length">
                    <b-col class="mt-4" v-if="isCloseTicket">
                      <b-alert show variant="danger" class="text-center">
                        {{  closedMessage }}
                      </b-alert>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <input-message @created="fetchMessages" :disabled="isCloseTicket"/>
        </b-row>
    </b-container>
</template>

<script>
import MessageBox from '@/components/Shared/MessageBox.vue'
import inputMessage from '@/components/Shared/inputMessage.vue'
import moment from 'moment'
import { mapState, mapGetters } from 'vuex'
import { db } from '@/core/firebase/dbChatTickets'
import { uniqBy } from 'lodash'

export default {
  data: () => ({
    list: [],
    infos: {
      idChamados: 0,
      status: 0,
      description: '',
      informations: '',
      alert: 0,
      usuarioId: 1,
      criado: '',
      ultimaAtualizacao: '',
      usuario: null
    }
  }),
  methods: {
    async reOpenTicket () {
      const status = this.formatedList.length > 0 ? '1' : '0'
      await this.$store.dispatch('Tickets/reOpenTicket', { idChamados: this.infos.idChamados, status })
      this.fetchTicket()
    },
    async closeTicket () {
      await this.$store.dispatch('Tickets/closeTicket', this.infos)
      this.fetchTicket()
    },
    hiddeOverFlowBody (state) {
      document.querySelector('body').style.overflowY = state ? 'hidden' : 'scroll'
    },
    async fetchTicket () {
      this.infos = await this.$store.dispatch('Tickets/TicketById', this.$route.params.id)
    },
    async fetchMessages () {
      this.list = []
      db.collection('chat').where('ticketId', '==', this.$route.params.id.toString()).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const item = Object.assign({ id: doc.id }, doc.data())
          item.created = item.created.toDate()
          this.list.push(item)
        })
      })
    }
  },
  components: {
    MessageBox,
    inputMessage
  },
  computed: {
    ...mapState('Chats', ['chatMessageList']),
    ...mapGetters('Users', ['userId']),
    ...mapGetters('Users', ['isAdmin']),
    closedMessage () {
      return this.isCloseTicket ? 'Este chamado foi encerrado' : ''
    },
    isCloseTicket () {
      return parseInt(this.infos.status) === 2
    },
    maxHeight () {
      const w = window
      const d = document
      const e = d.documentElement
      const g = d.getElementsByTagName('body')[0]
      const y = w.innerHeight || e.clientHeight || g.clientHeight

      return { 'max-height': y * 0.755 + 'px' }
    },
    sortedMessages () {
      return this.list.slice(0).sort((left, right) => {
        return moment.utc(left.created).diff(moment.utc(right.created))
      })
    },
    formatedList () {
      return uniqBy(this.sortedMessages, 'id')
    }
  },
  filters: {
    formatData (val) {
      return moment(val).format('DD/MM/YYYY')
    }
  },
  async mounted () {
    this.hiddeOverFlowBody(true)
    await this.fetchTicket()
    this.fetchMessages()
    db.collection('chat')
      .onSnapshot(() => {
        this.fetchMessages()
      })

    if (!this.isAdmin) {
      this.$store.dispatch('Chats/openedMessage', this.infos)
    }
    // this.autorefresh(this.$store.dispatch('Chats/instanceFirebase'))
  },
  beforeDestroy () {
    this.hiddeOverFlowBody(false)
  }
}
</script>

<style lang="scss">
.ChatMessage{
    &__closeMessage{
      border: 1px solid #dc3545;
      padding: 4px 14px;
      border-radius: 20px;
      top: 13px;
      right: 15px;
      color: #dc3545;
      user-select: none;
    }
    &__white-block{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 90px;
        background-color: #fafdff;
        box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.2);
    }
    &__messages{
        overflow: hidden;
        scroll-behavior: smooth;
        overflow-y: scroll;
        margin-top: 10px;
    }
    &__title{
        margin-top: 5px;
        font-size: 15px;
        font-weight: bold;
    }
    &__dta{
        font-size: 12px;
        color: #afaeae;
    }
}
</style>
