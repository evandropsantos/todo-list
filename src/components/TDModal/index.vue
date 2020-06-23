<template>
  <section class="td-modal">
    <div class="td-modal__overlay"></div>
    <TD-box class="td-modal__window">
      <header class="td-modal__header">
         <TD-button label="X" type="delete" @click="$emit('closeModal', false)" />
      </header>

      <input
        type="text"
        class="td-modal__input"
        placeholder="Alterar tarefa"
        v-model="name"
        @keydown.enter="add" />
        <TD-button
          class="td-modal__button"
          label="Atualizar"
          type="submit"
          @click="add" />
    </TD-box>
  </section>
</template>

<script>
export default {
  components: {
    TDButton: () => import('../TDButton'),
    TDBox: () => import('../TDBox'),
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    add() {
      if (this.name !== '') {
        this.$emit('taskUpdated', { name: this.name });
        this.name = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
