export default {
  state: {
    isSideCollapse: false
  },
  mutations: {
    sideCollapse (state) {
      state.isSideCollapse = !state.isSideCollapse
      // console.log(state.isSideCollapse)
    }
  }
}
