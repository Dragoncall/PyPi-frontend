<template>
  <div>
    <p class="display-1 ma-3 text-xs-center">Environment Module</p>

    <v-tabs
      v-model="tab"
      fixed-tabs
    >
      <v-tab
        ripple
        href="#global"
      >
        Global Information
      </v-tab>

      <v-tab
        ripple
        href="#local"
      >
        Local Information
      </v-tab>
    </v-tabs>
    <global-environment-component v-if="tab === 'global'"></global-environment-component>
  </div>
</template>

<script>
import GraphSheet from './GraphSheet'
import EnvironmentComponent from './EnvironmentComponent'
import GlobalEnvironmentComponent from './GlobalEnvironmentComponent'
export default {
  name: 'EnvironmentView',
  components: {GlobalEnvironmentComponent, EnvironmentComponent, GraphSheet},
  data: () => ({
    tab: 'global'
  })
}
</script>

<style scoped>
</style>
