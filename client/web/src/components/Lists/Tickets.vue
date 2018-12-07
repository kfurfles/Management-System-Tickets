<template>
    <b-container fluid class="p-0">
        <b-row>
            <b-col>
                Total de chamados: {{ list.length }}
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col>
                <b>Ultimos Chamados</b>
            </b-col>
        </b-row>
        <b-row v-if="filter">
            <b-col>
                <b-form-checkbox-group
                    v-model="filterValue"
                    :options="optFilters"
                />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <ul class="Tickets__list">
                    <li class="Tickets__item default-border" @click="goToTicket(item)" :class="{'has--alert': item.alert }" v-for="(item,i) in filteredTickets" :key="i">
                        <s-circle :variant="getVariant(item.status)" class="Tickets__circle">{{i}}</s-circle>
                        <div class="Tickets__text-container">
                            <span class="Tickets__title">{{ item.description }}</span>
                            <span class="Tickets__date">Aberto em: <b>{{ item.criado | formatedData }}</b></span>
                        </div>
                        <ul class="Tickets__details" v-if="details && item.informations">
                            <li>
                                <img class="login__image-logo"
                                    :src="item.informations" alt="" srcset="">
                            </li>
                        </ul>
                    </li>
                </ul>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import SCircle from '@/components/Shared/Circle'
import moment from 'moment'

export default {
  props: {
    details: {
      type: Boolean,
      default: false
    },
    filter: {
      default: false
    },
    list: {}
  },
  data: () => ({
    filterValue: [],
    optFilters: [
      { text: 'Aberto', value: 0 },
      { text: 'C/ Resposta', value: 1 },
      { text: 'Fechado', value: 2 }
    ]
  }),
  computed: {
    filteredTickets () {
      let item
      return this.list.filter(i => {
        if (this.filterValue.length === 0) return true
        item = this.filterValue.find(l => l.toString() === i.status)
        return typeof item === 'number'
      })
    }
  },
  components: {
    SCircle
  },
  methods: {
    getVariant (vartiant) {
      if (parseInt(vartiant) === 0) return 'blue'
      if (parseInt(vartiant) === 1) return 'green'
      if (parseInt(vartiant) === 2) return 'gray'
    },
    goToTicket (ticket) {
      this.$router.push({ name: 'chatMessage', params: { id: ticket.idChamados } })
    }
  },
  filters: {
    formatedData (val) {
      return moment(val).format('DD/MM/YYYY')
    }
  }
}
</script>

<style lang="scss">
.Tickets{
    &__list{
        width: 100%;
        padding-top: 20px;
    }
    &__item{
        display: flex;
        position: relative;
        width: calc(100% - 15px);
        margin-left: 15px;
        padding: 4px 14px 4px 40px;
        flex-flow: column;
        cursor: pointer;

        &.has--alert{
            &:before{
                position: absolute;
                top: -5px;
                right: -5px;
                content: '';
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: #fa2c55;
                box-shadow: 1px 2px 7px 1px rgba(250, 44, 85, 0.5);
            }
        }
    }
    &__circle{
        width: 35px;
        height: 35px;
        position: absolute;
        left: -15px;
        top: 50%;
        transform: translateY(-50%);
    }
    &__title{
        line-height: 22px;
        white-space: nowrap;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &__date{
        display: block;
        color: #aaa;
        font-size: .8rem;
        margin-top: -4px;
    }
    &__text-container{
        width: 100%;
    }
}
</style>
