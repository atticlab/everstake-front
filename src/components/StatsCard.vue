<template>
  <Card>
    <div class="stats-card">
        <div class="stats-card__header">
          <div class="stats-card__sum">
            <slot name="sum"></slot>
          </div>
          <div :class="{ 'stats-card__percent': true,
                         'stats-card__percent--negative': isPercentNegative }">
            {{ percentHandled }}%
          </div>
        </div>

        <div class="stats-card__body">
          <div class="stats-card__sparkline">
           <slot name="sparkline"></slot>
          </div>
        </div>

      <div class="stats-card__footer">
        <h6 class="stats-card__name">
          <slot name="title"></slot>
          <Underline :noDot="true"
                     :mode="'blue'"
                     :size="'middle'"
                     class="mt-1"></Underline>
        </h6>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/_ui-elements/Card.vue';
import Underline from '@/components/_ui-elements/Underline.vue';

export default {
  name: 'StatsCard',
  components: {
    Card,
    Underline,
  },
  props: {
    percent: Number,
  },
  computed: {
    isPercentNegative() {
      return Math.sign(this.percent) === -1;
    },
    percentHandled() {
      if (!this.percent) return 0;

      if (!this.isPercentNegative) {
        return `+${this.percent}`;
      }

      return this.percent;
    },
  },
};
</script>

<style lang="scss" scoped>
  .stats-card {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    &__sum {
      font-size: 36px;
      color: $grey--blueish;
    }

    &__percent {
      color: $green;
      font-size: 21px;

      &--negative {
        color: $red;
      }
    }

    &__body {
      margin-bottom: 12px;
      flex: 1 0 auto;
    }

    &__footer {
      flex-shrink: 0;
    }

    &__name {
      color: $grey--blueish-50;
      font-size: 24px;
    }
  }

  @media (max-width: 1199px) {
    .stats-card {
      &__sum, &__name  {
        font-size: 16px;
      }

      &__percent {
        font-size: 14px;
      }
    }
  }
</style>
