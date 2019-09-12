<template>
  <section class="coins" id="coins">
    <div class="coins__available">
      <b-container>
        <h2 class="title title--white coins__title">
          {{ $t('home.availableCoins') }}
          <Underline></Underline>
        </h2>

        <b-row>
          <b-col v-for="(coinObj, index) in availableCoins"
                 :key="index"
                 sm="6"
                 md="4"
                 lg="3">
            <CoinPresentation>
              <template slot="icon">
                <img :src="coinObj.img"
                     :alt="coinObj.name"
                     :width="coinObj.name === 'IOTEX'
                             || coinObj.name === 'Dash'
                             ? '80px' : 'auto'">
              </template>2
              <template slot="name">{{ coinObj.name }}</template>
              <template slot="percent">{{ coinObj.percent }}</template>
              <template slot="description">{{ coinObj.description }}</template>
              <template slot="routerLink">
                <router-link :to="{ name:  coinObj.routerLinkName }" class="oval-btn">
                  <template v-if="coinObj.name === 'Eos'">{{ $t('home.lendNow') }}</template>
                  <template v-else>{{ $t('home.stakeNow') }}</template>
                </router-link>
              </template>
            </CoinPresentation>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="coins__dev">
      <b-container>
        <h2 class="title title--white coins__title">
          {{ $t('home.devCoins') }}
          <Underline></Underline>
        </h2>

        <b-row>
          <b-col v-for="(coinObj, index) in devCoins"
                 :key="index"
                 sm="6"
                 md="4"
                 lg="3">
            <CoinPresentation :noLink="true"
                              :noCoin="coinObj.noCoin"
                               class="mb-md-0">
              <template slot="icon">
                <img v-if="coinObj.img"
                     :src="coinObj.img"
                     :alt="coinObj.name"
                     :width="coinObj.name === 'Elixxir'
                             || coinObj.name === 'Kusama Network'
                             || coinObj.name === 'TON Network'
                             ? '70px' : 'auto'"
                >
                <Dots v-else-if="coinObj.img === ''"></Dots>
              </template>
              <template slot="name">
                {{ coinObj.name }}
              </template>
              <template slot="percent">
                <Dots v-if="typeof coinObj.percent === 'undefined'"></Dots>
                <template v-else>
                  {{ coinObj.percent }}
                </template>
              </template>
              <template slot="description">{{ coinObj.description }}</template>
            </CoinPresentation>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
import Underline from '@/components/_ui-elements/Underline.vue';
import CoinPresentation from '@/components/CoinPresentation.vue';
import Dots from '@/components/_ui-elements/Dots.vue';
// Import images
import Tezos from '@/assets/img/coins-presentation/tezos.svg';
import IOST from '@/assets/img/coins-presentation/iost.svg';
import Waves from '@/assets/img/coins-presentation/waves.svg';
import Cosmos from '@/assets/img/coins-presentation/cosmos.svg';
import Dash from '@/assets/img/coins-presentation/dash.svg';
import Qtum from '@/assets/img/coins-presentation/qtum.svg';
import Irisnet from '@/assets/img/coins-presentation/irisnet.svg';
import Decred from '@/assets/img/coins-presentation/decred.svg';
import Eos from '@/assets/img/coins-presentation/eos.svg';
import Ark from '@/assets/img/coins-presentation/ark.svg';
import EtherZero from '@/assets/img/coins-presentation/etherZero.svg';
import Algorand from '@/assets/img/coins-presentation/algorand.svg';
import Harmony from '@/assets/img/coins-presentation/harmony.svg';
import NKN from '@/assets/img/coins-presentation/nkn.svg';
import IOTEX from '@/assets/img/coins-presentation/iotex.svg';
// Coins under development
import Ethereum from '@/assets/img/coins-presentation/ethereum.svg';
import Cardano from '@/assets/img/coins-presentation/cardano.svg';
import Polkadot from '@/assets/img/coins-presentation/polkadot.svg';
import NEO from '@/assets/img/coins-presentation/neo.svg';
import Solana from '@/assets/img/coins-presentation/solana.svg';
import Pivx from '@/assets/img/coins-presentation/pivx.svg';
import NANO from '@/assets/img/coins-presentation/nano.svg';
import Ontology from '@/assets/img/coins-presentation/ontology.svg';
import Icon from '@/assets/img/coins-presentation/icon.svg';
import CasperLabs from '@/assets/img/coins-presentation/casperlabs.svg';
import Near from '@/assets/img/coins-presentation/near.svg';
import Elixxir from '@/assets/img/coins-presentation/elixxir.svg';
import Kusama from '@/assets/img/coins-presentation/kusama.svg';
import TON from '@/assets/img/coins-presentation/ton.svg';


