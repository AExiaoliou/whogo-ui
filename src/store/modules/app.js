export default {
  state: {
    isSideCollapse: true
  },
  mutations: {
    sideCollapse (state) {
      state.isSideCollapse = !state.isSideCollapse
      // console.log(state.isSideCollapse)
    }
  }
}
