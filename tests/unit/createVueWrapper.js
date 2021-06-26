import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import universalState from './universalState';
import universalGetters from './universalGetters';
import universalActions from './universalActions';
import universalMutations from './universalMutations';

const createRouter = (options) => {
  return new VueRouter(
    options
  );
};

const createStore = (options) => {
  return new Vuex.Store({
    modules: { ...options.modules },
    state: { ...universalState, ...options.state },
    getters: { ...universalGetters, ...options.getters },
    actions: { ...universalActions, ...options.actions },
    mutations: { ...universalMutations, ...options.mutations },
  });
};

const storeAndRouter = (options) => {
  let store = createStore({});
  let router = createRouter({});
  if (options.store) {
    store = createStore(options.store);
    delete options.store;
  }
  if (options.router) {
    router = createRouter(options.router);
    delete options.router;
  }
  return { store, router };
};

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

export const mountWrapper = (component, options = {}) => {
  const { store, router } = storeAndRouter(options);

  return mount(component, {
    store,
    router,
    localVue,
    ...options
  });
};

export const shallowMountWrapper = (component, options = {}) => {
  const { store, router } = storeAndRouter(options);

  return shallowMount(component, {
    store,
    router,
    localVue,
    ...options
  });
};
