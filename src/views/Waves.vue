<template>
  <CoinLayout :isNoStats="true">
    <template slot="stats">
      <b-container>
        <b-row>
          <b-col md="3" class="mb-4 mb-lg-0 mx-lg-auto">
            <CoinStat>
              <template slot="top">
                3036899
              </template>
              <template slot="bottom">
                {{ $t('coinPages.totalStake') }}
              </template>
            </CoinStat>
          </b-col>
          <b-col md="3" class="mb-4 mb-lg-0 mx-lg-auto">
            <CoinStat>
              <template slot="top">
                303
              </template>
              <template slot="bottom">
                {{ $t('coinPages.rolls') }}
              </template>
            </CoinStat>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <template slot="content">
      <div class="coin-info">
        <div class="coin-info__top">
          <CardAlt :isCoinImg="true">
            <div class="coin-logo">
              <div class="coin-logo__inner">
                <img src="~@/assets/img/coins-presentation/waves.svg" alt="Waves">
              </div>
            </div>
            <div class="coin-info__container">
              <div class="coin-info__intro">
                <h1 class="coin-info__title">Waves</h1>
                <p class="coin-info__subtitle">{{ $t('coinPages.youCanLease') }}</p>
              </div>

              <div class="coin-info__address">
                <input type="text"
                       class="input input--alt"
                       v-model="wavesAddress"
                       readonly>
                <div class="coin-info__address-info">
                  <div>
                    Waves - {{ $t('coinPages.fee') }} 5%
                  </div>
                  <div>
                    MRT 30%
                  </div>
                </div>
              </div>
            </div>
          </CardAlt>
        </div>

        <CardAlt class="justify-content-center mt-5">
          <div class="ml-form-embed"
               data-account="1521034:h8a8l8v6n5"
               data-form="1343004:a0k2m0">
          </div>
        </CardAlt>
      </div>
    </template>
  </CoinLayout>
</template>

<script>
import CoinLayout from '@/layouts/CoinLayout.vue';
import CoinStat from '@/components/CoinStat.vue';
import CardAlt from '@/components/_ui-elements/CardAlt.vue';
import { initMail } from '@/mixins/initMail';

export default {
  name: 'Waves',
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
    CoinStat,
    CardAlt,
  },
  mixins: [initMail],
  data() {
    return {
      wavesAddress: '3P7JY8d67v9vpV2fq8ZTJPLFPtUmMffL7md',
    };
  },
  mounted() {
    this.$_initMail();
  },
};
</script>

<style scoped>

</style>
