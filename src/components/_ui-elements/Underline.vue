<template>
  <span :class="{ underline: true,
                  underline__grey: mode === 'grey',
                  underline__violet: mode === 'violet',
                  underline__blue: mode === 'blue',
                  underline__small: size === 'small',
                  underline__middle: size === 'middle' }">
    <span :class="{ underline__circle: true,
                    'd-none': noDot}"></span>
    <span class="underline__line"></span>
  </span>
</template>

<script>
export default {
  name: 'Underline',
  props: {
    mode: String,
    size: String,
    noDot: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .underline {
    display: flex;
    justify-content: space-between;
    max-width: 106px;
    margin-top: 3px;
    height: 8px;

    &__circle {
      background: $blue--pastel;
      border-radius: 50%;
      width: 8px;
      height: 100%;
      margin-right: 8px;
    }

    &__line {
      background: $grey--light;
      height: 100%;
      width: 85%;
      border-radius: 8px;
    }

    &__grey {
      .underline__circle {
        background: $white;
      }

      .underline__line {
        background: $grey;
      }
    }

    &__violet {
      .underline__circle {
        background: $white;
      }

      .underline__line {
        background: $blue--grey-3;
      }
    }

    &__blue {
      .underline__line {
        background: $blue--bright-2;
      }
    }

    &__small {
      max-height: 5px;
      max-width: 74px;

      .underline__circle {
        max-width: 5px
      }
    }

    &__middle {
      max-width: 90px;
    }
  }

  @media (max-width: 1199px) {
    .underline--middle {
      max-width: 46px;
      max-height: 4px;
    }
  }

  @media (max-width: 991px) {
    .underline__middle {
      max-width: 44px;
      max-height: 4px;
    }
  }

  @media (max-width: 575px) {
    .underline {
      max-width: 55px;
      max-height: 4px;

      &__circle {
        max-width: 4px;
      }
    }
  }
</style>
