<template>
   <div class="card"
        :style="{ 'max-width': maxWidth }">
     <slot></slot>
   </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    maxWidth: String,
  },
};
</script>

<style lang="scss" scoped>
 .card {
   width: 100%;
   border-radius: 6px;
   background-color: $white;
   padding: 26px 22px;
 }

  @media (max-width: 991px) {
    .card {
      padding: 20px 22px;
    }
  }
</style>
