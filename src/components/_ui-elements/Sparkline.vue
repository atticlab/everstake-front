<template>
  <div class="svg-container pos-rel">
    <svg class="sparkline svg-content"
         ref="sparkline"
         stroke-width="1"
         viewBox="0 0 302 48"
         width="302"
         height="48"
         preserveAspectRatio="xMinYMin meet" >
      {{ sparkline }}
    </svg>
    <span class="tooltip-custom" hidden="true"></span>
  </div>
</template>

<script>
export default {
  name: 'Sparkline',
  props: {
    data: {
      // type: Array,
      required: true,
    },
    isValueUSD: Boolean,
  },
  computed: {
    sparkline() {
      if (!(this.data && this.data.length)) return null;
      return this.$sparkline(this.$refs.sparkline, this.data, this.sparklineOptions);
    },
    sparklineOptions() {
      const vm = this;
      return {
        spotRadius: 5,
        cursorWidth: 1,
        onmousemove(event, datapoint) {
          const svg = vm.findClosest(event.target, 'svg');
          const tooltip = svg.nextElementSibling;
          const format = new Date(datapoint.date.split('.').reverse().join('/'));
          const date = format.toUTCString().replace(/^.*?, (.*?) \d{2}:\d{2}:\d{2}.*?$/, '$1');


          tooltip.hidden = false;
          tooltip.textContent = vm.isValueUSD
            ? `${date}: $${(Math.round(datapoint.value) * 100) / 100}`
            : `${date}: ${(Math.round(datapoint.value) * 100) / 100}`;
          tooltip.style.top = `${event.offsetY}px`;
          tooltip.style.left = `${event.offsetX + 20}px`;
        },

        onmouseout(event) {
          const svg = vm.findClosest(event.target, 'svg');
          const tooltip = svg.nextElementSibling;

          tooltip.hidden = true;
        },
      };
    },
  },
  methods: {
    findClosest(target, tagName) {
      let localTarget = target;

      if (localTarget.tagName === tagName) {
        return localTarget;
      }

      localTarget = localTarget.parentNode;
      while (localTarget) {
        if (localTarget.tagName === tagName) {
          break;
        }
      }

      return localTarget;
    },
  },
};
</script>

<style lang="scss" scoped>
  .svg-container {
    display: inline-block;
    position: relative;
    width: 302px;
    height: 48px;
  }
  .svg-content {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }

  *[hidden] {
    display: none !important;
  }

  .tooltip-custom {
    position: absolute;
    background: $blue--grey-3;
    color: #fff;
    padding: 2px 5px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 9999;
    transition: all 0.2s;
    border-radius: 5px;
  }

  @media (max-width: 1199px) {
    .sparkline {
      max-width: 244px;
    }
  }

  @media (max-width: 991px) {
    .sparkline {
      max-width: 180px;
      max-height: 36px;
    }
  }

  @media (max-width: 767px) {
    .sparkline {
      max-width: 244px;
      max-height: 48px;
    }
  }
</style>
