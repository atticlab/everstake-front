<template>
  <CardAlt>
    <div :class="{ 'link-card': true,
                   'justify-content-center': textCenter,
                   'w-100': textCenter }">
      <img class="link-card__img"
           src="~@/assets/img/icons/link.svg"
           alt="Link">

      <a :href="linkAddress"
         class="link-card__link"
         target="_blank"
         rel="noopener noreferrer">
        <slot name="link-txt">
        </slot>
      </a>
    </div>
  </CardAlt>
</template>

<script>
import CardAlt from '@/components/_ui-elements/CardAlt.vue';

export default {
  name: 'LinkCard',
  components: {
    CardAlt,
  },
  props: {
    linkAddress: String,
    textCenter: Boolean,
  },
};
</script>

<style lang="scss" scoped>

  .link-card {
    display: flex;
    align-items: center;

    &__link {
      color: $grey--darker;
      font-size: 30px;
      font-weight: 300;
      transition: color 0.2s;

      &:hover, &:active {
        color: $black;
      }
    }

    &__img {
      max-width: 30px;
      margin-right: 10px;
    }
  }

  @media (max-width: 1199px) {
    .link-card {
      &__link {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 575px) {
    .link-card {
      display: block;
      width: 100%;

      &__img {
        margin: 0 auto 15px;
        display: block;
      }

      &__link {
        display: block;
        text-align: center;
      }
    }
  }
</style>
