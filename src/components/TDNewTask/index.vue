<template>
  <div class="new-task">
    <input
      v-model="name"
      @keydown.enter="add"
      type="text"
      class="new-task__input"
      placeholder="Cadastrar uma nova tarefa" />
    <TD-button label="Cadastrar" type="submit" @click="add" />
  </div>
</template>

<script>
export default {
  components: {
    TDButton: () => import('../TDButton'),
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    add() {
      if (this.name !== '') {
        this.$emit('taskAdded', { name: this.name });
        this.name = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
