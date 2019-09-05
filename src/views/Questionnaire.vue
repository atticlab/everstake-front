<template>
  <CoinLayout :isNoStats="true">
    <template slot="content">
      <CardAlt :isCoinImg="false" class="questionnaire">
        <main class="w-100">
          <section>
            <h4 class="title title--alt text-capitalize mb-4 mb-xl-5">
              {{ $t('home.techSurvey') }}
              <Underline></Underline>
            </h4>

            <div class="text-center w-100">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSesZjOBes2YYmA0xdARDZ6vc3mp-O3tHZBqLMPhG8C0yl89eg/viewform?embedded=true"
                      class="questionnaire__iframe"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0">
                Loading…
              </iframe>
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

export default {
  name: 'Questionnaire',
  components: {
    CoinLayout,
    CardAlt,
    Underline,
  },
};
</script>

<style lang="scss" scoped>
  .questionnaire {
    margin-bottom: 86px;
    padding: 70px;
    margin-top: 100px;

    &__iframe {
      width: 100%;
      max-width: 640px;
      height: 2609px;
    }
  }

  @media (max-width: 767px) {
    .questionnaire {
      padding: 40px;
      margin-top: 70px;
    }
  }

  @media (max-width: 575px) {
    .questionnaire {
      padding: 30px 0 30px 0;
      margin-top: 40px;
      background: transparent;
      box-shadow: none;
    }
  }
</style>
