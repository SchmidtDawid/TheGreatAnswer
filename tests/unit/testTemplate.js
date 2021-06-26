import { shallowMountWrapper } from '@/../jest/createVueWrapper';
import Packs from '@/pages/character/Packs';

// jest.mock('vue-i18n');

describe('Packs.vue', () => {
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallowMountWrapper(Packs, {});
  });

  it('is Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
