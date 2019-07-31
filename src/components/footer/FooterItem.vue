<template>
  <div class="footer-item">
    <h4 class="title title--small title--violet footer-item__title">
      <slot name="title"></slot>
      <Underline :size="'small'"
                 :mode="'violet'"
                 class="mt-2"
                 v-if="!isNoTitle">
      </Underline>
    </h4>
    <div class="footer-item__body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Underline from '@/components/_ui-elements/Underline.vue';

export default {
  name: 'FooterItem',
  components: {
    Underline,
  },
  props: {
    isNoTitle: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .footer-item {
    max-width: 272px;

    &__title {
      margin-bottom: 34px;
      font-size: 30px;
    }

    &__body {
      color: $white;
      font-size: 17px;
      line-height: 28px;
      max-width: 272px;
    }
  }

  @media (max-width: 767px) {
    .footer-item {
      &__title {
        font-size: 20px;
      }

      &__body {
        font-size: 16px;
      }
    }
  }
</style>
