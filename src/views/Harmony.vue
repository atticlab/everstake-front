<template>
  <CoinLayout :isNoStats="true">
    <template slot="content">
      <div class="coin-info">
        <div class="coin-info__top">
          <CardAlt :isCoinImg="true">
            <div class="coin-logo">
              <div class="coin-logo__inner">
                <img src="~@/assets/img/coins-presentation/harmony.svg" alt="Harmony">
              </div>
            </div>
            <div class="coin-info__container">
              <div class="coin-info__intro">
                <h1 class="coin-info__title">Harmony</h1>
                <p class="coin-info__subtitle">{{ $t('coinPages.harmony') }}</p>
              </div>
            </div>
          </CardAlt>
        </div>

        <CardAlt class="justify-content-center mt-5">
          <div class="ml-form-embed"
               data-account="1521034:h8a8l8v6n5"
               data-form="1384178:c7o7a1">
          </div>
        </CardAlt>
      </div>
    </template>
  </CoinLayout>
</template>

<script>
import CoinLayout from '@/layouts/CoinLayout.vue';
import CardAlt from '@/components/_ui-elements/CardAlt.vue';
import { initMail } from '@/mixins/initMail';

export default {
  name: 'Harmony',
  metaInfo: {
    title: 'Everstake — Staking Service Platform, Staking provider',
    meta: [
      {
        property: 'og:title',
        content: 'Everstake — Staking Service Platform, Staking provider',
      },
    ],
  },
  components: {
    CoinLayout,
    CardAlt,
  },
  mixins: [initMail],
  mounted() {
    this.$_initMail();
  },
};
</script>

<style scoped>

</style>
