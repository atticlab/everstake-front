<template>
  <section>
    <b-container>
      <Header :isInternal="true"></Header>
    </b-container>

    <div class="new-page-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="title title--grey text-capitalize">
              {{ $t('NewPage.NewPageTitle') }}
              <Underline></Underline>
            </h2>
          </b-col>
          <b-col md="3">
            <div class="new-page-sidebar">
              <div class="single-select" ref="singleSelect">
                <h3>{{ $t('NewPage.NewPageChooseBlockchain') }}</h3>
                <md-field>
                  <label for="graph">{{ $t('NewPage.NewPageLabelSelect') }}</label>
                  <md-select v-model="selectedCoin" name="selectedCoin" id="single-graph">
                    <md-option v-for="coin in coins" :value=coin[0]>{{coin[1]}}</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="multiple-select">
                <h3>{{ $t('NewPage.NewPageChooseSelectChart') }}</h3>
                <md-field class="multiple-select-block">
                  <label for="graph">{{ $t('NewPage.NewPageLabelMultipleselect') }}</label>
                  <md-select v-model="selectedCharts" name="graph" id="multiple-graph" multiple>
                    <md-option v-for="type in chartTypes" :value=type[0]>{{type[1]}}
                    </md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="multiple-select">
                <h3>{{ $t('NewPage.NewPageTimespan') }}</h3>
                <md-field>
                  <label for="graph">{{ $t('NewPage.NewPageSelectCharts') }}</label>
                  <md-select v-model="selectedTimespan" name="graph" id="single-graph-data">
                    <md-option v-for="timespan in timespans" :value=timespan[0]>{{timespan[1]}}
                    </md-option>
                  </md-select>
                </md-field>
              </div>

              <div class="multiple-select">
                <h3>{{ $t('NewPage.NewPageStartDate') }}</h3>
                <datetime v-model="selectedStartDate" placeholder="Select start date"></datetime>
              </div>
              <div class="multiple-select">
                <h3>{{ $t('NewPage.NewPageEndDate') }}</h3>
                <datetime v-model="selectedEndDate" placeholder="Select end date"></datetime>
              </div>

              <div v-if="applyWarn" class="apply-warning">
                <h4>{{ $t('NewPage.NewPageWarning') }}</h4>
              </div>
              <button class="btn-apply" @click="handleApply()">{{ $t('NewPage.NewPageApply') }}</button>
            </div>

          </b-col>
          <b-col md="9">
            <div class="new-page-chart-wrap">
              <div class="new-page-chart">
                <div class="choose-block" v-if="!(chartDataBlocks || chartDataTxCount ||
              chartDataTxVolume || chartDataTxVolume || chartDataCreatedAddresses ||
              chartDataActiveAddresses || chartDataTotalAddresses)">
                  <img :src="ChooseImg" alt="choose img">
                  <h4>{{ $t('NewPage.NewPageChoose') }}</h4>
                </div>
                <b-col v-if="(chartDataBlocks || chartDataTxCount ||
              chartDataTxVolume || chartDataTxVolume || chartDataCreatedAddresses ||
              chartDataActiveAddresses || chartDataTotalAddresses)">
                  <div class="chart" v-if="chartDataBlocks">
                    <h4>{{ $t('NewPage.ChartBlocks') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataBlocks"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>No data</h5>
                  </div>
                  <div class="chart" v-if="chartDataCreatedAddresses">
                    <h4>{{ $t('NewPage.ChartCreatedAddresses') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataCreatedAddresses"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>No data</h5>
                  </div>
                  <div class="chart" v-if="chartDataActiveAddresses">
                    <h4>{{ $t('NewPage.ChartActiveAddresses') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataActiveAddresses"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>No data</h5>
                  </div>
                  <div class="chart" v-if="chartDataTotalAddresses">
                    <h4>{{ $t('NewPage.ChartTotalAddresses') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataTotalAddresses"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>No data</h5>
                  </div>
                  <div class="chart" v-if="chartDataTxCount">
                    <h4>{{ $t('NewPage.ChartTransactionsCount') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataTxCount"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>No data</h5>
                  </div>
                  <div class="chart" v-if="chartDataTxVolume">
                    <h4>{{ $t('NewPage.ChartTransactionVolumes') }}</h4>
                    <HistoryChart
                      v-if="chartDataBlocksSize"
                      :data="chartDataTxVolume"
                      :options="chartOptions"
                      :styles="chartStyles">
                    </HistoryChart>
                    <h5 v-else>No data</h5>
                  </div>
                </b-col>
              </div>

              <div class="chart-form">
                <h2 class="title title--grey text-capitalize">
                  {{ $t('NewPage.NewPageFormTitle') }}
                  <Underline></Underline>
                </h2>
                <iframe
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

    <Footer></Footer>
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
  name: 'NewPage',
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
        case 'graph-total':
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
        case 'graph-addresses':
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
            pointHoverBackgroundColor: '#444F5B',
            pointHoverBorderColor: '#444F5B',
            pointBorderWidth: 1.5,
            pointHoverRadius: 1.5,
            pointHoverBorderWidth: 1.5,
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
    this.coins = [['tezos', 'Tezos'], ['cosmos', 'Cosmos'], ['eos', 'EOS']]; // will get from endpoint
    this.timespans = [['hour', 'One hour'], ['day', 'One day'], ['week', 'One week'], ['month', 'One month']];
    this.chartTypes = [['graph-blocks', 'Number of blocks'], ['graph-addresses', 'Number of addresses created'],
      ['graph-active-addresses', 'Number of active addresses'], ['graph-total', 'Total number of addresses'],
      ['graph-transaction', 'Number of transaction'], ['graph-volumes', 'Transaction volumes']];
  },

};
</script>

<style>
  .multiple-select {
    margin-top: 16px;
  }

  .new-page-wrap {
    padding: 140px 0;
    background: linear-gradient(180deg, rgba(251, 251, 252, 0) 0%, #C2DCF7 100%);
  }

  .new-page-wrap h2 {
    padding-bottom: 80px;
  }
  .chart-form {
    padding: 140px 30px 0 30px;
  }
  .chart-form iframe:not(.md-image) {
    height: 720px;
  }

  .new-page-sidebar, .new-page-chart-wrap {
    padding: 24px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(215, 222, 227, 0.39422), 0px 26px 90px rgba(51, 59, 69, 0.1);
    border-radius: 6px;
  }

  .new-page-chart {
    padding: 24px 40px;
    min-height: 488px;
    display: flex;
    justify-content: center;
  }

  .chart {
    height: 388px;
    padding-top: 20px;
    margin-bottom: 80px;
  }

  .chart h4 {
    margin: 0;
    padding-top: 20px;
    padding-bottom: 30px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
    color: #54617A;
  }

  .apply-warning {
    padding-top: 20px;
    justify-content: center;
  }

  .apply-warning h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: firebrick;
  }

  .choose-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .choose-block h4 {
    margin: 0;
    padding-top: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    color: #8D939D;
  }

  .new-page-sidebar h3 {
    margin: 0;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #69758B;
    line-height: 40px;
  }

  .btn-apply {
    margin-top: 32px;
    padding: 10px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(255, 255, 255, 0.12) 100%), #1F8EFA;
    background-blend-mode: soft-light, normal;
    box-shadow: 0px 11px 16px rgba(68, 112, 180, 0.17);
    border: none;
    border-radius: 6px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 21px;
    color: #FFFFFF;
    transition: .3s ease-in-out;
  }

  .btn-apply:hover {
    box-shadow: none;
    transform: translateY(1px);
  }

  .multiple-select .vdatetime input {
    padding: 9px 15px;
    width: 100%;
    border: 1px solid #D4D7DD;
    box-sizing: border-box;
    border-radius: 4px;
  }

  /*Select style*/
  .md-menu-content {
    box-shadow: none;
  }

  .multiple-select-block {
    position: relative;
  }

  .md-menu-content-container {
    position: absolute;
    top: 48px;
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 20px rgba(215, 222, 227, 0.39422), 0px 26px 90px rgba(51, 59, 69, 0.1);
  }

  .md-field {
    margin: 0;
    padding-top: 0;
    min-height: auto;
  }

  .new-page-sidebar input, .md-field label {
    font-size: 12px;
  }

  .new-page-wrap .md-menu.md-select .md-input {
    font-size: 12px;
    -webkit-text-fill-color: #8D939D;
  }

  .md-field label {
    color: #8D939D;
    top: 5px;
  }

  .md-field.md-theme-default.md-focused label, .md-field.md-theme-default.md-has-value label {
    display: none;
  }

  .md-list-item-text {
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    color: #69758B;
  }

  .md-checkbox.md-theme-default .md-checkbox-container {
    border-color: rgba(0, 0, 0, 0.54);
  }

  .md-checkbox.md-theme-default.md-checked.md-primary .md-checkbox-container {
    background-color: #448aff;
    background-color: var(--md-theme-default-primary, #448aff);
    border-color: #448aff;
    border-color: var(--md-theme-default-primary, #448aff);
  }

  .md-checkbox.md-theme-default.md-checked .md-checkbox-container:after {
    border-color: #fff;
    border-color: var(--md-theme-default-background, #fff);
  }

  .md-field {
    border-bottom: 1px solid #D4D7DD;
  }

  /*Select style*/
</style>
