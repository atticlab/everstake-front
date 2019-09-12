<template>
  <div class="coin">
    <div class="coin__icon">
      <slot name="icon"></slot>
    </div>
    <h5 :class="{ 'coin__name': true,
                  'coin__name--disabled': noCoin }">
      <slot name="name"></slot>
    </h5>
    <div class="coin__percent">
      <slot name="percent"></slot>
    </div>
    <p :class="{ coin__description: true,
                 'mb-0': noLink}">
      <slot name="description"></slot>
    </p>
    <!--<a href="#" :class="{ 'coin__btn': true,-->
                          <!--'d-none': noLink }">-->
      <!--{{ $t('home.stakeNow') }}-->
    <!--</a>-->
    <slot name="routerLink"></slot>
  </div>
</template>

<script>
export default {
  name: 'CoinPresentation',
  props: {
    noLink: Boolean,
    noImg: Boolean,
    noCoin: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .coin {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 105px;
    min-height: 408px;

    &__icon {
      background-color: $blue--dark-pastel;
      width: 144px;
      height: 144px;
      border-radius: 50%;
      border: 20px solid $blue--grey;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
    }

    &__name {
      color: $white;
      font-size: 30px;
      font-weight: 300;
      text-align: center;

      &--disabled {
        color: $grey--asphalt;
      }
    }

    &__percent {
      color: $blue--bright-2;
      font-size: 21px;
      line-height: 22px;
      margin-top: 18px;
      margin-bottom: 18px;
    }

    &__description {
      color: $blue--grey-alt;
      font-size: 17px;
      text-align: center;
      line-height: 22px;
      margin-bottom: 22px;
      min-height: 66px;
    }

    &__btn {
      color: $white;
      width: 193px;
      height: 42px;
      font-size: 17px;
      box-shadow: 0 11px 16px $shadow--dark;
      border-radius: 100px;
      border: 1px solid $blue--grey-2;
      background-color: $blue--grey-3;
      text-align: center;
      line-height: 40px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        background-color: $blue--grey-3-30;
      }

      &:active {
        background-color: $blue--grey-3-25;
      }
    }
  }

  @media (max-width: 1199px) {
    .coin {
      min-height: 284px;
      margin-bottom: 70px;

      &__icon {
        max-width: 110px;
        max-height: 110px;
        margin-bottom: 18px;
        border: 15px solid $blue--grey;

        & > img {
          transform: scale(0.75);
        }
      }

      &__percent {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      &__description {
        font-size: 14px;
        margin-bottom: 0;
        min-height: 80px;
      }

      &__btn {
        font-size: 14px;
        line-height: 31px;
        width: 147px;
        height: 32px;
      }
    }
  }

  @media (max-width: 767px) {
    .coin {
      &__description {
        min-height: 60px;
      }
    }
  }

  @media (max-width: 575px) {
    .coin {
      margin-bottom: 44px;
      min-height: auto;

      &__name {
        font-size: 24px;
      }

      &__description {
        min-height: auto;
        margin-bottom: 22px;
      }
    }
  }
</style>
