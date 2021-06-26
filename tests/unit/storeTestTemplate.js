import notifications from '@/store/modules/notifications';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import cloneDeep from 'lodash.clonedeep';

jest.mock('vue-i18n');
jest.mock('@/api/NotificationsApi');

let SET_DEVICE_CONNECTED = jest.spyOn(notifications.mutations, 'SET_DEVICE_CONNECTED');

describe('ItemApi', () => {
  let store;
  beforeEach(() => {
    jest.clearAllMocks();
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store({ modules: { notifications: cloneDeep(notifications) } });
  });

  it('getter test', () => {
    expect(store.getters.isDeviceConnected).toBe(false);
  });

  it('action test', () => {
    expect(store.getters.isDeviceConnected).toBe(false);
    store.dispatch('setDeviceConnected', true);
    expect(SET_DEVICE_CONNECTED).toHaveBeenCalledWith(expect.anything(), true);
    expect(store.getters.isDeviceConnected).toBe(true);
  });

  it('mutation test', () => {

    expect(store.getters.isDeviceConnected).toBe(false);
    store.commit('SET_DEVICE_CONNECTED', true);
    expect(store.getters.isDeviceConnected).toBe(true);
  });

});
