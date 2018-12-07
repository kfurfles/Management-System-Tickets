import { mutations } from './mutations'
import OccupationsClass from '@/core/occupations'
const Occupations = new OccupationsClass()

export default {
  async getListOccupations ({ commit }) {
    commit(mutations.SET_OCCUPATION, await Occupations.getList())
  }
}
