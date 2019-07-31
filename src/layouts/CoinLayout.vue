<template>
  <div class="coin-layout">
    <b-container>
      <Header :isInternal="true"></Header>
    </b-container>
    <main class="coin-layout__main">
      <div :class="{ 'coin-layout__stats': true,
                     'd-none': isNoStats}">
        <slot name="stats"></slot>
      </div>

      <div class="coin-layout__main-info">
        <b-container>
          <slot name="content"></slot>
        </b-container>
      </div>
    </main>
    <Footer :isInternal="true"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  name: 'CoinLayout',
  components: {
    Header,
    Footer,
  },
  props: {
    isNoStats: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .coin-layout {
    height: 100%;
    display: flex;
    flex-direction: column;

    &__main {
      flex: 1 0 auto;
      background-image: $gradient--blue;
    }

    &__stats {
      padding: 52px 0 45px 0;
      box-shadow: $shadow--black;
      background-color: $white;
      margin-bottom: 154px;
    }
  }

  .main {
    flex: 1 1 auto;
  }
</style>
