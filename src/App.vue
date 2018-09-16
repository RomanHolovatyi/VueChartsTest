<template>
  <div id="app">
  </div>
</template>

<script>
  import { api } from '@/modules/api'

  export default {
    name: 'app',
    components: {
    },
    async mounted () {
      /* eslint-disable */
      const regions = await this.$axios.get(api.regions.getRegions())
      console.log('regions', regions)
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
