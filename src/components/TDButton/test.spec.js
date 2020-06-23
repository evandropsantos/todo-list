import { shallowMount } from '@vue/test-utils';
import TBButton from './index.vue';

describe('Component Button', () => {
  let wrapper;

  afterEach(() => wrapper.destroy());

  describe('Mount the component', () => {
    wrapper = shallowMount(TBButton, {
      propsData: {
        label: 'Enviar',
        type: 'new-task',
      },
    });

    test('should have render component', () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.classes()).toContain('button');
    });

    test('should have render pass props class', () => {
      expect(wrapper.classes()).toContain('button--new-task');
    });

    test('should have render pass props class', () => {
      wrapper = shallowMount(TBButton, {
        propsData: {
          label: 'Excluir',
          type: 'delete',
        },
      });

      expect(wrapper.classes()).toContain('button--delete');
    });

    test('should have render pass props class', () => {
      wrapper = shallowMount(TBButton, {
        propsData: {
          label: 'Editar',
          type: 'edit',
        },
      });

      expect(wrapper.classes()).toContain('button--edit');
    });
  });
});
