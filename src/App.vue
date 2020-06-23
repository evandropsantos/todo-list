<template>
  <div id="app">
    <TD-navigation
      :menu="mobile"
      @filterDone="filter"
      @filterPending="filter"
      @filterOff="filter"
      @closeMenu="menuMobile"/>

    <article class="container">
      <TD-button
        class="menu-mobile"
        label="Menu"
        type="edit"
        @click="mobile = true" />

      <TD-box>
        <TD-new-task @taskAdded="taskAdded" />
      </TD-box>

      <TD-task-progress :progress="progress" />

      <TD-box>
        <TD-task-grid
          :tasks="tasks"
          @taskStateChanged="toggleTaskState"
          @taskEdited="editTask"
          @taskDeleted="deleteTask" />
      </TD-box>
    </article>

    <TD-modal
      @taskUpdated="updateTask"
      @closeModal="modal = false"
      v-show="modal" />
  </div>
</template>

<script>
export default {
  components: {
    TDButton: () => import('@/components/TDButton'),
    TDBox: () => import('@/components/TDBox'),
    TDNavigation: () => import('@/components/TDNavigation'),
    TDNewTask: () => import('@/components/TDNewTask'),
    TDTaskGrid: () => import('@/components/TDTaskGrid'),
    TDModal: () => import('@/components/TDModal'),
    TDTaskProgress: () => import('@/components/TDTaskProgress'),
  },
  data() {
    return {
      index: null,
      modal: false,
      mobile: false,
    };
  },
  computed: {
    filters() {
      return this.$store.state.filters;
    },
    tasks() {
      if (this.filters.length) {
        return this.filters;
      }

      return this.$store.state.tasks;
    },
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter(t => !t.pending).length;

      return Math.round(done / total * 100) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
      },
    },
  },
  methods: {
    taskAdded(task) {
      const sameName = t => t.name === task.name;
      const realyNew = this.tasks.filter(sameName).length === 0;

      if (realyNew) {
        this.$store.commit('addTask', {
          name: task.name,
          pending: true,
          date: new Date(),
        });
      }
    },
    toggleTaskState(index) {
      this.tasks[index].pending = !this.tasks[index].pending;
    },
    deleteTask(index) {
      this.$store.commit('deleteTask', index);
    },
    editTask(index) {
      this.index = index;
      this.modal = true;
    },
    updateTask(task) {
      this.tasks[this.index].name = task.name;
      this.modal = false;
    },
    filter(status) {
      this.$store.commit('filter', {
        ...status,
      });

      this.mobile = false;
    },
    menuMobile() {
      this.mobile = false;
    },
  },
  created() {
    const json = localStorage.getItem('tasks');
    const array = JSON.parse(json);

    this.$store.state.tasks = Array.isArray(array) ? array : [];
  },
};
</script>

<style lang="scss">
  @import './style.scss';
</style>
