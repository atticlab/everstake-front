<template>
  <header class="header">
    <div class="header__left">
      <router-link :to="{name: 'home'}">
        <img src="~@/assets/img/logo.svg" alt="Everstake" class="logo d-none d-md-inline-block">
        <img src="~@/assets/img/logo-mob.svg" alt="Everstake" class="d-md-none">
      </router-link>
    </div>

    <div class="header__right">
      <nav class="nav-wrapper">
        <ul class="nav">
          <li class="nav__li">
            <router-link class="nav__link"
                         :to="{ name: 'home' }"
                          v-if="isInternal">
              {{ $t('coinPages.home') }}
            </router-link>
            <a href="#" v-scroll-to="'#about'" class="nav__link" v-else>
              {{ $t('home.aboutUs') }}
            </a>
          </li>
          <li class="nav__li">
            <CoinsDropdown></CoinsDropdown>
          </li>
          <li class="nav__li" v-if="!isInternal">
            <a href="#" v-scroll-to="'#team'" class="nav__link">
              {{ $t('home.team') }}
            </a>
          </li>
          <li class="nav__li">
            <a href="https://t.me/everstake_chat" class="nav__link"
               target="_blank"
               rel="noopener noreferrer">
              {{ $t('home.support') }}
            </a>
          </li>
          <li class="nav__li">
            <router-link :to="{ name: 'staking'}" class="nav__link">
              {{ $t('home.whatIsStaking') }}
            </router-link>
          </li>

          <li class="nav__li">
            <router-link :to="{ name: 'new_page'}" class="nav__link">
              {{ $t('home.new_page') }}
            </router-link>
          </li>

          <li class="nav__li">
            <router-link :to="{ name: 'home' }"
                         class="btn"
                         v-if="isInternal">
              {{ $t('home.stakeWithUs') }}
            </router-link>
            <a href="#" v-scroll-to="'#coins'" class="btn" v-else>
              {{ $t('home.stakeWithUs') }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="d-flex align-items-center d-lg-none">
        <CoinsDropdown class="mr-3"></CoinsDropdown>
        <MobileMenu class="d-lg-none" :isInternal="isInternal"></MobileMenu>
      </div>
    </div>
  </header>
</template>

<script>
import CoinsDropdown from '@/components/CoinsDropdown.vue';
import MobileMenu from '@/components/MobileMenu.vue';

export default {
  name: 'Header',
  components: {
    CoinsDropdown,
    MobileMenu,
  },
  props: {
    isInternal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .nav {
    list-style-type: none;
    padding: 0;

    &__li {
      display: flex;
      align-items: center;
      padding-right: 37px;
      &:last-child {
        padding-right: 0;
      }
    }

    &__link {
      color: $grey;
      font-size: 21px;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: $blue--bright;
        text-decoration: none;
      }

      &.router-link-exact-active.router-link-active {
        color: $blue--bright;
      }
    }
    .btn {
      text-decoration: none;
    }
  }

  @media (max-width: 1366px) {
    .logo {
      max-width: 200px;
    }

    .nav__li {
      padding-right: 30px;
    }

    .nav__link {
      font-size: 17px;
    }
  }

  @media (max-width: 1199px) {
    .nav__li {
      padding-right: 15px;
    }
  }

  @media (max-width: 991px) {
    .logo {
      max-width: 187px;
      max-height: 36px;
    }

    .nav-wrapper {
      display: none;
    }
  }

  @media (max-width: 575px) {
    .logo {
      max-width: 126px;
      max-height: 24px;
    }
  }
</style>
