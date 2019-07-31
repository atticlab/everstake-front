<template>
  <li class="layer" :data-depth="depth">
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    depth: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .layer {
    width: 100%;
  }
</style>
