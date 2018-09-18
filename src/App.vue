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
        // this.transactions = (await this.$axios.get(api.transactions.getTransactions())).data
      },
      async getTransitons () {
        try {
          this.transactions = (await this.$axios.get(api.transactions.getTransactions())).data
          const sortedTransactions = this.transactions.sort((a, b) => a.trans_date.localeCompare(b.trans_date))
          // const ammountList = sortedTransactions.map((item) => item.amount )
          // const transactionsDates = Array.from(new Set(this.transactions.map((item) => item.trans_date ).sort()))
          // const uniqueDates = new Set(transactionsDates)
          this.transactions = sortedTransactions.map((item) => {
            return [item.trans_date, item.amount]
          })
          this.transactions = [
            [ 'Date', 'Amount' ],
            ...this.transactions
          ]
        } catch (err) {
          /* eslint-disable */
          console.warn('error in getTransactions')
          console.error(err)
        }
      }
    },
    mounted () {
      this.setInitialData()
      this.getTransitons()
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
