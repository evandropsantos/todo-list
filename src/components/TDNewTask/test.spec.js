import { shallowMount } from '@vue/test-utils';
import TDNewTask from './index.vue';

describe('Component TDNewTask', () => {
  let wrapper;

  afterEach(() => wrapper.destroy());

  describe('Mount the component', () => {
    wrapper = shallowMount(TDNewTask);

    test('should have render component', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
    });

    test('should input exist', () => {
      expect(wrapper.find('input').exists()).toBe(true);
    });
  });
});
