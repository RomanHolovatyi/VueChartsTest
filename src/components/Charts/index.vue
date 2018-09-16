<template>
  <section class="chart-section-wrapper">
    <div>
      <h1>Top 100 transactions by region on timeline</h1>
      <vue-c3 :handler="handler"></vue-c3>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  export default {
    name: 'Chart',
    components: {
    },
    props: {
      transitions: {
        type: Array,
        default: () => ([])
      }
    },
    data () {
      return {
        chart: null,
        showSpinner: true,
        handler: new Vue()
      }
    },
    watch: {
      transitions: {
        handler (newVal, oldVal) {
          this.showSpinner = true
          if (prop('length', oldVal)) {
            oldVal.forEach((el, index) => {
              this.chart.unload({ ids: oldVal[index][0] })
            })
          }
          if (prop('length', newVal)) {
            setTimeout(() => {
              this.chart.load({ columns: newVal })
              this.showSpinner = false
            }, 350)
          }
        },
        immeditate: true
      }
    },
    mounted () {
      // to init the graph call:
      const options = {
        data: {
          columns: [
            ['data1', 2, 4, 1, 5, 2, 1],
            ['data2', 7, 2, 4, 6, 10, 1]
          ]
        }
      }
      this.handler.$emit('init', options)
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