<template>
  <section class="statistics">
    <div class="statistics__wrapper">
      <b-container>
        <h2 class="title title--white">
          {{ $t('home.everstakeStats') }}
          <Underline :mode="'grey'"></Underline>
        </h2>

        <div class="charts">
          <div class="charts__row">
            <StatsCard class="charts__card"
                       :percent="assetsInControlPercent">
              <template slot="sum">
                $ {{ totalAssetsInControl }}
              </template>
              <template slot="sparkline">
                <Sparkline :data="assetsInControl"
                           :isValueUSD="true"></Sparkline>
              </template>
              <template slot="title">
                {{ $t('home.assetsStaked') }}
              </template>
            </StatsCard>
            <StatsCard class="charts__card"
                       :percent="blocksProducedPercent">
              <template slot="sum">
                {{ totalBlocksProduced }}
              </template>
              <template slot="sparkline">
                <Sparkline :data="blocksProduced"
                           :isValueUSD="false"></Sparkline>
              </template>
              <template slot="title">
                {{ $t('home.blocksProduced') }}
              </template>
            </StatsCard>
            <StatsCard class="charts__card"
                       :percent="rewardsPaidPercent">
              <template slot="sum">
                $ {{ totalRewardsPaid }}
              </template>
              <template slot="sparkline">
                <Sparkline :data="rewardsPaid"
                           :isValueUSD="true"></Sparkline>
              </template>
              <template slot="title">
                {{ $t('home.rewardsPaid') }}
              </template>
            </StatsCard>
          </div>

          <RewardDashboard></RewardDashboard>
        </div>
      </b-container>
    </div>
  </section>
</template>

<script>
import Underline from '@/components/_ui-elements/Underline.vue';
import StatsCard from '@/components/StatsCard.vue';
import Sparkline from '@/components/_ui-elements/Sparkline.vue';
import RewardDashboard from '@/components/RewardDashboard.vue';
import { csvParser } from '@/mixins/csvParser';
import { totalCalculationFromArray } from '@/mixins/totalCalculationFromArray';

export default {
  name: 'StatisticsSection',
  components: {
    Underline,
    StatsCard,
    Sparkline,
    RewardDashboard,
  },
  mixins: [csvParser, totalCalculationFromArray],
  data() {
    return {
      rewardsPaid: null,
      assetsInControl: null,
      blocksProduced: null,
    };
  },
  computed: {
    totalAssetsInControl() {
      if (!this.assetsInControl) return 0;

      return this.$numeral(this.assetsInControl[this.assetsInControl.length - 1].value)
        .format('0,0');
    },
    totalBlocksProduced() {
      if (!this.blocksProduced) return 0;

      return this.$numeral(this.$_calcTotalFromArray(this.blocksProduced))
        .format('0,0');
    },
    totalRewardsPaid() {
      if (!this.rewardsPaid) return 0;

      return this.$numeral(this.$_calcTotalFromArray(this.rewardsPaid))
        .format('0,0');
    },
    assetsInControlPercent() {
      if (!this.assetsInControl) return 0;

      return this.calcPercentageDifference(
        this.assetsInControl[this.assetsInControl.length - 2].value,
        this.assetsInControl[this.assetsInControl.length - 1].value,
      );
    },
    blocksProducedPercent() {
      if (!this.blocksProduced) return 0;

      return this.calcPercentageDifference(
        this.blocksProduced[this.blocksProduced.length - 2].value,
        this.blocksProduced[this.blocksProduced.length - 1].value,
      );
    },
    rewardsPaidPercent() {
      if (!this.rewardsPaid) return 0;

      return this.calcPercentageDifference(
        this.rewardsPaid[this.rewardsPaid.length - 2].value,
        this.rewardsPaid[this.rewardsPaid.length - 1].value,
      );
    },
  },
  methods: {
    async getRewardsPaid() {
      try {
        const rewardsPaid = await this.$api.getRewardsPaid();
        this.rewardsPaid = this.$_parseCsv(rewardsPaid);
      } catch (err) {
        console.error(err);
      }
    },
    async getAssetsInControl() {
      try {
        const assetsInControl = await this.$api.getAssetsInControl();
        this.assetsInControl = this.$_parseCsv(assetsInControl);
      } catch (err) {
        console.error(err);
      }
    },
    async getBlocksProduced() {
      try {
        const blocksProduced = await this.$api.getBlocksProduced();
        this.blocksProduced = this.$_parseCsv(blocksProduced);
      } catch (err) {
        console.error(err);
      }
    },
    calcPercentageDifference(originalVal, newVal) {
      if (!originalVal && newVal) return 0;
      const percentageDifference = ((newVal - originalVal) / originalVal) * 100;
      return Math.round(percentageDifference * 100) / 100;
    },
  },
  mounted() {
    this.getRewardsPaid();
    this.getAssetsInControl();
    this.getBlocksProduced();
  },
};
</script>

<style lang="scss" scoped>

  /*url('~@/assets/img/corner-cube-bg.png')*/
   .statistics {
     background:
       url('~@/assets/img/fractals.png')
       center center / cover,  $blue--pale;
     padding-top: 130px;
     padding-bottom: 160px;
     position: relative;
     overflow: hidden;

     &__wrapper {
       position: relative;
       z-index: 1;
     }
   }

  .charts {
    padding-top: 95px;

    &__row {
      padding-bottom: 42px;
      display: flex;
      justify-content: space-between;
    }

    &__card {
      max-width: 376px;
    }
  }

  @media (max-width: 1199px) {
    .statistics {
      padding-top: 106px;
    }

    .charts__card {
      max-width: 290px;
    }
  }

  @media (max-width: 991px) {
    .statistics {
      padding-bottom: 252px;
    }

    .charts__row {
      padding-bottom: 36px;
    }

    .charts__card {
      max-width: 226px;
    }
  }

  @media (max-width: 767px) {
    .statistics {
      padding: 50px 0;
    }

    .charts {
      padding-top: 32px;

      &__row {
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 0;
      }

      &__card {
        max-width: 290px;
        margin-bottom: 22px;
      }
    }
  }
</style>
