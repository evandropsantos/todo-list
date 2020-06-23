import { shallowMount } from '@vue/test-utils';
import TDNavigation from './index.vue';

describe('Component TDNavigation', () => {
  let wrapper;

  afterEach(() => wrapper.destroy());

  describe('Mount the component', () => {
    wrapper = shallowMount(TDNavigation);

    test('should have render component', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
    });
  });
});
