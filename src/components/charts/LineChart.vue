<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'LineChart',
  extends: Line,
  props: ['data', 'options'],
  computed: {
    generateChartGradient() {
      const gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 400, 0, 0);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(0, 'rgba(62, 224, 67, 0.7)');
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
