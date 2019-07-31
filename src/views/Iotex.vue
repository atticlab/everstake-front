<template>
  <CoinLayout :isNoStats="true">
    <template slot="content">
      <div class="coin-info">
        <div class="coin-info__top">
          <CardAlt :isCoinImg="true">
            <div class="coin-logo">
              <div class="coin-logo__inner">
                <img src="~@/assets/img/coins-presentation/iotex.svg"
                     width="80px"
                     alt="Iotex">
              </div>
            </div>

            <div class="coin-info__container text-center">
              <div class="coin-info__intro">
                <h1 class="coin-info__title">Iotex</h1>
                <p class="coin-info__subtitle">{{ $t('coinPages.iotex') }}</p>
              </div>

              <div class="coin-info__address">
                <a href="https://member.iotex.io/delegate/5cfe57253324884dff6c209f/?utm_source=iotexscan"
                   target="_blank"
                   class="coin-info__link break">
                  member.iotex.io/delegate/5cfe57253324884dff6c209f/?utm_source=iotexscan
                </a>

                <div class="coin-info__address-info">
                  <div>
                    {{ $t('coinPages.fee') }} 10%
                  </div>
                </div>
              </div>
            </div>
          </CardAlt>
        </div>

        <CardAlt class="justify-content-center mt-5">
          <div class="ml-form-embed"
               data-account="1521034:h8a8l8v6n5"
               data-form="1365410:e9h8r4">
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
  name: 'Iotex',
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

<style lang="scss" scoped>

</style>
