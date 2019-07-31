<template>
  <section class="about">
    <div class="about__choose">
      <b-container>
        <h2 class="title">
          {{ $t('home.whyChooseUs') }}
          <Underline></Underline>
        </h2>

        <div class="reasons">
          <div class="reasons__row">
            <Reason v-for="(reasonObj, index) in reasonsSetOne"
                    :key="index">
              <template slot="title">
                {{ reasonObj.title }}
              </template>
              <template slot="icon">
                <img :src="reasonObj.icon" alt="Icon" class="reasons__icon">
              </template>
              <template slot="description">
                {{ reasonObj.description }}
              </template>
            </Reason>
          </div>

          <div class="reasons__row">
            <Reason v-for="(reasonObj, index) in reasonsSetTwo"
                    :key="index">
              <template slot="title">
                {{ reasonObj.title }}
              </template>
              <template slot="icon">
                <img :src="reasonObj.icon" alt="Icon" class="reasons__icon">
              </template>
              <template slot="description">
                {{ reasonObj.description }}
              </template>
            </Reason>
          </div>
        </div>
      </b-container>
    </div>

    <div class="about__us" id="about">
      <b-container>
        <b-row>
          <b-col md="8" lg="6" xl="5">
            <div class="about__us-txt">
              <h2 class="title about__title">
                {{ $t('home.aboutUs') }}
                <Underline></Underline>
              </h2>

              <p class="paragraph mb-3 mb-md-5">
                {{ $t('home.everstakeIsATeam') }}
              </p>
              <p class="paragraph">
                {{ $t('home.weRunHighlySecure') }}
              </p>
            </div>
          </b-col>
          <b-col lg="6">
<!--            <img src="@/assets/img/about.png" alt="About us" class="about__img">-->

            <div class="layers">
              <img src="@/assets/img/about-layers/1.png" alt="About us" class="">
              <img src="@/assets/img/about-layers/2.png" alt="About us" class="">
              <img src="@/assets/img/about-layers/3.png" alt="About us" class="">
              <img src="@/assets/img/about-layers/4.png" alt="About us" class="">
              <img src="@/assets/img/about-layers/5.png" alt="About us" class="">
              <img src="@/assets/img/about-layers/6.png" alt="About us" class="">
              <img src="@/assets/img/about-layers/7.png" alt="About us" class="">
              <img src="@/assets/img/about-layers/8.png" alt="About us" class="">
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
import Underline from '@/components/_ui-elements/Underline.vue';
import Reason from '@/components/Reason.vue';
// Icons
import TopNotch from '@/assets/img/reasons/top-notch.svg';
import Automatic from '@/assets/img/reasons/automatic.svg';
import Proven from '@/assets/img/reasons/proven.svg';
import Transparency from '@/assets/img/reasons/transparency.svg';
import Support from '@/assets/img/reasons/support.svg';

export default {
  name: 'AboutSection',
  components: {
    Underline,
    Reason,
  },
  data() {
    return {
      reasonsSetOne: [
        {
          title: this.$t('home.reasons.one.title'),
          description: this.$t('home.reasons.one.description'),
          icon: TopNotch,
        },
        {
          title: this.$t('home.reasons.two.title'),
          description: this.$t('home.reasons.two.description'),
          icon: Proven,
        },
        {
          title: this.$t('home.reasons.three.title'),
          description: this.$t('home.reasons.three.description'),
          icon: Automatic,
        },
      ],
      reasonsSetTwo: [
        {
          title: this.$t('home.reasons.four.title'),
          description: this.$t('home.reasons.four.description'),
          icon: Transparency,
        },
        {
          title: this.$t('home.reasons.five.title'),
          description: this.$t('home.reasons.five.description'),
          icon: Support,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .layers {
    position: absolute;
    top: -126px;
    width: 760px;
    height: 760px;
    z-index: 1;
    right: -100px;
    pointer-events: none;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      &:first-child {
        animation: spin 25s linear infinite;
      }

      &:nth-child(2) {
        animation: spin 60s linear infinite;
      }

      &:nth-child(3) {
        animation: lightning 4s linear infinite;
      }

      &:nth-child(4) {
        animation: spin 60s linear infinite;
      }

      &:nth-child(5) {
        animation: moves 2s alternate ease-in-out infinite;
      }

      &:nth-child(6) {
        animation: moves 4s alternate backwards ease-in-out infinite;
      }

      &:nth-child(7) {
        animation: moves 3s alternate ease-in-out infinite;
      }

      &:nth-child(8) {
        animation: moves 3s alternate ease-in-out infinite;
      }
    }
  }

  @keyframes spin {
    100% {
      transform:rotate(360deg);
    }
  }

  @keyframes moves {
    0% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(8px);
    }
  }

  @keyframes lightning {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    20% {
      opacity: 0;
    }
    35% {
      opacity: 1;
    }
    40% {
      opacity: 0.5;
    }
    45% {
      opacity: 0;
    }
    60% {
      opacity: 0.5;
    }
    78% {
      opacity: 0;
    }
    85% {
      opacity: 1;
    }
    95% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }

  .about {
    background: $gradient--light;
    padding: 136px 0 200px;
    overflow: hidden;

    &__choose {
      background: url('~@/assets/img/why-us.png') center center no-repeat;
      background-size: cover;
    }

    &__reasons {
      margin-top: 95px;
    }

    &__title {
      margin-bottom: 90px;
    }

    &__us {
      padding-top: 126px;
      position: relative;
    }

    &__us-txt {
      position: relative;
      z-index: 2;
    }
  }

  .reasons {
    padding: 95px 0 0;
    position: relative;
    z-index: 2;

    &__row {
      display: flex;
      justify-content: space-between;

      &:last-child {
        max-width: 808px;
        margin: 55px auto 0;
      }
    }
  }

  @media (max-width: 1199px) {
    .layers {
      max-width: 500px;
      top: -100px;
      left: -20px;
    }

    .about {
      padding: 106px 0 42px;
      overflow: hidden;

      &__title {
        margin-bottom: 46px;
      }

      &__img {
        max-width: 500px;
      }
    }

    .reasons {
      padding: 50px 0 0;

      &__row:last-child {
        max-width: 612px;
        margin-top: 30px;
      }

      &__icon {
        max-width: 40px;
      }
    }
  }

  @media (max-width: 991px) {
    .layers {
      top: -500px;
      left: 250px;
    }

    .reasons {
      &__row:last-child {
        max-width: 464px;
      }

      &__icon {
        max-width: 30px;
      }
    }

    .about {
      padding-bottom: 128px;

      &__img {
        display: none;
      }
    }
  }

  @media (max-width: 767px) {
    .layers {
      max-width: 400px;
      top: -500px;
      left: 130px;
      z-index: 1;
      right: 0;
    }

    .about {
      padding: 50px 0;

      &__title {
        margin-bottom: 22px;
      }
    }

    .reasons {
      padding-bottom: 25px;

      &__row {
        flex-wrap: wrap;

        &:last-child {
          margin: 0;
          max-width: 100%;
        }
      }
    }
  }

  @media (max-width: 575px) {
    .layers {
       display: none;
    }

    .about {
      &__us {
        padding-top: 0;
      }
    }
  }
</style>
