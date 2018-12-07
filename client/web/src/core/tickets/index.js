import ServiceTickets from './ServiceTickets'

export default class Tickets extends ServiceTickets {
  async save (data) {
    return this.saveTicket(this.sanitazeToSave(data))
  }

  sanitazeToSave ({ status, description, usuarioId, informations, alert, criado, file }) {
    if (!description) {
      throw Error('param {description} expected')
    }
    if (!usuarioId) {
      throw Error('param {usuarioId} expected')
    }
    return {
      status,
      description,
      usuarioId,
      informations,
      alert,
      criado,
      file
    }
  }
  async getTickets (id) {
    return this.getAll({ idUsuario: id })
  }
}
