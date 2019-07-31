<template>
  <CoinLayout>
    <template slot="stats">
      <b-container>
        <b-row>
          <b-col md="6" lg="3" offset-lg="2" class="mb-4 mb-lg-0">
            <CoinStat>
              <template slot="top">
                {{ uptime }}%
              </template>
              <template slot="bottom">
                {{ $t('coinPages.uptime') }}
              </template>
            </CoinStat>
          </b-col>
          <b-col md="6" lg="3" class="mb-4 mb-lg-0">
            <CoinStat>
              <template slot="top">
                {{ uptimeTotalBlock }}
              </template>
              <template slot="bottom">
                {{ $t('coinPages.irisnet.totalBlocks') }}
              </template>
            </CoinStat>
          </b-col>
          <b-col md="6" lg="3" class="mb-4 mb-md-0">
            <CoinStat>
              <template slot="top">
                {{ commission }}%
              </template>
              <template slot="bottom">
                {{ $t('coinPages.fee') }}
              </template>
            </CoinStat>
          </b-col>
          <!--<b-col md="6" lg="3">-->
            <!--<CoinStat>-->
              <!--<template slot="top">-->
                <!--{{ selfBond }}-->
              <!--</template>-->
              <!--<template slot="bottom">-->
                <!--{{ $t('coinPages.irisnet.selfBond') }}-->
              <!--</template>-->
            <!--</CoinStat>-->
          <!--</b-col>-->
        </b-row>
      </b-container>
    </template>

    <template slot="content">
      <div class="coin-info">
        <div class="coin-info__top">
          <CardAlt :isCoinImg="true">
            <div class="coin-logo">
              <div class="coin-logo__inner">
                <img src="~@/assets/img/coins-presentation/irisnet.svg" alt="Irisnet">
              </div>
            </div>
            <div class="coin-info__container">
              <div class="coin-info__intro">
                <h1 class="coin-info__title">Irisnet</h1>
                <p class="coin-info__subtitle">{{ $t('coinPages.irisnet.delegate') }}</p>
              </div>

              <div class="coin-info__address">
                <input type="text"
                       class="input input--alt"
                       v-model="irisnetAddress"
                       readonly>
              </div>
            </div>
          </CardAlt>
        </div>

        <CardAlt class="justify-content-center mt-5">
          <div class="ml-form-embed"
               data-account="1521034:h8a8l8v6n5"
               data-form="1343022:w2a5o9">
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
  name: 'Irisnet',
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
      irisnetAddress: 'iva1as5xxstv0kaay3dppuwau0mvyrxcqkad4vfzya',
      uptimeData: null,
      commissionData: null,
      acc: null,
    };
  },
  computed: {
    uptime() {
      if (!this.uptimeData) return 100;
      return this.uptimeData.data.up_time;
    },
    uptimeTotalBlock() {
      if (!this.uptimeData) return 100;
      return this.uptimeData.data.total_block;
    },
    commission() {
      if (!this.commissionData) return 10;
      return this.commissionData.data.validator.rate * 100;
    },
    selfBond() {
      if (!this.acc) return 0;
      return this.acc.data.deposits.amount;
    },
  },
  methods: {
    async getIrisnetUptime() {
      try {
        this.uptimeData = await this.$irisnetApi.getIrisnetUptime();
      } catch (err) {
        console.error(err);
      }
    },
    async getIrisnetRate() {
      try {
        this.commissionData = await this.$irisnetApi.getIrisnetRate();
      } catch (err) {
        console.error(err);
      }
    },
    async getIrisnetAccount() {
      try {
        this.acc = await this.$irisnetApi.getIrisnetAccount();
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.getIrisnetUptime();
    this.getIrisnetRate();
    this.getIrisnetAccount();
    this.$_initMail();
  },
};
</script>

<style lang="scss" scoped>

</style>
