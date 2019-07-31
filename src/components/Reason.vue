<template>
  <div class="reason">
    <Card>
      <div class="reason__header">
        <h6 class="title title--small reason__title">
          <slot name="title"></slot>
        </h6>

        <div>
          <slot name="icon"></slot>
        </div>
      </div>
      <p class="reason__description">
        <slot name="description"></slot>
      </p>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/_ui-elements/Card.vue';

export default {
  name: 'Reason',
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
  .card {
   height: 100%;
  }

  .reason {
    box-shadow: $shadow--grey;
    max-width: 376px;
    height: 232px;

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 34px;
      align-items: flex-end;
    }

    &__title {
      text-transform: capitalize;
    }

    &__description {
      color: $grey--blue-light;
    }
  }

  @media (max-width: 1199px) {
    /*A class in the Card component*/
    .card {
      min-height: 172px;
      padding: 15px 22px;
    }

    .reason {
      max-width: 290px;
      max-height: 177px;

      &__header {
        margin-bottom: 14px;
      }

      &__description {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 991px) {
    .card {
      min-height: 202px;
    }

    .reason {
      max-width: 226px;
      max-height: 202px;
    }
  }

  @media (max-width: 767px) {
    .card {
      min-height: 0;
    }

    .reason {
      max-width: 100%;
      max-height: 100%;
      height: auto;
      margin-bottom: 30px;
      width: 100%
    }
  }
</style>
