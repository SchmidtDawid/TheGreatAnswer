export default {
  state: {
    isLogedIn: false,
  },
  actions: {
    logInUser({ commit }){
      commit('SET_USER_STATE', true)
    },
    logOutUser({ commit }){
      commit('SET_USER_STATE', false)
    }
  },
  mutations: {
    SET_USER_STATE: (state, value) => state.isLogedIn = value,
  },
};
