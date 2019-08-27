<template>
  <div class="dashboard">
    <Card>
      <h5 class="title dashboard__title">
        {{ $t('home.rewardDashboard') }}
      </h5>

      <div class="dashboard__inner">
        <div class="dashboard__left">
          <ul class="coins-list">
            <li v-for="(item, index) in coinsData"
                :key="index"
                :class="{ 'coins-list__li': true,
                          'coins-list__li--active': item && item.name === selectedCoin }">
              <button v-if="item"
                      class="coins-list__btn"
                      @click="selectCoin(item.name)">
                <span class="coins-list__coin">
                  <img :src="item.img"
                       :alt="'Coin'"
                       class="coins-list__img">
                  <span class="coins-list__title">{{ item.name }}</span>
                </span>

                <!--<span class="coins-list__sparkline">-->
                  <!--<SparklineSmall :data="item.sparklines">-->
                  <!--</SparklineSmall>-->
                <!--</span>-->

                <span class="coins-list__percent">
                  ${{ item.price }}
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div class="dashboard__right">
          <div class="chart-wrapper">
            <LineChart v-if="rewardsLoaded && selectedRewards"
                       :styles="chartStyles"
                       :data="chartData"
                       :options="chartOptions">
            </LineChart>
            <div class="dashboard__coming-soon"
                 v-else-if="comingSoonCoins.includes(selectedCoin)">
             {{ $t('home.comingSoon') }}
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/_ui-elements/Card.vue';
// import SparklineSmall from '@/components/_ui-elements/SparklineSmall.vue';
import LineChart from '@/components/charts/LineChart.vue';
import { csvParser } from '@/mixins/csvParser';
// Import images
import Tezos from '@/assets/img/coins-list/tezos.svg';
import IOST from '@/assets/img/coins-list/iost.svg';
import Waves from '@/assets/img/coins-list/waves.svg';
import Cosmos from '@/assets/img/coins-list/cosmos.svg';
import Dash from '@/assets/img/coins-list/dash.svg';
import Qtum from '@/assets/img/coins-list/qtum.svg';
import Irisnet from '@/assets/img/coins-list/irisnet.svg';
import Decred from '@/assets/img/coins-list/decred.svg';

