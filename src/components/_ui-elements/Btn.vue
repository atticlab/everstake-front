<template>
  <button class="btn"
          @click="onClick">
   <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    onClick: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
