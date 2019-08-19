
<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'NewPageChartContainer',
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
      // this.data.datasets[0].backgroundColor = this.generateChartGradient;
      this.data.datasets [{
        borderColor: '#444F5B',
        pointBorderColor: '#444F5B',
        pointBackgroundColor: '#444F5B',
        pointHoverBackgroundColor: '#444F5B',
        pointHoverBorderColor: '#444F5B',
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        fill: true,
        // backgroundColor: gradient,
        borderWidth: 2,
        data: [75, 130, 120, 170, 150, 120, 130, 90, 110, 140, 145, 110, 160, 140, 230],
        lineTension: 0,
      }]
    }

    this.renderChart(this.data, this.options);
  },
};
</script>

<style scoped>

</style>
