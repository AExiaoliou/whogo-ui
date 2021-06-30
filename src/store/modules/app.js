export default {
  state: {
    isSideCollapse: false,
    username: 'admin'
  },
  mutations: {
    sideCollapse (state) {
      state.isSideCollapse = !state.isSideCollapse
      // console.log(state.isSideCollapse)
    },
    changeUsername (state, username) {
      state.username = username
    }
  }
}
