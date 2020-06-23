<template>
    <p :class="setClass" @click="$emit('taskStateChanged', task)">
      <span class="td-task__name">
        {{ task.name }}
      </span>
      <strong class="td-task__date">{{ task.date | date }}</strong>
      <span class="td-task__buttons">
        <TD-button label="Editar" type="edit" @click.stop="$emit('taskEdited', task)" />
        <TD-button label="Excluir" type="delete" @click.stop="$emit('taskDeleted', task)" />
      </span>
    </p>
</template>

<script>
export default {
  components: {
    TDButton: () => import('@/components/TDButton'),
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  filters: {
    date(value) {
      const date = new Date(value);
      const day = (`0${date.getDate()}`).slice(-2);
      const month = (`0${date.getMonth() + 1}`).slice(-2);
      const hours = (`0${date.getHours()}`).slice(-2);
      const min = (`0${date.getMinutes()}`).slice(-2);

      return `${day}/${month}/${date.getFullYear()} - ${hours}:${min}`;
    },
  },
  computed: {
    setClass() {
      return {
        'td-task': true,
        'td-task--pending': this.task.pending,
        'td-task--done': !this.task.pending,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