export default {
  name: 'CoinsSection',
  components: {
    Underline,
    CoinPresentation,
    Dots,
  },
  data() {
    return {
      availableCoins: [
        {
          img: Tezos,
          name: 'Tezos',
          percent: '7.15%',
          description: this.$t('home.coinsPresentation.tezos'),
          routerLinkName: 'tezos',
        },
        {
          img: IOST,
          name: 'IOST',
          percent: '17.10%',
          description: this.$t('home.coinsPresentation.iost'),
          routerLinkName: 'iost',
        },
        {
          img: Waves,
          name: 'Waves',
          percent: ' 0.3%',
          description: this.$t('home.coinsPresentation.waves'),
          routerLinkName: 'waves',
        },
        {
          img: Cosmos,
          name: 'Cosmos',
          percent: '13.02%',
          description: this.$t('home.coinsPresentation.cosmos'),
          routerLinkName: 'cosmos',
        },
        {
          img: Eos,
          name: 'Eos',
          percent: '1.85%',
          description: this.$t('home.coinsPresentation.eos'),
          routerLinkName: 'eos',
        },
        {
          img: Dash,
          name: 'Dash',
          percent: '6,41%',
          description: this.$t('home.coinsPresentation.dash'),
          routerLinkName: 'dash',
        },
        {
          img: Qtum,
          name: 'Qtum',
          percent: '6.12%',
          description: this.$t('home.coinsPresentation.qtum'),
          routerLinkName: 'qtum',
        },
        {
          img: Irisnet,
          name: 'Irisnet',
          percent: '14.49%',
          description: this.$t('home.coinsPresentation.irisnet'),
          routerLinkName: 'irisnet',
        },
        {
          img: Decred,
          name: 'Decred',
          percent: '10.48%',
          description: this.$t('home.coinsPresentation.decred'),
          routerLinkName: 'decred',
        },
        {
          img: Ark,
          name: 'Ark',
          percent: '9,84%',
          description: this.$t('home.coinsPresentation.ark'),
          routerLinkName: 'ark',
        },
        {
          img: EtherZero,
          name: 'EtherZero',
          percent: '--',
          description: this.$t('home.coinsPresentation.etherZero'),
          routerLinkName: 'etherZero',
        },
        {
          img: IOTEX,
          name: 'IOTEX',
          percent: '~10%',
          description: this.$t('home.coinsPresentation.iotex'),
          routerLinkName: 'iotex',
        },
        {
          img: Algorand,
          name: 'Algorand',
          percent: '--',
          description: this.$t('home.coinsPresentation.algorand'),
          routerLinkName: 'algorand',
        },
        {
          img: Harmony,
          name: 'Harmony',
          percent: '--',
          description: this.$t('home.coinsPresentation.harmony'),
          routerLinkName: 'harmony',
        },
        {
          img: NKN,
          name: 'NKN',
          percent: '--',
          description: this.$t('home.coinsPresentation.nkn'),
          routerLinkName: 'nkn',
        },
      ],
      devCoins: [
        {
          img: TON,
          name: 'TON Network',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Kusama,
          name: 'Kusama Network',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Elixxir,
          name: 'Elixxir',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Near,
          name: 'Near',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Icon,
          name: 'Icon',
          description: this.$t('home.moreDetails'),
        },
        {
          img: CasperLabs,
          name: 'Casper Labs',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Ontology,
          name: 'Ontology',
          description: this.$t('home.moreDetails'),
        },
        {
          img: NANO,
          name: 'NANO',
          description: this.$t('home.moreDetails'),
        },
        {
          img: NEO,
          name: 'NEO',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Solana,
          name: 'Solana',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Pivx,
          name: 'Pivx',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Ethereum,
          name: 'Ethereum 2.0',
          description: this.$t('home.coinsPresentation.ethereum2'),
        },
        {
          img: Cardano,
          name: 'Cardano',
          description: this.$t('home.moreDetails'),
        },
        {
          img: Polkadot,
          name: 'Polkadot',
          description: this.$t('home.moreDetails'),
        },
        // {
        //   img: '',
        //   name: 'Next coins',
        //   description: this.$t('home.moreDetails'),
        //   noCoin: true,
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .coins {
    background: $blue--dark;
    padding: 136px 0 50px;

    &__available {
      margin-bottom: 30px;
    }

    &__title {
      padding-bottom: 95px;
    }
  }

  @media (max-width: 1199px) {
    .coins {
      padding: 106px 0 50px;

      &__title {
        padding-bottom: 72px;
      }
    }
  }

  @media (max-width: 767px) {
    .coins {
      padding: 50px 0 6px;

      &__title {
        padding-bottom: 34px;
      }
    }
  }
</style>
