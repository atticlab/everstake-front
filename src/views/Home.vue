<template>
  <div class="home">
    <TopSection></TopSection>
    <main>
      <StatisticsSection></StatisticsSection>
      <CoinsSection></CoinsSection>
      <AboutSection></AboutSection>
      <TeamSection></TeamSection>
      <FormSection></FormSection>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TopSection from '@/components/_home/TopSection.vue';
import StatisticsSection from '@/components/_home/StatisticsSection.vue';
import CoinsSection from '@/components/_home/CoinsSection.vue';
import AboutSection from '@/components/_home/AboutSection.vue';
import TeamSection from '@/components/_home/TeamSection.vue';
import FormSection from '@/components/_home/FormSection.vue';
import Footer from '@/components/footer/Footer.vue';
import { initMail } from '@/mixins/initMail';

export default {
  name: 'home',
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
    TopSection,
    StatisticsSection,
    CoinsSection,
    AboutSection,
    TeamSection,
    FormSection,
    Footer,
  },
  mixins: [initMail],
  data() {
    return {
      testData: null,
    };
  },
  mounted() {
    this.$_initMail();
  },
};
</script>

<style lang="scss" scoped>
  .home {
    /*overflow-x: hidden;*/
  }
</style>
