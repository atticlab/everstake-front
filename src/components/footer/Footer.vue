<template>
  <footer class="footer">
    <b-container class="footer__container pos-rel">
      <div class="socials-wrapper">
        <div class="socials">
          <div class="socials__item">
            <a href="https://twitter.com/everstake_pool"
               class="socials__link"
               rel="noopener noreferrer"
               target="_blank">
              <img src="~@/assets/img/socials/twitter.svg"
                   alt="Twitter"
                   class="socials__img">
            </a>
          </div>
          <div class="socials__item">
            <a href="https://medium.com/everstake"
               class="socials__link"
               rel="noopener noreferrer"
               target="_blank">
              <img src="~@/assets/img/socials/medium.svg"
                   alt="Medium"
                   class="socials__img">
            </a>
          </div>
          <div class="socials__item">
            <a href="https://www.reddit.com/r/Everstake"
               class="socials__link"
               rel="noopener noreferrer"
               target="_blank">
              <img src="~@/assets/img/socials/reddit.svg"
                   alt="Reddit"
                   class="socials__img">
            </a>
          </div>
          <div class="socials__item">
            <a href="https://t.me/everstake_chat"
               class="socials__link"
               rel="noopener noreferrer"
               target="_blank">
              <img src="~@/assets/img/socials/telegram.svg"
                   alt="Telegram"
                   class="socials__img socials__img--tel">
            </a>
          </div>
        </div>

        <div class="socials__item">
          <a href="https://t.me/everstake_chat"
             class="socials__link"
             rel="noopener noreferrer"
             target="_blank">
            <img src="~@/assets/img/socials/support.svg"
                 alt="Support"
                 class="socials__img">
          </a>
        </div>
      </div>
    </b-container>

    <b-container class="pos-rel">
      <b-row>
        <b-col md="6" xl="3" class="mb-4 mb-xl-0">
          <FooterItem v-if="!isInternal">
            <template slot="title">
              {{ $t('home.product') }}
            </template>
            <template slot="content">
              <nav class="footer-nav">
                <ul class="footer-nav__list">
                  <li v-for="(navObj, index) in footerNav"
                      :key="index"
                      class="footer-nav__li">
                    <!--:href="navObj.link"-->
                    <a href="#"
                       v-scroll-to="navObj.link"
                       rel="noopener noreferrer"
                       class="link"
                       :target="navObj.target">
                      {{ navObj.name }}
                    </a>
                  </li>
                  <li class="footer-nav__li">
                    <a href="https://t.me/everstake_chat"
                       target="_blank"
                       class="link"
                       rel="noopener noreferrer">
                      {{ this.$t('home.support') }}
                    </a>
                  </li>
                  <li class="footer-nav__li">
                    <router-link :to="{name: 'techSurvey'}"
                       class="link">
                      {{ this.$t('home.techSurvey') }}
                    </router-link>
                  </li>
                </ul>
              </nav>
            </template>
          </FooterItem>

          <FooterItem v-else>
            <template slot="title">
              {{ $t('coinPages.usefulLinks') }}
            </template>
            <template slot="content">
              <nav class="footer-nav">
                <ul class="footer-nav__list">
                  <li class="footer-nav__li">
                    <a href="https://t.me/everstake_chat"
                       rel="noopener noreferrer"
                       class="link"
                       target="_blank">
                      t.me/everstake_chat
                    </a>
                  </li>
                  <li class="footer-nav__li">
                    <a href="https://www.reddit.com/r/Everstake"
                       rel="noopener noreferrer"
                       class="link"
                       target="_blank">
                      www.reddit.com/r/Everstake/
                    </a>
                  </li>
                </ul>
              </nav>
            </template>
          </FooterItem>
        </b-col>
        <b-col md="6" xl="3" class="mb-4 mb-xl-0">
          <FooterItem class="footer__middle-item" v-if="!isInternal">
            <template slot="title">
              {{ $t('home.about') }}
            </template>
            <template slot="content">
              {{ $t('home.everstakeHelpsShort') }}
            </template>
          </FooterItem>

          <FooterItem class="footer__middle-item footer__no-title-item"
                      :isNoTitle="true"
                      v-else>
            <template slot="content">
              <nav class="footer-nav mt-auto">
                <ul class="footer-nav__list">
                  <li class="footer-nav__li">
                    <a href="https://medium.com/everstake"
                       rel="noopener noreferrer"
                       class="link"
                       target="_blank">
                      medium.com/everstake
                    </a>
                  </li>
                  <li class="footer-nav__li">
                    <a href="https://twitter.com/everstake_pool"
                       rel="noopener noreferrer"
                       class="link"
                       target="_blank">
                      twitter.com/everstake_pool
                    </a>
                  </li>
                </ul>
              </nav>
            </template>
          </FooterItem>
        </b-col>
        <b-col md="6" xl="3" class="mb-4 mb-md-0">
          <FooterItem class="footer__middle-item">
            <template slot="title">
              {{ $t('home.contactUs') }}
            </template>
            <template slot="content">
              <div class="mb-1">
                <a href="mailto:inbox@everstake.one" class="link">
                  inbox@everstake.one
                </a>
              </div>
              <div>
                <a href="tel:+1 650 360 54 49" class="link">
                  +1 650 360 54 49
                </a>
              </div>
            </template>
          </FooterItem>
        </b-col>
