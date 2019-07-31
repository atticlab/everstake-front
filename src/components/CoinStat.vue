<template>
  <div class="coin-stat">
    <div class="coin-stat__top">
      <slot name="top"></slot>
    </div>
    <div class="coin-stat__bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoinStat',
};
</script>

<style lang="scss" scoped>
   .coin-stat {
     &__top {
       color: $grey--darker;
       font-size: 30px;
       font-weight: 800;
       line-height: 28px;
       margin-bottom: 20px;
     }

     &__bottom {
       color: $black;
       font-size: 40px;
       line-height: 42px;
     }
   }

   @media (max-width: 1199px) {
     .coin-stat {
       &__top {
         font-size: 24px;
         line-height: 28px;
       }

       &__bottom {
         font-size: 34px;
         line-height: 42px;
       }
     }
   }

  @media (max-width: 991px) {
    .coin-stat {
      &__top {
        margin-bottom: 12px;
      }
    }
  }
</style>
