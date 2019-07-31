<template>
  <div>
    <b-dropdown id="mobileDropdown"
                class="custom-dropdown"
                variant="link"
                right
                no-caret
                v-if="!isInternal">
      <template slot="button-content">
        <Burger></Burger>
      </template>
      <b-dropdown-item v-for="(navObj, index) in navLinks"
                       :key="index"
                       href="#"
                       v-scroll-to="navObj.hash"
                       :target="navObj.target">
        {{ navObj.name }}
      </b-dropdown-item>
      <b-dropdown-item target="_blank" href="https://t.me/everstake_chat">
        {{ this.$t('home.support') }}
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'staking' }">
        {{ this.$t('home.whatIsStaking') }}
      </b-dropdown-item>
    </b-dropdown>

    <b-dropdown id="mobileDropdowAlt"
                class="custom-dropdown m-md-2"
                variant="link"
                right
                no-caret
                v-else>
      <template slot="button-content">
        <Burger></Burger>
      </template>
      <b-dropdown-item v-for="(navObj, index) in navLinksInternal"
                       :key="index"
                       :href="navObj.hash"
                       :target="navObj.target">
        {{ navObj.name }}
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'staking' }">
        {{ this.$t('home.whatIsStaking') }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import Burger from '@/components/_ui-elements/Burger.vue';

export default {
  name: 'MobileMenu',
  components: {
    Burger,
  },
  props: {
    isInternal: Boolean,
  },
  data() {
    return {
      navLinks: [
        {
          hash: '#about',
          name: this.$t('home.about'),
          target: '_self',
        },
        {
          hash: '#team',
          name: this.$t('home.team'),
          target: '_self',
        },
        // {
        //   hash: 'https://t.me/everstake_chat',
        //   name: this.$t('home.support'),
        //   target: '_blank',
        // },
        {
          hash: '#coins',
          name: this.$t('home.stakeWithUs'),
          target: '_self',
        },
      ],
      navLinksInternal: [
        {
          hash: '\\',
          name: this.$t('coinPages.home'),
          target: '_self',
        },
        {
          hash: 'https://t.me/everstake_chat',
          name: this.$t('home.support'),
          target: '_blank',
        },
        {
          hash: '\\',
          name: this.$t('home.stakeWithUs'),
          target: '_self',
        },
      ],
    };
  },
  methods: {
    navigate(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
