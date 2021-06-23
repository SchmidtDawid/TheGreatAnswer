import ProductsApi from '@/api/ProductsApi';

export default {
  state: {
    items: {},
    pagination: {},
    params: {
      search: null,
      limit: 8,
      page: 1,
      active: null,
      promo: null,
    }
  },
  actions: {
    async fetchProducts({ commit, state }) {
      const response = await ProductsApi.fetchProducts(state.params);
      if (response.data) {
        commit('SET_ITEMS', response.data.items);
        commit('SET_PAGINATION', { ...response.data.links, ...response.data.meta });
      }
    },
    setParam({ commit, state }, payload) {
      commit('SET_PARAM', payload)
    }
  },
  mutations: {
    SET_ITEMS: (state, products) => state.items = products,
    SET_PAGINATION: (state, pagination) => state.pagination = pagination,
    SET_PARAM: (state, param) => state.params[param.name] = param.value,
  },
};
