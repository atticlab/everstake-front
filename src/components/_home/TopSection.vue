<template>
  <section class="top pos-rel">
    <ParallaxScene v-if="!is991" :scalar-x="6" :scalar-y="5">
      <ParallaxLayer :depth="0.02">
        <img src="~@/assets/img/top-layers/bg.png"
             style="position: relative; top: -4px;"
             draggable="false" alt="#" class="w-autoh-100">
      </ParallaxLayer>
      <ParallaxLayer :depth="0.03">
        <img src="~@/assets/img/top-layers/7.png"
             style="position: relative; top: -4px;"
             draggable="false" alt="#" class="w-100 h-100 rotate">
      </ParallaxLayer>
      <ParallaxLayer :depth="0.03">
        <img src="~@/assets/img/top-layers/6.png"
             style="position: relative; top: -4px;"
             draggable="false" alt="#" class="w-100 h-100 rotate">
      </ParallaxLayer>
      <ParallaxLayer :depth="0.3">
        <img src="~@/assets/img/top-layers/5.png"
             style="position: relative; top: -4px;"
             draggable="false" alt="#" class="w-100 h-100">
      </ParallaxLayer>
      <ParallaxLayer :depth="0.15">
        <img src="~@/assets/img/top-layers/4.png"
             style="position: relative; top: -4px;"
             draggable="false" alt="#" class="w-100 h-100">
      </ParallaxLayer>
      <ParallaxLayer :depth="0.1">
        <img src="~@/assets/img/top-layers/3.png"
             style="position: relative; top: -4px;"
             draggable="false" alt="#" class="w-100 h-100">
      </ParallaxLayer>
      <ParallaxLayer :depth="0.9">
        <img src="~@/assets/img/top-layers/2.png"
             style="position: relative; top: -4px;"
             draggable="false" alt="#" class="w-100 h-100">
      </ParallaxLayer>
      <ParallaxLayer :depth="0.5">
        <img src="~@/assets/img/top-layers/1.png"
             style="position: relative; top: -4px;"
             draggable="false" alt="#" class="w-100 h-100">
      </ParallaxLayer>
    </ParallaxScene>

    <b-container class="pos-rel">
      <Header></Header>

      <b-row>
        <b-col md="9" lg="7" xl="6">
          <div class="top__intro">
            <h2 class="title title--grey text-capitalize">
              {{ $t('home.stakingService') }}
              <Underline></Underline>
            </h2>

            <p class="paragraph top__p">
              {{ $t('home.everstakeHelps') }}
            </p>

            <a href="#" v-scroll-to="'#coins'" class="btn top__btn">
              {{ $t('home.stakeNow') }}
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div class="mouse">
      <img src="~@/assets/img/scroll.svg" alt="Mouse">
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import Underline from '@/components/_ui-elements/Underline.vue';
import ParallaxScene from '@/components/parallax/ParallaxScene.vue';
import ParallaxLayer from '@/components/parallax/ParallaxLayer.vue';

export default {
  name: 'TopSection',
  components: {
    Header,
    Underline,
    ParallaxScene,
    ParallaxLayer,
  },
  data() {
    return {
      is991: false,
    };
  },
  methods: {
    handleResize() {
      this.is991 = window.matchMedia('(max-width:991px)').matches;
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
  .top {
    background: $gradient--light;
    height: 100vh;
    min-height: 700px;
    position: relative;
    overflow: hidden;

    &__intro {
      padding-top: 15vh;
    }

    &__p {
      padding-top: 9vh;
      padding-bottom: 12vh;
    }

    &__btn {
      width: 188px;
    }
  }

  .mouse {
    position: absolute;
    transform: translateX(-50%);
    right: 50%;
    bottom: 20px;
    animation: mouse 1.5s infinite;
  }

  @keyframes mouse {
    from {
      opacity: 1;
      bottom: 20px;
    }
    to {
      opacity: 0;
      bottom: 10px;
    }
  }

  @media (max-width: $laptop-width) {
    .top__p {
      padding-bottom: 12vh;
    }
  }

  @media (max-width: 991px) {
    .top {
      height: auto;
      background:
        url('~@/assets/img/top-layers/bg.png')
        top center no-repeat / cover, $gradient--light;

      &__intro {
        padding-top: 244px;
        padding-bottom: 384px;
      }

      &__p {
        padding: 38px 0 44px;
      }

      &__btn {
        padding: 18px 30px;
        font-size: 21px;
      }
    }

    .mouse {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .top {
      &__intro {
        padding: 126px 0;
      }

      &__btn {
        font-size: 16px;
        padding: 7px 20px;
        max-width: 144px;
      }
    }
  }
</style>
