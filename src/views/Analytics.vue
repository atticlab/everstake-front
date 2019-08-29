<template>
  <section>
    <b-container>
      <Header :isInternal="true"></Header>
    </b-container>

    <div class="analytics-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="title title--grey text-capitalize">
              {{ $t('Analytics.AnalyticsTitle') }}
              <Underline></Underline>
            </h2>
          </b-col>
          <b-col md="3">
            <div class="analytics-wrap__sidebar">
              <div class="single-select" ref="singleSelect">
                <h3 class="analytics-wrap__sidebar__title">{{ $t('Analytics.AnalyticsChooseBlockchain') }}</h3>
                <md-field>
                  <label class="label-form" for="graph">{{ $t('Analytics.AnalyticsLabelSelect') }}</label>
                  <md-select v-model="selectedCoin" name="selectedCoin" id="single-graph">
                    <md-option v-for="coin in coins" :value=coin[0]>{{coin[1]}}</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="multiple-select">
                <h3 class="analytics-wrap__sidebar__title">{{ $t('Analytics.AnalyticsChooseSelectChart') }}</h3>
                <md-field class="multiple-select__block">
                  <label class="label-form" for="graph">{{ $t('Analytics.AnalyticsLabelMultipleselect') }}</label>
                  <md-select v-model="selectedCharts" name="graph" id="multiple-graph" multiple>
                    <md-option v-for="type in chartTypes" :value=type[0]>{{type[1]}}
                    </md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="multiple-select">
                <h3 class="analytics-wrap__sidebar__title">{{ $t('Analytics.AnalyticsTimespan') }}</h3>
                <md-field>
                  <label class="label-form" for="graph">{{ $t('Analytics.AnalyticsSelectCharts') }}</label>
                  <md-select v-model="selectedTimespan" name="graph" id="single-graph-data">
                    <md-option v-for="timespan in timespans" :value=timespan[0]>{{timespan[1]}}
                    </md-option>
                  </md-select>
                </md-field>
              </div>

              <div class="multiple-select">
                <h3 class="analytics-wrap__sidebar__title">{{ $t('Analytics.AnalyticsStartDate') }}</h3>
                <datetime v-model="selectedStartDate" placeholder="Select start date"></datetime>
              </div>
              <div class="multiple-select">
                <h3 class="analytics-wrap__sidebar__title">{{ $t('Analytics.AnalyticsEndDate') }}</h3>
                <datetime v-model="selectedEndDate" placeholder="Select end date"></datetime>
              </div>

              <div v-if="applyWarn" class="apply-warning">
                <h4 class="apply-warning__text">{{ $t('Analytics.AnalyticsWarning') }}</h4>
              </div>
              <button class="btn-apply" @click="handleApply()">{{ $t('Analytics.AnalyticsApply') }}</button>
            </div>

          </b-col>
          <b-col md="9">
            <div class="analytics-wrap__chart">
              <div class="analytics-chart">
                <div class="choose-block" v-if="!(chartDataBlocks || chartDataTxCount ||
              chartDataTxVolume || chartDataTxVolume || chartDataCreatedAddresses ||
              chartDataActiveAddresses || chartDataTotalAddresses)">
                  <img :src="ChooseImg" alt="choose img">
                  <h4 class="choose-block__title">{{ $t('Analytics.AnalyticsChoose') }}</h4>
                </div>
                <b-col v-if="(chartDataBlocks || chartDataTxCount ||
              chartDataTxVolume || chartDataTxVolume || chartDataCreatedAddresses ||
              chartDataActiveAddresses || chartDataTotalAddresses)">
                  <div class="chart" v-if="chartDataBlocks">
                    <h4 class="chart-title">{{ $t('Analytics.ChartBlocks') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataBlocks"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>{{ $t('Analytics.ChartNoData') }}</h5>
                  </div>
                  <div class="chart" v-if="chartDataCreatedAddresses">
                    <h4 class="chart-title">{{ $t('Analytics.ChartCreatedAddresses') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataCreatedAddresses"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>{{ $t('Analytics.ChartNoData') }}</h5>
                  </div>
                  <div class="chart" v-if="chartDataActiveAddresses">
                    <h4 class="chart-title">{{ $t('Analytics.ChartActiveAddresses') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataActiveAddresses"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>{{ $t('Analytics.ChartNoData') }}</h5>
                  </div>
                  <div class="chart" v-if="chartDataTotalAddresses">
                    <h4 class="chart-title">{{ $t('Analytics.ChartTotalAddresses') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataTotalAddresses"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>{{ $t('Analytics.ChartNoData') }}</h5>
                  </div>
                  <div class="chart" v-if="chartDataTxCount">
                    <h4 class="chart-title">{{ $t('Analytics.ChartTransactionsCount') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataTxCount"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>{{ $t('Analytics.ChartNoData') }}</h5>
                  </div>
                  <div class="chart" v-if="chartDataTxVolume">
                    <h4 class="chart-title">{{ $t('Analytics.ChartTransactionVolumes') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataTxVolume"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>{{ $t('Analytics.ChartNoData') }}</h5>
                  </div>
                </b-col>
              </div>

              <div class="analytics-wrap__form">
                <iframe
                  class="analytics-form"
                  src="https://docs.google.com/forms/d/e/1FAIpQLScZJrmU3zB1C8Kcnr_MsEqwZlJA5fa9H6deUraljnCtrqfu2A/viewform?embedded=true"
                  width="639"
                  height="710"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0">
                  Загрузка…
                </iframe>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <Footer :isInternal="true"></Footer>
  </section>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import Underline from '@/components/_ui-elements/Underline.vue';

import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

import ChooseImg from '../assets/img/charts/choose-blockchain.png';
import HistoryChart from '../components/charts/HistoryChart.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import Vue from 'vue';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

export default {
  name: 'Analytics',
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
    HistoryChart,
    Header,
    Underline,
    Footer,
    datetime: Datetime,
  },
  methods: {
    async handleApply() {
      this.applyWarn = false;
      if (!this.checkFields()) {
        return;
      }
      this.clearCharts();
      try {
        this.selectedCharts.forEach(this.processChartType);
      } catch (err) {
        console.error(err);
      }
    },
    async processChartType(type) {
      const coin = this.selectedCoin;
      const startDate = +new Date(this.selectedStartDate);
      const endDate = +new Date(this.selectedEndDate);
      const period = this.selectedTimespan;
      let data;
      let coinHistoryApi;
      if (this.selectedCoin === 'eos') {
        coinHistoryApi = this.$coinEOSHistoryApi;
      } else {
        coinHistoryApi = this.$coinHistoryApi;
      }
      switch (type) {
        case 'graph-blocks':
          data = await coinHistoryApi.getBlocks(coin, period, startDate, endDate);
          this.chartDataBlocks = this.mapChartData(data);
          this.chartDataBlocksSize = data.data.length;
          break;
        case 'graph-addresses':
          data = await coinHistoryApi.createdAddresses(coin, period, startDate, endDate);
          this.chartDataCreatedAddresses = this.mapChartData(data);
          this.chartDataBlocksSize = data.data.length;
          break;
        case 'graph-transaction':
          data = await coinHistoryApi.txCount(coin, period, startDate, endDate);
          this.chartDataTxCount = this.mapChartData(data);
          this.chartDataBlocksSize = data.data.length;
          break;
        case 'graph-volumes':
          data = await coinHistoryApi.txVolume(coin, period, startDate, endDate);
          this.chartDataTxVolume = this.mapChartData(data);
          this.chartDataBlocksSize = data.data.length;
          break;
        case 'graph-active-addresses':
          data = await coinHistoryApi.activeAddresses(coin, period, startDate, endDate);
          this.chartDataActiveAddresses = this.mapChartData(data);
          this.chartDataBlocksSize = data.data.length;
          break;
        case 'graph-total':
          data = await coinHistoryApi.totalAddresses(coin, period, startDate, endDate);
          this.chartDataTotalAddresses = this.mapChartData(data);
          this.chartDataBlocksSize = data.data.length;
          break;
      }
    },
    clearCharts() {
      this.chartDataBlocks = undefined;
      this.chartDataTxCount = undefined;
      this.chartDataTxVolume = undefined;
      this.chartDataCreatedAddresses = undefined;
      this.chartDataActiveAddresses = undefined;
      this.chartDataTotalAddresses = undefined;
    },
    mapChartData(data) {
      return {
        labels: data.data.map(item => new Date(item.date * 1000).toLocaleString()),
        datasets: [
          {
            label: 'Count',
            borderColor: '#444F5B',
            pointBorderColor: '#444F5B',
            pointBackgroundColor: '#444F5B',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#444F5B',
            pointBorderWidth: 1.5,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 1.5,
            fill: true,
            backgroundColor: '',
            borderWidth: 2,
            lineTension: 0,
            data: data.data.map(item => item.count),
          },
        ],
      };
    },
    checkFields() {
      const check = (this.selectedCoin
        && this.selectedTimespan
        && this.selectedCharts
        && this.selectedStartDate
        && this.selectedEndDate);
      if (!check) {
        this.applyWarn = true;
      }
      return check;
    },
  },
  data() {
    return {
      ChooseImg,
      coins: [],
      timespans: [],
      chartTypes: [],
      historyLoaded: false,
      selectedCharts: null,
      selectedCoin: undefined,
      selectedTimespan: undefined,
      selectedStartDate: undefined,
      selectedEndDate: undefined,
      chartsData: undefined,
      applyWarn: false,
      length: [],

      chartDataBlocksSize: 0,
      chartDataBlocks: undefined,
      chartDataTxCount: undefined,
      chartDataTxVolume: undefined,
      chartDataCreatedAddresses: undefined,
      chartDataActiveAddresses: undefined,
      chartDataTotalAddresses: undefined,
      chartOptions: {
        animation: {
          easing: 'easeInOutBack',
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 2,
          },
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
              drawBorder: false,
            },
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
              drawBorder: false,
            },
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    chartData() {
      if (!this.chartsData) return {};
      return {
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
            data: this.selectedGrapfs.reduce((acc, currObj) => acc.concat(currObj.value), []),
          },
        ],
      };
    },
    chartStyles() {
      return {
        height: '100%',
        width: '100%',
        position: 'relative',
      };
    },
  },
  mounted() {
    this.coins = [
      ['tezos', 'Tezos'],
      ['cosmos', 'Cosmos'],
      ['irisnet', 'IRISnet'],
      // ['eos', 'EOS'],
    ]; // will get from endpoint
    this.timespans = [['hour', 'One hour'], ['day', 'One day'], ['week', 'One week'], ['month', 'One month']];
    this.chartTypes = [['graph-blocks', 'Number of blocks'], ['graph-addresses', 'Number of addresses created'],
      ['graph-active-addresses', 'Number of active addresses'], ['graph-total', 'Total number of addresses'],
      ['graph-transaction', 'Number of transaction'], ['graph-volumes', 'Transaction volumes']];
  },

};
</script>

<style lang="scss">
  .analytics-wrap {
    padding: 140px 0;
    background: $gradient--blue;
    .title {
      padding-bottom: 80px;
    }
    &__sidebar {
      &__title {
        margin: 0;
        padding-bottom: 8px;
        display: flex;
        align-items: center;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        color: $grey--darker-3;
        line-height: 40px;
      }
      .vdatetime-input, .md-field .label-form {
        font-size: 12px;
      }
      .multiple-select {
        margin-top: 16px;
        .vdatetime .vdatetime-input {
          padding: 9px 15px;
          width: 100%;
          border: 1px solid $grey--border;
          box-sizing: border-box;
          border-radius: 4px;
        }
        &__block {
          position: relative;
        }
      }
      .apply-warning {
        padding-top: 20px;
        justify-content: center;
        &__text {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          color: firebrick;
        }
      }
      .btn-apply {
        margin-top: 32px;
        padding: 10px 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $gradient--blue-btn;
        background-blend-mode: soft-light, normal;
        box-shadow: $shadow--dark-btn;
        border: none;
        border-radius: 6px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 21px;
        color: $white;
        transition: .3s ease-in-out;
        &:hover {
          box-shadow: none;
          transform: translateY(1px);
        }
      }
    }
    &__sidebar,
    &__chart {
      padding: 24px;
      background: $white;
      box-shadow: $shadow--grey;
      border-radius: 6px;
      .analytics-chart {
        padding: 24px 0;
        min-height: 488px;
        display: flex;
        justify-content: center;
      }
      .chart {
        height: 388px;
        padding-top: 20px;
        margin-bottom: 80px;
        &-title {
          margin: 0;
          padding-top: 20px;
          padding-bottom: 30px;
          font-family: Roboto;
          font-weight: 500;
          font-size: 24px;
          color: $grey--blueish;
        }
      }
      .choose-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &__title {
          margin: 0;
          padding-top: 40px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 21px;
          color: $grey--darker-2;
        }
      }
    }
    &__form {
      padding: 140px 30px 0 30px;
      text-align: center;
      .analytics-form:not(.md-image) {
        height: 720px;
      }
    }
  }

  /* Style select */
  .md-menu.md-select .md-input {
    font-size: 12px;
    -webkit-text-fill-color: $grey--darker-2;
  }
  .md-menu-content {
    box-shadow: none;
    &-container {
      position: absolute;
      top: 48px;
      width: 100%;
      background: $white;
      box-shadow: $shadow--grey;
    }
  }
  .md-field {
    margin: 0;
    padding-top: 0;
    min-height: auto;
    border-bottom: 1px solid $grey--border;
    .label-form {
      color: $grey--darker-2;
      top: 5px;
    }
  }
  .md-field.md-theme-default.md-focused .label-form, .md-field.md-theme-default.md-has-value .label-form {
    display: none;
  }
  .md-list-item-text {
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    color: $grey--darker-3;
  }

  .md-checkbox.md-theme-default .md-checkbox-container {
    border-color: $black-opacity;
  }
  .md-checkbox.md-theme-default.md-checked.md-primary .md-checkbox-container {
    background-color: $blue--pale-4;
    background-color: var(--md-theme-default-primary, $blue--pale-4);
    border-color: $blue--pale-4;
    border-color: var(--md-theme-default-primary, $blue--pale-4);
  }
  .md-checkbox.md-theme-default.md-checked .md-checkbox-container:after {
    border-color: $white;
    border-color: var(--md-theme-default-background, $white);
  }
  /* Style select */
</style>
