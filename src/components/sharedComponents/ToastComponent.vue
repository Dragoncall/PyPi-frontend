<template>
  <v-alert
    :value="active"
    :type="type"
  >
    {{message}}
  </v-alert>
</template>

<script>
export default {
  name: 'ToastComponent',
  props: ['message', 'type'],
  data: () => ({
    active: false
  }),
  methods: {
    setActive (value = true) {
      this.active = value
      if (value === true) {
        setTimeout(() => { this.active = false }, 2000)
      }
    }
  }
}
</script>

<style scoped>

</style>
