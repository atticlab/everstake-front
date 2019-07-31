<template>
  <CoinLayout>
    <template slot="stats">
      <b-container>
        <b-row>
          <b-col md="6" lg="3" offset-lg="2" class="mb-4 mb-lg-0">
            <CoinStat>
              <template slot="top">
                {{ upTimeOverBlocks }}%
              </template>
              <template slot="bottom">
                {{ $t('coinPages.uptime') }}
              </template>
            </CoinStat>
          </b-col>
          <b-col md="6" lg="3" class="mb-4 mb-lg-0">
            <CoinStat>
              <template slot="top">
                {{ upTimeMissedBlocks }}%
              </template>
              <template slot="bottom">
                {{ $t('coinPages.cosmos.missedBlocks') }}
              </template>
            </CoinStat>
          </b-col>
          <b-col md="6" lg="3" class="mb-4 mb-md-0">
            <CoinStat>
              <template slot="top">
                {{ tokens }}
              </template>
              <template slot="bottom">
                {{ $t('coinPages.total') }}
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
                <img src="~@/assets/img/coins-presentation/cosmos.svg" alt="Cosmos">
              </div>
            </div>
            <div class="coin-info__container">
              <div class="coin-info__intro">
                <h1 class="coin-info__title">Cosmos</h1>
                <p class="coin-info__subtitle">{{ $t('coinPages.cosmos.youCanDelegate') }}</p>
              </div>

              <div class="coin-info__address">
                <input type="text"
                       class="input input--alt input--alt--cosmos"
                       v-model="cosmosAddress"
                       readonly>
                <div class="coin-info__address-info">
                  <div>
                    {{ $t('coinPages.fee') }} 3%
                  </div>
                </div>
              </div>
            </div>
          </CardAlt>
        </div>

        <CardAlt class="justify-content-center mt-5">
          <div class="ml-form-embed"
               data-account="1521034:h8a8l8v6n5"
               data-form="1343006:k0y1w3">
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
  name: 'Cosmos',
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
      cosmosAddress: 'cosmosvaloper1tflk30mq5vgqjdly92kkhhq3raev2hnz6eete3',
      stakingData: null,
    };
  },
  computed: {
    everstakeCosmos() {
      if (!this.stakingData) return null;

      return this.stakingData.data.filter(item => item.moniker === 'Everstake')[0];
    },
    upTimeOverBlocks() {
      if (!this.everstakeCosmos) return 0;

      return this.everstakeCosmos.uptime.over_blocks;
    },
    upTimeMissedBlocks() {
      if (!this.everstakeCosmos) return 0;

      return this.everstakeCosmos.uptime.missed_blocks;
    },
    commission() {
      if (!this.everstakeCosmos) return 0;
      return Number(this.everstakeCosmos.rate).toPrecision(2);
    },
    tokens() {
      if (!this.everstakeCosmos) return 0;
      return this.everstakeCosmos.tokens;
    },
  },
  methods: {
    async getCosmosStakingData() {
      try {
        this.stakingData = await this.$cosmosApi.getCosmosStakingData();
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.getCosmosStakingData();
    this.$_initMail();
  },
};
</script>

<style lang="scss" scoped>
  .input--alt--cosmos {
    font-size: 21px;
  }

  @media (max-width: 767px) {
    .input--alt--cosmos {
      font-size: 16px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
