import Vue from 'vue';
import ProductsApi from '@/api/ProductsApi';

export default {
  state: {
    products: {},
  },
  getters: {
    getProducts: (state) => state.products,
  },
  actions: {
    async fetchProducts({ commit }, payload) {
      const response = await ProductsApi.fetchProducts();
      if (response.data?.items) {
        commit('SET_PRODUCTS', response.data.items)
      }
    }
  },
  mutations: {
    SET_PRODUCTS: (state, products) => state.products = products,
  },
};
