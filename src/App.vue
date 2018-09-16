<template>
  <div id="app">
    <charts :transactions="transactions" />
  </div>
</template>

<script>
  // TODO add try catch
  import { api } from '@/modules/api'
  import Charts from '@/components/Charts'
  import Selector from '@/components/Selector'

  export default {
    name: 'app',
    components: {
      Charts,
      Selector
    },
    data () {
      return {
        regions: [],
        transactions: []
      }
    },
    methods: {
      async setInitialData () {
        this.regions = (await this.$axios.get(api.regions.getRegions())).data
        this.transactions = (await this.$axios.get(api.transactions.getTransactions())).data
      }
    },
    mounted () {
      this.setInitialData()
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
