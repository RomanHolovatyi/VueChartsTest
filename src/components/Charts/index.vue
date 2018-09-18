<template>
  <section class="chart-section-wrapper">
    <div>
      <h1>Top 100 transactions by region on timeline</h1>
      <!--<vue-c3 :handler="handler"></vue-c3>-->
      <!--<div id="chart"></div>-->
      <GChart
        type="ColumnChart"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  import c3 from 'c3'
  import 'd3/dist/d3.min.js'
  import { GChart } from 'vue-google-charts'

  export default {
    name: 'Chart',
    components: {
      VueC3,
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
        handler: new Vue(),
        chartData: [
          ["Year", "Sales", "Expenses", "Profit"],
          ["2014", 1000, 400, 200],
          ["2015", 1170, 460, 250],
          ["2016", 660, 1120, 300],
          ["2017", 1030, 540, 350]
        ],
        chartOptions: {
          chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017"
          }
        }
      }
    },
    watch: {
      transactions: {
        handler (newVal) {
          if (newVal.length) {
            this.chartData = [...this.transactions]
            this.showSpinner = false
          }

          this.showSpinner = true
        },
        immeditate: true
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