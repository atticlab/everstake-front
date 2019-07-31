<template>
  <div>
    <b-dropdown id="coinsDropdown"
                class="custom-dropdown"
                variant="link"
                right
                :text="$t('home.coins')">
<!--      @click="navigate(routeName)"-->
      <b-dropdown-item v-for="(routeName, index) in coinsLinks"
                       :key="index"
                       :to="{ name: routeName }">
          {{ routeName }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'CoinsDropdown',
  data() {
    return {
      coinsLinks: [
        'tezos',
        'iost',
        'waves',
        'cosmos',
        'eos',
        'dash',
        'qtum',
        'irisnet',
        'decred',
        'ark',
        'etherZero',
        'iotex',
        'algorand',
        'harmony',
        'nkn',
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
