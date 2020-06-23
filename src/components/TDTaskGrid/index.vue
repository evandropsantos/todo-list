<template>
  <div class="td-task-grid">
    <template v-if="tasks.length">
      <TD-task
        :task="task"
        v-for="(task, index) in tasks" :key="task.name"
        @taskStateChanged="$emit('taskStateChanged', index)"
        @taskEdited="$emit('taskEdited', index)"
        @taskDeleted="$emit('taskDeleted', index)" />
    </template>
    <span v-else class="td-task-grid__empty">Nenhuma tarefa existente :)</span>
  </div>
</template>

<script>
export default {
  components: {
    TDTask: () => import('@/components/TDTask'),
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
