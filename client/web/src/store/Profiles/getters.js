export default {
  getProfileById: state => (id) => {
    return state.profiles.find(p => p.id === parseInt(id))
  }
}
