<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  async mounted () {
    /* eslint-disable */
    const asd = await this.$axios.get('https://cors-anywhere.herokuapp.com/http://api.spending.gov.ua/api/v2/dictionaries/regions')
    console.log('asd', asd)
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
