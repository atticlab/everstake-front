<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'HistoryChart',
  extends: Line,
  props: ['data', 'options'],
  computed: {
    generateChartGradient() {
      const gradient = this.$refs.canvas.getContext('2d').createLinearGradient(500, 0, 100, 0);
      gradient.addColorStop(1, 'rgba(0, 145, 253, 0.3)');
      gradient.addColorStop(0, 'rgba(0,145,253,0.4)');
      return gradient;
    },
  },
  mounted() {
    if (this.data) {
      this.data.datasets[0].backgroundColor = this.generateChartGradient;
    }
    this.renderChart(this.data, this.options);
  },
};
</script>

<style scoped>
</style>
