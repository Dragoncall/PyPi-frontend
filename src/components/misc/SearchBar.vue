<template>
  <v-text-field
    label="Search..."
    v-model="input"
    :disabled="disabled"
  >

  </v-text-field>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'searchbar',
  props: {
    'disabled': {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data: () => ({
    input: ''
  }),
  watch: {
    input: _.debounce(function () {
      console.log('Searching...')
      this.$emit('searched', this.input)
    }, 500)
  }
}
</script>
