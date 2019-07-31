<template>
  <div class="coin-info">
  <div class="coin-info coin-info--top">
    <div class="coin-logo">
      <div class="coin-logo__inner">
        <img src="~@/assets/img/coins-presentation/tezos.svg" alt="tezos">
      </div>
    </div>

    <h1 class="coin-info__title">
      <slot name="title"></slot>
    </h1>
    <p class="coin-info__p">
      <slot name="subtitle"></slot>
    </p>

  </div>
  <b-row>
    <b-col>
      <div class="coin-info__card">

      </div>
    </b-col>
    <b-col>
      <div class="coin-info__card">

      </div>
    </b-col>
  </b-row>
  </div>
</template>

<script>
export default {
  name: 'CoinInfo',
};
</script>

<style lang="scss" scoped>
</style>
