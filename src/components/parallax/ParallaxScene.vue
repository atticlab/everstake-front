<template>
  <ul ref="scene"
      class="parallax-scene"
      :data-precision="precision"
      :data-pointer-events="pointerEvents"
      :data-calibrate-x="calibrateX"
      :data-calibrate-y="calibrateY"
      :data-invert-x="invertX"
      :data-invert-y="invertY"
      :data-limit-x="limitX"
      :data-limit-y="limitY"
      :data-scalar-x="scalarX"
      :data-scalar-y="scalarY"
      :data-friction-x="frictionX"
      :data-friction-y="frictionY"
      :data-origin-x="originX"
      :data-origin-y="originY">
    <slot></slot>
  </ul>
</template>

<script>
import Parallax from 'parallax-js';

export default {
  name: 'ParallaxScene',
  props: {
    precision: {
      type: Number,
    },
    pointerEvents: {
      type: Boolean,
    },
    calibrateX: {
      type: Boolean,
    },
    calibrateY: {
      type: Boolean,
    },
    invertX: {
      type: Boolean,
    },
    invertY: {
      type: Boolean,
    },
    limitX: {
      type: [Boolean, Number],
    },
    limitY: {
      type: [Boolean, Number],
    },
    scalarX: {
      type: Number,
    },
    scalarY: {
      type: Number,
    },
    frictionX: {
      type: Number,
    },
    frictionY: {
      type: Number,
    },
    originX: {
      type: Number,
    },
    originY: {
      type: Number,
    },
  },
  mounted() {
    this.parallax = new Parallax(this.$refs.scene, {
      relativeInput: true,
      clipRelativeInput: true,
      hoverOnly: true,
      frictionX: 0.17,
      frictionY: 0.17,
    });
  },
  beforeDestroy() {
    this.parallax.disable();
  },
};
</script>

<style lang="scss" scoped>
  .parallax-scene {
    position: absolute;
    padding: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
</style>