<!--        <b-col md="6" xl="3">-->
<!--          <FooterItem class="footer__last-item">-->
<!--            <template slot="title">-->
<!--              {{ $t('home.subscribe') }}-->
<!--            </template>-->
<!--            <template slot="content">-->
<!--              <form action="#">-->
<!--                <div class="d-flex justify-content-between">-->
<!--                  <form action="https://formspree.io/Inbox@atticlab.net"-->
<!--                        method="POST"-->
<!--                        class="d-flex">-->
<!--                    <input type="email"-->
<!--                           class="input mr-2"-->
<!--                           name="email"-->
<!--                           :placeholder="$t('home.yourEmail')"-->
<!--                           required>-->
<!--                    <button class="send">-->
<!--                      <img src="~@/assets/img/icons/arrow-right.svg" alt="Send">-->
<!--                    </button>-->
<!--                  </form>-->
<!--                </div>-->
<!--              </form>-->
<!--            </template>-->
<!--          </FooterItem>-->
<!--        </b-col>-->
      </b-row>
      <b-row>
        <b-col>
          <div class="footer__bottom">
            <div class="mr-sm-5 mb-2 mb-sm-0">© 2019 Everstake</div>
            <div>Website Development: Attic Lab</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import FooterItem from '@/components/footer/FooterItem.vue';

export default {
  name: 'Footer',
  components: {
    FooterItem,
  },
  data() {
    return {
      footerNav: [
        {
          link: '#about',
          name: this.$t('home.aboutUs'),
        },
        {
          link: '#coins',
          name: this.$t('home.coins'),
        },
        {
          link: '#team',
          name: this.$t('home.team'),
        },
      ],
    };
  },
  props: {
    isInternal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .footer {
    background: $blue--dark;
    /*padding: 114px 0 26px;*/
    padding: 0 0 26px;
    position: relative;
    flex-shrink: 0;

    &__bottom {
      color: $grey--asphalt-50;
      font-size: 15px;
      display: flex;
      justify-content: flex-end;
    }

    &__middle-item {
      margin: 0 auto;
    }

    &__last-item {
      margin-left: auto;
    }

    &__no-title-item {
      display: flex;
      align-items: flex-end;
      height: 100%;
    }

    &__container {
      padding-bottom: 114px;
    }
  }

  .footer-nav {
    &__list {
      list-style-type: none;
      padding: 0;
      margin-bottom: 0;
    }

    &__li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .socials-wrapper {
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    top: -32px;
    width: 100%;
    left: 0;
  }

  .socials {
    display: flex;
    justify-content: space-between;
    width: 308px;

    &__item {
      background: $blue--grey-3;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }

    &__link {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__img--tel {
      position: relative;
      margin-right: 3px;
    }
  }

  @media (max-width: 1199px) {
    .footer {
      &__middle-item, &__last-item {
        margin: 0;
      }

      &__bottom {
        margin-top: 30px;
        justify-content: flex-start;
      }
    }

    .socials-wrapper {
      max-width: 970px;
    }
  }

  @media (max-width: 991px) {
    .socials-wrapper {
      max-width: 740px;
    }
  }

  @media (max-width: 767px) {
    .socials-wrapper {
      max-width: 550px;
    }
  }

  @media (max-width: 575px) {
    .footer {
      &__bottom {
        flex-direction: column;
      }
    }

    .socials-wrapper {
      top: -20px;
    }

    .socials {
      max-width: 184px;

      &__item {
        max-width: 40px;
        max-height: 40px;
      }

      &__img {
        max-width: 20px;
      }
    }
  }
</style>
