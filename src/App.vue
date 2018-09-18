<template>
  <div id="app">
    <div v-if="loading" class="spinner-wrapper">
      <scale-loader
        :loading="loading"
        :color="'blue'"
      />
    </div>
    <div v-else>
      <selector @input="onSelectChange" :regionsList="regions"/>
      <charts :transactions="transactions" />
    </div>
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
        transactions: [],
        chosenRegion: '',
        loading: false
      }
    },
    methods: {
      async setInitialData () {
        this.regions = (await this.$axios.get(api.regions.getRegions())).data
      },
      async getTransactions (regionCode) {
        try {
          this.transactions = (await this.$axios.get(api.transactions.getTransactions(), { params: { region: regionCode }})).data
          const sortedTransactions = this.transactions.sort((a, b) => a.trans_date.localeCompare(b.trans_date))
          // const transactionsDates = Array.from(new Set(this.transactions.map((item) => item.trans_date ).sort()))
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
      },
      onSelectChange (regionCode) {
        try {
          this.selectedRegion = regionCode
          this.getTransactions(regionCode)
        } catch (err) {
          console.warn('error in onChange')
          console.error(err)
        }
      }
    },
    async mounted () {
      this.loading = true
      await this.setInitialData()
      this.loading = false
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

  .spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
