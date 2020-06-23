import { shallowMount } from '@vue/test-utils';
import TDTaskGrid from './index.vue';

describe('Component TDTaskGrid', () => {
  let wrapper;

  afterEach(() => wrapper.destroy());

  describe('Mount the component', () => {
    wrapper = shallowMount(TDTaskGrid, {
      propsData: {
        tasks: [],
      },
    });

    test('should have render component', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
    });

    test('should have prop task is Array', () => {
      expect(wrapper.props('tasks')).toEqual([]);
    });

    test('should have list clean is hidden, empty information visible', () => {
      expect(wrapper.props('tasks')).toHaveLength(0);
      expect(wrapper.find('.td-task-grid__empty').exists()).toBe(true);
    });

    test('should have list item is visible, empty information hidden', () => {
      wrapper = shallowMount(TDTaskGrid, {
        propsData: {
          tasks: [
            { name: 'Limpar a casa', pending: true },
            { name: 'Trocar HD', pending: false },
          ],
        },
      });

      expect(wrapper.props('tasks')).toHaveLength(2);
      expect(wrapper.find('.td-task-grid__empty').exists()).toBe(false);
    });
  });
});
