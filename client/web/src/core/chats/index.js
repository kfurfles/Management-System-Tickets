import dbChats from './../firebase/dbChatTickets'
import {
  ApiChamadosActiveByIdPatch,
  ApiChamadosDeactiveByIdPatch } from '@/services/api'
export default class Chats extends dbChats {
  async addNewMessage (payload) {
    let { ticketId, isAdmin } = payload
    let resp = await this.newText(this.collections.chat, this.sanitazeToSaveNew(payload))
    if (isAdmin) {
      await this.newStatusMessage({ ticketId, status: true })
    }
    return resp
  }

  async openedMessage ({ idChamados }) {
    await ApiChamadosDeactiveByIdPatch({ id: idChamados })
  }

  async newStatusMessage ({ ticketId, status }) {
    if (!ticketId) {
      throw Error('param {ticketId} expected')
    }
    try {
      const response = await ApiChamadosActiveByIdPatch({ id: ticketId })
      return response
    } catch (error) {
      return error
    }
  }
  sanitazeToSaveNew ({ ticketId, userId, created, message }) {
    if (!ticketId) {
      throw Error('param {ticketId} expected')
    }
    if (!userId) {
      throw Error('param {userId} expected')
    }
    if (!created) {
      throw Error('param {created} expected')
    }
    if (!message) {
      throw Error('param {message} expected')
    }

    return { ticketId, userId, created, message }
  }
}
