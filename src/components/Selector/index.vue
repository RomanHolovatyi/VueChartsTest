<template>
  <section class="selector">
    <h1 class="selector__title">Please select region</h1>
    <select
      class="selector__select"
      @input="event => { $emit('input', event.target.value) }"
      v-model="selectedOption"
    >
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
      },
      value: null,
    },
    data () {
      return {
        selectedOption: null
      }
    },
    watch: {
      selectedRegion: {
        handler (val) {
          this.selectedOption = val
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .selector {
    &__select {
      width: 100%;
      padding: 5px 10px;
      margin: 5px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      max-width: 200px;
      box-sizing: border-box;
    }
  }
</style>