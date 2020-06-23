import { shallowMount } from '@vue/test-utils';
import TDTask from './index.vue';

describe('Component TDTask', () => {
  let wrapper;

  afterEach(() => wrapper.destroy());

  describe('Mount the component', () => {
    wrapper = shallowMount(TDTask, {
      propsData: {
        task: { name: 'Limpar a casa', pending: true },
      },
    });

    test('should have render component', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
    });

    test('should have a set props pending = true', () => {
      expect(wrapper.classes()).toContain('td-task--pending');
      expect(wrapper.classes()).not.toContain('td-task--done');
    });

    test('should have a set props pending = true', () => {
      wrapper = shallowMount(TDTask, {
        propsData: {
          task: { name: 'Limpar a casa', pending: false },
        },
      });

      expect(wrapper.classes()).toContain('td-task--done');
      expect(wrapper.classes()).not.toContain('td-task--pending');
    });
  });
});
