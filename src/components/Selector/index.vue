<template>
  <section class="selector">
    <h1 class="selector__title">Please select region</h1>
    <select class="selector__select" v-model="selectedRegion" id="regionSelector">
      <option
        v-for="(item, index) in regionsList"
        :key="`option-${index}`"
        :value="item.regionCode"
      >
        {{ item.regionName }}
      </option>
    </select>
  </section>
</template>

<script>
  export default {
    name: 'Selector',
    props: {
      regionsList: {
        type: Array,
        required: true,
        default: () => ([])
      }
    },
    data () {
      return {
        selectedRegion: ''
      }
    },
    watch: {
      selectedRegion (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style>
</style>