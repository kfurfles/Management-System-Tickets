import { ApiCargosGet } from '@/services/api'

export default class Occupations {
  async getList () {
    const { data } = await ApiCargosGet()
    return data.map(occ => this.sanitazeOcc(occ))
  }
  sanitazeOcc ({ idCargos, cargo }) {
    return { idCargos, cargo }
  }
}
