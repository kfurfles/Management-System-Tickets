<template>
    <b-container>
        <s-new-t-button @click="$router.push({ name: 'tickets.create' })"/>

        <b-row class="mt-3">
            <b-col>
                <s-list-status/>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col>
                <s-tickets-list  :filter="filter" :list="ticketList" details />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import SListStatus from '@/components/Shared/ListStatus'
import STicketsList from '@/components/Lists/Tickets'
import { mapState } from 'vuex'

export default {
  components: {
    SListStatus,
    STicketsList
  },
  data: () => ({
    filter: {}
  }),
  computed: {
    ...mapState('Users', ['userData']),
    ...mapState('Tickets', ['ticketList'])
  },
  async mounted () {
    await this.$store.dispatch('Tickets/getTickets')
  }
}
</script>
