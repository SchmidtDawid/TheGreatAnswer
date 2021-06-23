import Vue from 'vue';

export default {
  fetchProducts() {
    return Vue.axios.get('/products');
  },
};
