import { mutations } from './mutations'
import AreaClass from '@/core/areas'
const Area = new AreaClass()

export default {
  async getListAreas ({ commit }) {
    commit(mutations.SET_AREAS, await Area.getList())
  }
}
