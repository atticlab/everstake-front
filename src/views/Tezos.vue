<template>
  <CoinLayout>
    <template slot="stats">
      <b-container>
        <b-row>
          <b-col md="6" lg="3" class="mb-4 mb-lg-0">
            <CoinStat>
              <template slot="top">
                {{ totalStakeInt }}.
                <span class="fraction">{{ totalStakeFraction }}</span>
              </template>
              <template slot="bottom">
                {{ $t('coinPages.totalStake') }}
              </template>
            </CoinStat>
          </b-col>
          <b-col md="6" lg="3" class="mb-4 mb-lg-0">
            <CoinStat>
              <template slot="top">
                {{ rolls }}
              </template>
              <template slot="bottom">
                {{ $t('coinPages.rolls') }}
              </template>
            </CoinStat>
          </b-col>
          <b-col md="6" lg="3" class="mb-4 mb-md-0">
            <CoinStat>
              <template slot="top">
                {{ fee }}
              </template>
              <template slot="bottom">
                {{ $t('coinPages.fee') }}
              </template>
            </CoinStat>
          </b-col>
          <b-col md="6" lg="3">
            <CoinStat>
              <template slot="top">
               {{ rollsShare }}%
              </template>
              <template slot="bottom">
                {{ $t('coinPages.tezos.rollsShare') }}
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
                <img src="~@/assets/img/coins-presentation/tezos.svg" alt="Tezos">
              </div>
            </div>
            <div class="coin-info__container">
              <div class="coin-info__intro">
                <h1 class="coin-info__title">Tezos</h1>
                <p class="coin-info__subtitle">{{ $t('coinPages.youCanLease') }}</p>
              </div>

              <div class="coin-info__address">
                <input type="text"
                       class="input input--alt"
                       v-model="tezosAddress"
                       readonly>
                <div class="coin-info__address-info">
                  <div>
                    {{ $t('coinPages.minDelegation') }}10
                    <img src="~@/assets/img/icons/tezos.svg" class="tezos-icon" alt="Tezos">
                  </div>
                  <div>
                    {{ $t('coinPages.tezos.payoutsFrom') }} 0.001
                    <img src="~@/assets/img/icons/tezos.svg" class="tezos-icon" alt="Tezos">
                  </div>
                </div>
              </div>
            </div>
          </CardAlt>
        </div>

        <div class="coin-info__bottom">
          <b-row>
            <b-col lg="6 mb-4 mb-lg-0">
              <LinkCard :linkAddress="'https://t.me/everstake_bot'">
                <template slot="link-txt">
                  {{ $t('coinPages.tezos.tgBot') }}
                </template>
              </LinkCard>
            </b-col>
            <b-col lg="6">
              <LinkCard :linkAddress="'https://medium.com/everstake/how-to-delegate-xtz-using-tezbox-bff4ff4906c8'">
                <template slot="link-txt">
                  {{ $t('coinPages.tezos.howToDelegateTezos') }}
                </template>
              </LinkCard>
            </b-col>
          </b-row>
        </div>

        <CardAlt class="justify-content-center mt-5">
          <div class="ml-form-embed"
               data-account="1521034:h8a8l8v6n5"
               data-form="1342752:c6n8u5">
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
import LinkCard from '@/components/LinkCard.vue';
import { initMail } from '@/mixins/initMail';

export default {
  name: 'Tezos',
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
    LinkCard,
  },
  mixins: [initMail],
  data() {
    return {
      tezosAddress: 'tz1MXFrtZoaXckE41bjUCSjAjAap3AFDSr3N',
      totalStake: null,
      fee: '10%',
      totalStakePrecision: 1000000,
      precision: 6,
      totalRolls: null,
    };
  },
  computed: {
    totalStakeParsed() {
      if (!this.totalStake) return 0;
      return this.totalStake.data[0] / this.totalStakePrecision;
    },
    totalStakeInt() {
      if (!this.totalStakeParsed) return 0;
      return this.totalStakeParsed.toString().split('.')[0];
    },
    totalStakeFraction() {
      if (!this.totalStakeParsed) return 0;
      return this.totalStakeParsed.toString().split('.')[1];
    },
    rolls() {
      if (!this.totalStake) return 0;
      return Math.floor(this.totalStake.data[0].slice(0, -1 * this.precision) / 10000);
    },
    yesterday() {
      const now = new Date();
      const yesterday = new Date(now.setDate(now.getDate() - 1));
      const y = yesterday.getFullYear();
      const m = yesterday.getMonth() + 1;
      const d = yesterday.getDate();
      const mm = m < 10 ? `0${m}` : m;
      const dd = d < 10 ? `0${d}` : d;

      return `${y}-${mm}-${dd}`;
    },
    rollsShare() {
      if (!(this.rolls && this.totalRolls)) return 0;
      return (this.rolls / (this.totalRolls / 100)).toFixed(5);
    },
  },
  methods: {
    async getTezosTotalStake() {
      try {
        this.totalStake = await this.$tezosApi.getTezosTotalStake();
      } catch (err) {
        console.error(err);
      }
    },

    async getTezosTotalRolls(yesterday) {
      try {
        const resp = await this.$tezosApi.getTezosTotalRolls(yesterday);
        const bal = resp.data.staking_balances.slice(0, -1 * this.precision);
        this.totalRolls = Math.floor(bal / 10000);
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.getTezosTotalStake();
    if (this.yesterday) {
      this.getTezosTotalRolls(this.yesterday);
    }
    this.$_initMail();
  },
};
</script>

<style lang="scss" scoped>
  .fraction {
    font-size: 16px;
  }


  .tezos-icon {
    max-height: 18px;
    max-width: 14px;
  }
</style>