export default {
  name: 'RewardDashboard',
  components: {
    Card,
    // SparklineSmall,
    LineChart,
  },
  mixins: [csvParser],
  data() {
    return {
      coins: {
        tezos: null,
        iostoken: null,
        cosmos: null,
        'iris-network': null,
        waves: null,
        dash: null,
        qtum: null,
        decred: null,
      },
      chartOptions: {
        legend: {
          display: false,
        },
        tooltips: {
          bodyFontSize: 14,
          bodyFontFamily: 'sans-serif',
          backgroundColor: '#3e4e6c',
          custom(tooltip) {
            if (!tooltip) return;
            // disable displaying the color box;
            tooltip.displayColors = false;
          },
          callbacks: {
            label(tooltipItem) {
              return `$${tooltipItem.yLabel}`;
            },
          },
        },
        elements: {
          line: {
            tension: 0,
          },
        },
        scales: {
          yAxes: [{
            gridLines: {
              color: '#f5f5f6',
            },
            ticks: {
              fontColor: '#c3c8d1',
              fontSize: '11',
              padding: 13,
            },
          }],
          xAxes: [{
            position: 'top',
            ticks: {
              fontColor: '#c3c8d1',
              fontSize: '11',
              padding: 13,
            },
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
      rewardsLoaded: false,
      selectedRewards: null,
      selectedCoin: 'Tezos',
      comingSoonCoins: ['Waves', 'Dash', 'Qtum', 'Decred'],
      coinsRewardsMethods: {
        Tezos: 'getTezosRewards',
        IOST: 'getIOSTRewards',
        Cosmos: 'getCosmosRewards',
        'IRISnet': 'getIrisnetRewards',
        Waves: null,
        Dash: null,
        Qtum: null,
        Decred: null,
      },
    };
  },
  computed: {
    coinsData() {
      if (!this.coins) return [];
      return Object.keys(this.coins)
        .reduce((acc, currKey) => acc.concat(this.generateCoinsData(currKey)), []);
    },
    chartStyles() {
      return {
        height: '100%',
        width: '100%',
        position: 'relative',
      };
    },
    chartData() {
      if (!this.selectedRewards) return {};

      return {
        labels: this.selectedRewards.reduce((acc, currObj) => acc.concat(currObj.date), []),
        datasets: [
          {
            // backgroundColor: 'rgba(61, 224, 66, 0.1)',
            borderColor: '#3de042',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointRadius: 0,
            pointHitRadius: 8,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: '#fff',
            data: this.selectedRewards.reduce((acc, currObj) => acc.concat(currObj.value), []),
          },
        ],
      };
    },
  },
  methods: {
    selectCoin(coinName) {
      this.selectedCoin = coinName;

      if (this.coinsRewardsMethods[this.selectedCoin] === null) {
        this.selectedRewards = null;
      } else {
        this.getCoinRewards(this.coinsRewardsMethods[this.selectedCoin]);
      }
    },
    async getCoinData(id) {
      try {
        this.coins[id] = await this.$coinGeckoApi.getCoinData(id);
      } catch (err) {
        console.error(err);
      }
    },
    defineCoinImg(coinName) {
      switch (coinName) {
        case 'Tezos':
          return Tezos;
        case 'IOST':
          return IOST;
        case 'Waves':
          return Waves;
        case 'Cosmos':
          return Cosmos;
        case 'Dash':
          return Dash;
        case 'Qtum':
          return Qtum;
        // case 'IRIS Network':
        //   return Irisnet;
        case 'IRISnet':
          return Irisnet;
        case 'Decred':
          return Decred;
        default:
          return '';
      }
    },
    generateCoinsData(coin) {
      if (!(this.coins[coin] && this.coins[coin].data)) return {};

      return {
        sparklines: this.coins[coin].data.market_data.sparkline_7d.price,
        price: this.coins[coin].data.market_data.current_price.usd,
        name: this.coins[coin].data.name,
        img: this.defineCoinImg(this.coins[coin].data.name),
      };
    },
    async getCoinRewards(coinRewardsMethod) {
      this.rewardsLoaded = false;
      try {
        const coinRewards = await this.$api[coinRewardsMethod]();
        this.selectedRewards = this.$_parseCsv(coinRewards);
        this.rewardsLoaded = true;
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    Object.keys(this.coins).forEach((item) => {
      this.getCoinData(item);
    });
    this.getCoinRewards('getTezosRewards');
  },
};
</script>

<style lang="scss" scoped>
  .dashboard {
    &__title {
      color: $grey--blueish;
      font-size: 30px;
      margin-bottom: 26px;
    }

    &__inner {
      display: flex;
      border-top: 1px solid $white--grey;
    }

    &__left {
      width: 35%;
      max-height: 300px;
      overflow-y: auto;
      margin: 0 15px 0 0;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      direction: rtl;
    }

    &__right {
      width: 65%;
    }

    &__coming-soon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: $green;
      font-size: 21px;
      font-weight: 500;
    }
  }

  .coins-list {
    list-style-type: none;
    padding: 0;
    direction:ltr;

    &__li {
      background: $white--grey;
      border-top: 1px solid $blue--pale-grey;
      border-bottom: 1px solid $blue--pale-grey;
      transition: background 0.2s;

      &:hover, &:focus, &--active {
        background: $white;
      }
    }

    &__btn {
      width: 100%;
      background: transparent;
      border: none;
      padding: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:focus {
        outline: none;
      }
    }

    &__img {
      margin-right: 18px;
    }

    &__title {
      color: $grey--blueish;
      font-size: 21px;
    }

    &__percent {
      color: $green;
      font-size: 21px;
      font-weight: 500;
    }
  }

  .chart-wrapper {
    position: relative;
    height: 300px;
  }

  @media (max-width: 1199px) {
    .coins-list {
      margin-bottom: 0;

      &__img {
        max-width: 28px;
      }

      &__title {
        font-size: 16px;
      }

      &__percent {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 991px) {
    .dashboard {
      &__title {
        font-size: 20px;
        margin-bottom: 16px;
      }

      &__left {
        max-width: 40%;
        max-height: 230px;
      }

      &__right {
        max-width: 63%;
      }
    }

    .chart-wrapper {
      height: 230px;
    }

    .coins-list {
      &__img {
        margin-right: 5px;
        max-width: 26px;
      }

      &__title {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 767px) {
    .dashboard {
      &__inner {
        flex-wrap: wrap;
      }

      &__left, &__right {
        margin-right: 0;
        width: 100%;
        max-width: 100%;
      }
    }
  }

  @media (max-width: 575px) {
    .dashboard {
      max-width: 290px;
      margin: 0 auto;
    }
  }
</style>
