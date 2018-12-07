import UserServices from './ServiceUser'

export default class UserHelpers extends UserServices {
  constructor () {
    super()
    this.id = ''
    this.uidUsuarios = ''
    this.nome = ''
    this.email = ''
    this.cargoId = ''
    this.departamentoId = ''
    this.permissao = ''
    this.isNewUser = ''
    this.picture = ''
  }

  fireBaseObjToModel (obj) {
    const {
      user: { uid },
      additionalUserInfo: {
        profile: { email, name, picture = '' } }
    } = obj
    return { uid, email, name, picture }
  }

  sanitazeToSaveNew (userData) {
    const { uid, email, name, picture } = this.fireBaseObjToModel(userData)
    return {
      nome: name,
      email: email,
      cargoId: 1,
      uidUsuarios: uid,
      departamentoId: 1,
      picture: picture,
      permissao: 1
    }
  }

  sanitazeAutoSign (userData) {
    const { uid, email, displayName: name, photoURL: picture } = userData
    return { uid, email, name, picture }
  }
  objToModel ({ idUsuarios = '', uidUsuarios = '', nome, email, cargoId, departamentoId, permissao, picture = '' }) {
    this.id = idUsuarios
    this.uidUsuarios = uidUsuarios
    this.nome = nome
    this.email = email
    this.cargoId = cargoId
    this.departamentoId = departamentoId
    this.permissao = permissao
    this.picture = picture
    return this.info()
  }
  info () {
    return {
      id: this.id,
      uidUsuarios: this.uidUsuarios,
      nome: this.nome,
      email: this.email,
      cargoId: this.cargoId,
      departamentoId: this.departamentoId,
      permissao: this.permissao,
      picture: this.picture
    }
  }
}
