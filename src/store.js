export default {
  state: {
    currWebsite: {},
    loading: false,
  },
  mutations: {
    currWebsite(state, obj) {
      state.currWebsite = obj.state
    },
    loading(state, obj) {
      state.loading = obj.state
    },
  },
  getters: {
    getCurrWebsite(state) {
      return state.currWebsite;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  actions: {
    currWebsite: ({
                    commit
                  }, obj) => {
      return new Promise((resolve, reject) => {
        commit('currWebsite', obj);
        resolve()
      });
    },
    loading: ({
                commit
              }, obj) => {
      return new Promise((resolve, reject) => {
        commit('loading', obj);
        resolve()
      });
    },
  }
}
