import {
  ApiUsuariosGet,
  ApiUsuariosEmailGet,
  ApiUsuariosByIdGet,
  ApiUsuariosPost,
  ApiUsuariosByIdPut,
  ApiUsuariosByIdDelete
} from '@/services/api'
import * as firebase from 'firebase'
import GetStatusRequest from '@/helpers/request'

export default class ServiceUser {
  constructor () {
    this.firebase = firebase
  }
  async save (user) {
    const resp = await ApiUsuariosPost({ user })
    return this.responseRequest(resp)
  }

  async update (user) {
    const { id, name: nome, cargo: cargoId, departamento: departamentoId, email, perfil: permissao } = user
    const resp = await ApiUsuariosByIdPut({ id: id, user: { idUsuarios: id, nome, email, cargoId, departamentoId, permissao } })
    return this.responseRequest(resp)
  }

  async delete (id) {
    const resp = await ApiUsuariosByIdDelete({ id })
    return this.responseRequest(resp)
  }

  responseRequest (resp) {
    if (GetStatusRequest(resp)) {
      return resp.data
    } else {
      throw Error('Dados nao retornados do servidor')
    }
  }

  async getUserFirebaseByEmail ({ email }) {
    console.log(email)
    console.log(this.firebase)
    // this.firebase.auth().getUserByEmail(email)
    // .then(function(userRecord) {
    //   // See the UserRecord reference doc for the contents of userRecord.
    //   console.log("Successfully fetched user data:", userRecord.toJSON());
    // })
    // .catch(function(error) {
    //   console.log("Error fetching user data:", error);
    // });
  }

  async getUserById (id) {
    const resp = await ApiUsuariosByIdGet({ id })
    return this.responseRequest(resp)
  }

  async getUserByEmail (email) {
    const resp = await ApiUsuariosEmailGet({ email })
    return this.responseRequest(resp)
  }

  async getAllUsers () {
    const { data } = await ApiUsuariosGet()
    return data
  }
}
