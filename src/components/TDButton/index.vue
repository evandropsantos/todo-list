<template>
    <button :class="setClass" v-on="$listeners">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    setClass() {
      return {
        button: true,
        'button--new-task': this.type === 'new-task',
        'button--delete': this.type === 'delete',
        'button--edit': this.type === 'edit',
        'button--submit': this.type === 'submit',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
