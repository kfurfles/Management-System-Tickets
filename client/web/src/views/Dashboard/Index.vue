<template>
    <b-container>
        <b-row class="mt-5">
            <b-col cols="4" class="text-center" v-for="(sts,i) in countStatsTickets" :key="i">
                <s-circle ref="dashboardCircle" v-if="i === 1"
                    :style="computedHeight"
                    :variant="sts.variant" class="Dashboard__info-circles">{{ sts.length }}</s-circle>
                <s-circle v-else
                    :style="computedHeight"
                    :variant="sts.variant" class="Dashboard__info-circles">{{ sts.length }}</s-circle>
                <div class="mt-3">Abertos</div>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                <s-ticket-list :list="ticketList"/>
            </b-col>
        </b-row>
        <s-new-t-button @click="$router.push({ name: 'tickets.create' })"/>
        <!-- <s-button topButton>Novo Chamado</s-button> -->
    </b-container>
</template>

<script>
import SCircle from '@/components/Shared/Circle'
import STicketList from '@/components/Lists/Tickets'
import { mapState, mapGetters } from 'vuex'
import { groupBy } from 'lodash'

export default {
  data: () => ({
    computedHeight: 'height:80px;'
  }),
  components: {
    SCircle,
    STicketList
  },
  computed: {
    ...mapState('Tickets', ['ticketList']),
    ...mapGetters('Tickets', ['statusByColor']),
    countStatsTickets () {
      const agrouped = groupBy(this.ticketList, 'status')
      if (Object.keys(agrouped).length > 0) {
        return this.statusByColor.map(sts => {
          const length = agrouped[sts.status] || []
          return {
            variant: sts.color,
            length: length.length
          }
        })
      } else {
        return [
          {
            variant: 'green',
            length: 0
          },
          {
            variant: 'blue',
            length: 0
          },
          {
            variant: 'gray',
            length: 0
          }
        ]
      }
    }
  },
  methods: {
    setHeightCircle () {
      if (Object.keys(this.$refs).length > 0) {
        this.computedHeight = `height: ${this.$refs.dashboardCircle[0].$el.offsetWidth}px`
      }
    }
  },
  async mounted () {
    this.setHeightCircle()
    await this.$store.dispatch('Tickets/getTickets')
  }
}
</script>

<style lang="scss">
.Dashboard{
    &__info-circles{
        margin: auto;
        width: 80px;
    }
}
</style>
