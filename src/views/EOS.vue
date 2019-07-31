<template>
  <CoinLayout>
    <template slot="stats">
      <b-container>
        <b-row>
          <b-col class="mb-4 mb-lg-0">
            <CoinStat class="text-center">
              <template slot="top">
               {{ currentBpComputed }}
              </template>
              <template slot="bottom">
                {{ $t('coinPages.eos.currentBp') }}
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
                <img src="~@/assets/img/coins-presentation/eos.svg" alt="IOST">
              </div>
            </div>
            <div class="coin-info__container text-center">
              <div class="coin-info__intro">
                <h1 class="coin-info__title">EOS</h1>
                <p class="coin-info__subtitle">{{ $t('coinPages.eos.youCanLease') }}</p>
              </div>

              <div class="coin-info__address">
                <a href="https://rex.atticlab.net/"
                   target="_blank"
                   class="coin-info__link break">
                  {{ $t('coinPages.eos.tryRex') }}
                </a>
              </div>
            </div>
          </CardAlt>
        </div>

        <div class="coin-info__bottom">
          <b-row>
            <b-col>
              <LinkCard :linkAddress="'https://medium.com/everstake/how-to-earn-eos-by-using-rex-d0eabe47131d'"
                        :textCenter="true">
                <template slot="link-txt">
                  {{ $t('coinPages.eos.howToEarn') }}
                </template>
              </LinkCard>
            </b-col>
          </b-row>
        </div>

        <CardAlt class="justify-content-center mt-5">
          <div class="ml-form-embed"
               data-account="1521034:h8a8l8v6n5"
               data-form="1343014:m2e1x6">
          </div>
        </CardAlt>
      </div>
    </template>
  </CoinLayout>
</template>

<script>
import CoinLayout from '@/layouts/CoinLayout.vue';
import CardAlt from '@/components/_ui-elements/CardAlt.vue';
import LinkCard from '@/components/LinkCard.vue';
import CoinStat from '@/components/CoinStat.vue';
import { initMail } from '@/mixins/initMail';

export default {
  name: 'EOS',
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
    LinkCard,
    CoinStat,
  },
  mixins: [initMail],
  data() {
    return {
      currentBp: null,
      currentEosPrice: 0,
      eosStats: null,
      interval: null,
    };
  },
  computed: {
    currentBpComputed() {
      if (!(this.currentBp && this.currentBp.data)) return '';

      return this.currentBp.data.head_block_producer;
    },
    // eosMarketCap() {
    //   if (!(this.eosStats && this.eosStats.data)) return '';
    //
    //   return this.eosStats.data.EOS.max_supply * this.eosStats.data.EOS.eos_price;
    // },
  },
  methods: {
    async getCurrentBp() {
      try {
        this.currentBp = await this.$eosApi.getCurrentBp();
      } catch (err) {
        console.error(err);
      }
    },
    // async getEosPrice() {
    //   try {
    //     this.currentEosPrice = await this.$eosApi.getEosPrice();
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
    // async requestEosStats() {
    //   try {
    //     this.eosStats = await this.$eosApi.requestEosStats();
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
  },
  mounted() {
    this.getCurrentBp();
    this.interval = setInterval(() => {
      this.getCurrentBp();
    }, 5000);
    // this.getEosPrice();
    // this.requestEosStats();
    this.$_initMail();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>

</style>
