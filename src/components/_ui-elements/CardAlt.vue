<template>
  <div :class="{ 'card-alt': true,
                 'card-alt--pt': isCoinImg }">
   <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'CardAlt',
  props: {
    isCoinImg: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .card-alt {
    box-shadow: $shadow--vague;
    border-radius: 6px;
    background-color: $white;
    padding: 30px;
    display: flex;
    align-items: center;

    &--pt {
      padding-top: 92px;
      position: relative;
    }
  }
</style>
