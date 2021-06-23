import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = "https://join-tsh-api-staging.herokuapp.com";
axios.defaults.headers.get['accept'] = 'application/json';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
