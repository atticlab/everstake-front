<template>
  <CoinLayout :isNoStats="true">
    <template slot="content">
      <CardAlt :isCoinImg="false" class="staking">
        <main>
          <section class="staking-section">
            <h4 class="title title--alt text-capitalize mb-sm-4 mb-xl-5">
              {{ $t('stakingPage.allYouNeedToKnow') }}
              <Underline></Underline>
            </h4>

            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionOneParagraph') }}
            </p>
          </section>
          <section class="staking-section">
            <h4 class="title title--alt text-capitalize mb-sm-4 mb-xl-5">
              {{ $t('stakingPage.stakingCrypto') }}
              <Underline></Underline>
            </h4>

            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionTwoParagraph') }}
            </p>
            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionTwoParagraphPart2') }}
            </p>
          </section>
          <section class="staking-section">
            <h4 class="title title--alt text-capitalize mb-sm-4 mb-xl-5">
              {{ $t('stakingPage.howStakingWork') }}
              <Underline></Underline>
            </h4>

            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionThreeParagraph') }}
            </p>
            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionThreeParagraphPart2') }}
            </p>
          </section>
          <section class="staking-section">
            <h4 class="title title--alt text-capitalize mb-sm-4 mb-xl-5">
              {{ $t('stakingPage.isItSafe') }}
              <Underline></Underline>
            </h4>

            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionFourParagraph') }}
            </p>
          </section>
          <section class="staking-section">
            <h4 class="title title--alt text-capitalize mb-sm-4 mb-xl-5">
              {{ $t('stakingPage.whyEverstake') }}
              <Underline></Underline>
            </h4>

            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionFiveParagraph') }}
            </p>
            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionFiveParagraphPart2') }}
            </p>
            <p class="paragraph pt-4">
              {{ $t('stakingPage.sectionFiveParagraphPart3') }}
            </p>

            <div class="coins">
              <b-row>
                <b-col md="6"
                       lg="4"
                       xl="3"
                       v-for="(coin, index) in coins"
                       :key="index">
                    <CoinLink :img="coin.img"
                              :name="coin.name"
                              :routerLinkName="coin.routerLinkName">
                    </CoinLink>
                </b-col>
              </b-row>
            </div>
          </section>
        </main>
      </CardAlt>
    </template>
  </CoinLayout>
</template>

<script>
import CoinLayout from '@/layouts/CoinLayout.vue';
import CardAlt from '@/components/_ui-elements/CardAlt.vue';
import Underline from '@/components/_ui-elements/Underline.vue';
import CoinLink from '@/components/_ui-elements/CoinLink.vue';

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

export default {
  name: 'StakingPage',
  metaInfo() {
    return {
      title: 'What is staking | How to stake coins | Everstake — Staking Service Platform',
      meta: [
        { property: 'og:title', content: 'What is staking | How to stake coins | Everstake — Staking Service Platform'},
      ],
    };
  },
  components: {
    CoinLayout,
    CardAlt,
    Underline,
    CoinLink,
  },
  data() {
    return {
      coins: [
        {
          img: Tezos,
          name: 'Tezos',
          routerLinkName: 'tezos',
        },
        {
          img: IOST,
          name: 'IOST',
          routerLinkName: 'iost',
        },
        {
          img: Waves,
          name: 'Waves',
          routerLinkName: 'waves',
        },
        {
          img: Cosmos,
          name: 'Cosmos',
          routerLinkName: 'cosmos',
        },
        {
          img: Eos,
          name: 'Eos',
          routerLinkName: 'eos',
        },
        {
          img: Dash,
          name: 'Dash',
          routerLinkName: 'dash',
        },
        {
          img: Qtum,
          name: 'Qtum',
          routerLinkName: 'qtum',
        },
        {
          img: Irisnet,
          name: 'Irisnet',
          routerLinkName: 'irisnet',
        },
        {
          img: Decred,
          name: 'Decred',
          routerLinkName: 'decred',
        },
        {
          img: Ark,
          name: 'Ark',
          routerLinkName: 'ark',
        },
        {
          img: EtherZero,
          name: 'EtherZero',
          routerLinkName: 'etherZero',
        },
        {
          img: IOTEX,
          name: 'IOTEX',
          routerLinkName: 'iotex',
        },
        {
          img: Algorand,
          name: 'Algorand',
          routerLinkName: 'algorand',
        },
        {
          img: Harmony,
          name: 'Harmony',
          routerLinkName: 'harmony',
        },
        {
          img: NKN,
          name: 'NKN',
          routerLinkName: 'nkn',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .staking {
    margin-bottom: 86px;
    padding: 70px 70px 0 70px;
    margin-top: 100px;
  }

  .staking-section {
    margin-bottom: 88px;
  }

  @media (max-width: 767px) {
    .staking {
      padding: 40px 40px 0 40px;
      margin-top: 70px;
    }
  }

  @media (max-width: 575px) {
    .staking {
      padding: 30px 30px 0 30px;
      margin-top: 40px;
    }
  }
</style>
