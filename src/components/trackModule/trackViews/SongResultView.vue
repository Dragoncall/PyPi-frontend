<template>
  <v-list-tile :disabled="disabled" @click="clicked()">
    <v-list-tile-avatar>
      <img :src="track.image">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title v-html="track.title"></v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-icon v-if="!disabled">add</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  name: 'SongResultView',
  props: ['track'],
  data: () => ({
    disabled: false
  }),
  methods: {
    clicked () {
      if (!this.disabled) {
        this.$emit('click', this.track.url)
        this.disabled = true
      }
    }
  }
}
</script>

<style scoped>

</style>
