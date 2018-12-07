import {
  ApiChamadosPost,
  ApiChamadosGet,
  ApiChamadosByIdGet,
  ApiChamadosCloseByIdPatch,
  ApiChamadosReopenByIdPatch
} from '@/services/api'
import GetStatusRequest from '@/helpers/request'

import StorageImages from './../firebase/storageImages'

export default class ServiceTickets extends StorageImages {
  async saveTicket (data) {
    const urlImage = await this.saveImageTicket(data.file)
    data['informations'] = urlImage
    let resp = await ApiChamadosPost({ chamado: data })
    return this.responseRequest(resp)
  }

  async saveImageTicket (image = null) {
    if (image) {
      return this.saveImage(image)
    }
  }

  async getAll (params) {
    let resp = await ApiChamadosGet(params)
    return this.responseRequest(resp)
  }

  async closeTicket ({ idChamados }) {
    if (!idChamados) {
      throw Error('param {idChamados} expected')
    }
    return ApiChamadosCloseByIdPatch({ id: idChamados })
  }

  async reOpenTicket ({ idChamados, status }) {
    if (idChamados === undefined) {
      throw Error('param {idChamados} expected')
    }
    if (status === undefined) {
      throw Error('param {status} expected')
    }
    return ApiChamadosReopenByIdPatch({ id: idChamados, status })
  }
  async getTicketById (id) {
    let resp = await ApiChamadosByIdGet({ id })
    return this.responseRequest(resp)
  }

  responseRequest (resp) {
    if (GetStatusRequest(resp)) {
      return resp.data
    } else {
      throw Error('Dados nao retornados do servidor')
    }
  }
}
