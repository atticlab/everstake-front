<template>
  <div class="svg-container pos-rel">
    <svg class="sparkline--small svg-content"
         ref="spark"
         stroke-width="2"
         viewBox="0 0 100 30"
         width="100"
         height="30">
      {{ spark }}
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SparklineSmall',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sparklinesOptions: {
        spotRadius: 5,
        cursorWidth: 1,
      },
    };
  },
  computed: {
    spark() {
      if (!(this.data && this.data.length)) return null;
      return this.$sparkline(this.$refs.spark, this.data, this.sparklinesOptions);
    },
  },
};
</script>

<style lang="scss" scoped>
  .svg-container {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 30px;
  }
  .svg-content {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
