import { shallowMount } from '@vue/test-utils';
import TDModal from './index.vue';

describe('Component TDModal', () => {
  let wrapper;

  afterEach(() => wrapper.destroy());

  describe('Mount the component', () => {
    wrapper = shallowMount(TDModal);

    test('should have render component', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
    });

    test('should input exist', () => {
      expect(wrapper.find('input').exists()).toBe(true);
    });
  });
});
