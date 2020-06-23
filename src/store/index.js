import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    filters: [],
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    filter(state, payload) {
      const f = state.tasks.filter(e => e.pending === payload.pending);
      state.filters = [...f];
    },
    deleteTask(state, payload) {
      state.tasks.splice(payload, 1);
    },
  },
  actions: {
  },
  modules: {
  },
});
