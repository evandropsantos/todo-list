<template>
  <div :class="setClass">
    <TDButton
      class="td-navigation__button--close"
      label="X"
      type="delete"
      @click="$emit('closeMenu', { menu: false })" />

    <img src="@/assets/images/logotipo.png" alt="Logotipo" class="logo" />

    <nav class="td-navigation__list">
      <TDButton
        label="Ver todas as tarefas"
        type="new-task"
        @click="$emit('filterOff', {})" />

      <TDButton
        label="Tarefas Pendentes"
        type="new-task"
        @click="$emit('filterPending', { pending: true })" />

      <TDButton
        label="Tarefas Finalizadas"
        type="new-task"
        @click="$emit('filterDone', { pending: false })" />
    </nav>
  </div>
</template>

<script>
export default {
  components: {
    TDButton: () => import('@/components/TDButton'),
  },
  props: {
    menu: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setClass() {
      return {
        'td-navigation': true,
        'td-navigation_mobile--open': this.menu,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
