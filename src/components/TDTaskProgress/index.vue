<template>
  <div class="td-task-progress">
    <h4 class="td-task-progress__title">Progresso das Tarefas</h4>
    <div class="td-task-progress__box">
      <span class="td-task-progress__value">{{ progress }}%</span>
      <div
        class="td-task-progress__bar"
        :style="{ width: progress + '%' }" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
