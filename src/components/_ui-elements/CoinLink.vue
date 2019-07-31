<template>
  <div class="coin-link">
    <div class="coin-logo coin-link__coin-logo">
      <div class="coin-logo__inner">
        <img :src="img" :alt="name">
      </div>
    </div>
    <router-link :to="{ name: routerLinkName }"
                 class="coin-link__name">
      {{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CoinLink',
  props: {
    img: {
      default: 'Coin',
    },
    name: {
      default: 'Coin',
    },
    routerLinkName: {
      default: 'staking',
    },
  },
};
</script>

<style lang="scss" scoped>
  .coin-link {
    text-align: center;
    margin-top: 74px;

    &__coin-logo {
      position: relative;
      top: 0;
      left: 0;
      transform: translateX(0);
      margin: 0 auto 20px;
    }

    &__name {
      color: $black;
      font-size: 48px;
      font-weight: 700;
      transition: color 0.2s;

      &:hover {
        color: $blue--bright;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 991px) {
    .coin-link {
      margin-bottom: 0;
      &__name {
        font-size: 30px;
      }
    }
  }
</style>
