<template>
  <CoinLayout :isNoStats="true">
    <template slot="stats">
      <b-container>
        <b-row>
          <b-col class="mb-4 mb-lg-0 text-md-center">
            <CoinStat>
              <template slot="top">
<!--                {{ total }}-->
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
                <img src="~@/assets/img/coins-presentation/iost.svg" alt="IOST">
              </div>
            </div>

            <div class="coin-info__container text-center">
              <div class="coin-info__intro">
                <h1 class="coin-info__title">IOST</h1>
                <p class="coin-info__subtitle">{{ $t('coinPages.iost.youCanSupport') }}</p>
              </div>

              <div class="coin-info__address">
                <a href="https://iost.biss.com/#/nodedetail?id=64"
                   target="_blank"
                   class="coin-info__link break">
                  iost.biss.com/#/nodedetail?id=64
                </a>
              </div>
            </div>
          </CardAlt>
        </div>

        <div class="coin-info__bottom">
          <b-row>
            <b-col lg="6 mb-4 mb-lg-0">
              <LinkCard linkAddress="https://medium.com/everstake/iost-telegram-bot-by-everstake-c1a689629d82">
                <template slot="link-txt">
                  {{ $t('coinPages.iost.iostTgBot') }}
                </template>
              </LinkCard>
            </b-col>
            <b-col lg="6 mb-4 mb-lg-0">
              <LinkCard linkAddress="https://medium.com/everstake/iost-voting-guide-how-to-vote-on-the-iostabc-explorer-using-the-iwallet-extension-2e0291c6958e">
                <template slot="link-txt">
                  {{ $t('coinPages.iost.delegationGuide') }}
                </template>
              </LinkCard>
            </b-col>
          </b-row>
        </div>

        <CardAlt class="justify-content-center mt-5">
          <div class="ml-form-embed"
               data-account="1521034:h8a8l8v6n5"
               data-form="1342998:e3o0e8">
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
  name: 'IOST',
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
      // IOSTAddress: 'cosmosvaloper1tflk30mq5vgqjdly92kkhhq3raev2hnz6eete3',
      IOSTHtml: null,
    };
  },
  computed: {
    total() {
      if (!this.IOSTHtml) return 0;
      const textNode = this.IOSTHtml.getElementsByClassName('fz-14')[0].lastChild.data;
      return textNode.trim().split(' ')[0];
    },
  },
  methods: {
    async getIostHtml() {
      try {
        this.IOSTHtml = await this.$iostApi.getIostHtml();
        const parser = new DOMParser();
        this.IOSTHtml = parser.parseFromString(this.IOSTHtml.data, 'text/html');
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    // this.getIostHtml();
    this.$_initMail();
  },
};
</script>

<style lang="scss" scoped>

</style>
