<template>
  <section class="chart-section-wrapper">
    <div>
      <h1>Top 100 transactions</h1>
      <GChart
        type="ColumnChart"
        :data="transactions"
      />
    </div>
  </section>
</template>

<script>
  import { GChart } from 'vue-google-charts'

  export default {
    name: 'Chart',
    components: {
      GChart
    },
    props: {
      transactions: {
        type: Array,
        default: () => ([])
      }
    },
    data () {
      return {
        chart: null,
        showSpinner: true,
        options: {},
        chartData: []
      }
    }
  }
</script>

<style scoped>
  .chart-section-wrapper {
    position: relative;
  }

  .chart-spinner-wrapper {
    background-color: #fff;
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>