import Vue from 'vue';
import queryString from 'query-string';

export default {
  fetchProducts(params) {
    return Vue.axios.get('/products?' + queryString.stringify(params));
  },
};
