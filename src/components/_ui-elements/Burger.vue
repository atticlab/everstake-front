<template>
  <button class="burger">
    <span class="burger__line"></span>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
  </button>
</template>

<script>
export default {
  name: 'Burger',
  onClick: {
    type: Function,
  },
};
</script>

<style lang="scss" scoped>
  .burger {
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 30px;
    padding: 0;
    align-self: center;

    &__line {
      display: block;
      background: $blue--dark;
      height: 6px;
      width: 100%;
      margin-bottom: 5px;

      &:nth-child(even) {
        max-width: 80%;
        margin-left: auto;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 575px) {
    .burger {
      max-height: 22px;
      max-width: 27px;

      &__line {
        max-height: 4px;
        margin-bottom: 3px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
