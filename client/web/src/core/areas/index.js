import { ApiDepartamentosGet } from '@/services/api'

export default class Areas {
  async getList () {
    const { data } = await ApiDepartamentosGet()
    return data.map(area => this.sanitazeArea(area))
  }
  sanitazeArea ({ idDepartamento, departamento }) {
    return { idDepartamento, departamento }
  }
}
