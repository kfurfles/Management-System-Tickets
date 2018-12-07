import {
  mutations
} from './mutations'
import TicketsClass from '@/core/tickets'

const Tickets = new TicketsClass()
export default {
  async getTickets ({ commit, rootGetters }) {
    if (rootGetters['Users/isAdmin']) {
      const resp = await Tickets.getTickets()
      commit(mutations.SET_TICKETS_LIST, resp)
    } else {
      const resp = await Tickets.getTickets(rootGetters['Users/userId'])
      commit(mutations.SET_TICKETS_LIST, resp)
    }
  },

  async closeTicket ({ dispatch }, payload) {
    try {
      const resp = await Tickets.closeTicket(payload)
      dispatch('Alerts/success', null, { root: true })
      return resp
    } catch (error) {
      console.log(error)
    }
  },

  async reOpenTicket ({ dispatch }, payload) {
    try {
      const resp = await Tickets.reOpenTicket(payload)
      dispatch('Alerts/success', null, { root: true })
      return resp
    } catch (error) {
      console.log(error)
    }
  },

  TicketById ({ commit }, id) {
    return Tickets.getTicketById(id)
  },

  async save ({ dispatch }, payload) {
    try {
      let data = await Tickets.save(payload)
      await dispatch('Alerts/success', null, { root: true })
      return data
    } catch (error) {
      console.error(error)
    }
  }

}
