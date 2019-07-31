<template>
  <div class="member">
    <div class="member__photo"
         :style="{ 'background-image': `url(${photo})`}">
    </div>

    <button :class="{ 'member__btn': true,
                      'member__btn--close': isDescriptionExpanded}"
            @click="toggleDescription">
      <img v-show="!isDescriptionExpanded"
           src="@/assets/img/icons/arrow.svg"
           alt="Up"
           class="member__btn-img">
      <img v-show="isDescriptionExpanded"
           src="@/assets/img/icons/cross.svg"
           alt="Up"
           class="member__btn-img">
    </button>

    <div :class="{ 'member__description': true,
                   'member__description--expanded': isDescriptionExpanded }">
      <div class="member__position">
        <slot name="position"></slot>
      </div>

      <div class="member__name">
        <slot name="name"></slot>
      </div>

      <div v-show="isDescriptionExpanded">
        <hr class="hr">
        <div class="member__vitae">
          <slot name="vitae"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    photo: String,
  },
  data() {
    return {
      isDescriptionExpanded: false,
    };
  },
  methods: {
    toggleDescription() {
      this.isDescriptionExpanded = !this.isDescriptionExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
  .member {
    width: 376px;
    height: 482px;
    border-radius: 6px;
    position: relative;
    backface-visibility: hidden;

    &__photo {
      background-position: top center;
      background-size: cover;
      height: 66%;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    &__img {
      width: 100%;
    }

    &__description {
      background-color: $violet--dark;
      height: 35%;
      width: 100%;
      padding: 30px 30px 22px;
      position: absolute;
      overflow: hidden;
      bottom: 0;
      transition: all 0.5s;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;

      &--expanded {
        height: 100%;
        overflow: auto;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
    }

    &__position {
      color: $white;
      font-size: 19px;
      font-weight: 500;
      line-height: 26px;
      margin-bottom: 28px;
    }

    &__name {
      color: $white;
      font-size: 30px;
      font-weight: 300;
      line-height: 32px;
    }

    &__vitae {
      color: $white;
      font-size: 17px;
      font-weight: 300;
      line-height: 26px;
    }

    &__btn {
      padding: 0;
      background: none;
      border-radius: 50%;
      border: 2px solid transparent;
      position: absolute;
      bottom: 31.5%;
      right: 8px;
      transition: all 0.5s;
      z-index: 1;
      height: 35px;
      width: 35px;

      &:hover {
        transform: scale(1.1);
      }

      &:focus {
        outline: none;
      }

      &--close {
        bottom: 96.5%;
      }
    }

    &__btn-img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1199px) {
    .member {
      max-width: 236px;
      max-height: 372px;

      &__position {
        font-size: 14px;
        margin-bottom: 16px;
        line-height: 21px;
      }

      &__name {
        font-size: 16px;
        line-height: 21px;
      }

      &__photo {
        height: 74%
      }

      &__description {
        padding: 18px 18px 14px;
        height: 36%;

        &--expanded {
          height: 100%;
        }
      }

      &__vitae {
        font-size: 14px;
      }

      &__btn {
        width: 30px;
        height: 30px;
        bottom: 32%;

        &--close {
          bottom: 96%;
        }
      }
    }
  }

  @media (max-width: 991px) {
    .member {
      max-width: 226px;

      &__btn-img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
</style>
