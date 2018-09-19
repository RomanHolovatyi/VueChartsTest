<template>
  <div id="app">
    <transition name="fade">
      <div
        v-if="loading"
        class="spinner-wrapper"
      >
        <scale-loader
          :loading="loading"
          :color="'blue'"
        />
      </div>
      <div v-else>
        <selector
          v-model="selectedRegion"
          :regionsList="regions"
        />
        <charts
          v-if="selectedRegion && transactions"
          :transactions="transactions"
        />
      </div>
    </transition>
  </div>
</template>

<script>
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
        loading: true,
        selectedRegion: ''
      }
    },
    watch: {
      selectedRegion () {
        this.getTransactionsList(this.selectedRegion)
      }
    },
    methods: {
      async getRegionsList () {
        try {
          this.loading = true
          this.regions = (await this.$axios.get(api.regions.getRegions())).data
        } catch (err) {
          console.log(err)
        } finally {
          this.loading = false
        }
      },
      async getTransactionsList (regionCode) {
        try {
          this.loading = true
          this.transactions = (await this.$axios.get(api.transactions.getTransactions(), { params: { region: regionCode }})).data
          const sortedTransactions = this.transactions.sort((a, b) => a.trans_date.localeCompare(b.trans_date))
          this.transactions = sortedTransactions.map((item) => {
            return [item.trans_date, item.amount]
          })
          this.transactions = [
            [ 'Date', 'Amount' ],
            ...this.transactions
          ]
          this.loading = false
        } catch (err) {
          console.error(err)
        }
      }
    },
    mounted () {
      this.getRegionsList()
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
  }

  .spinner-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
