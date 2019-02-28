<template>
  <div id="app">
    <v-app :dark="dark">
      <v-toolbar color="primary" class="primary white--text">
        <v-btn v-if="!isHomePage" flat @click="$router.back()" class="white--text">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title class="display-1 text-xs-center">PyPi-Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-tooltip bottom>
            <v-btn flat slot="activator" @click="dark = !dark" class="white--text">
              <v-icon>{{dark ? 'brightness_5' : 'brightness_3'}}</v-icon>
            </v-btn>
            <span>{{dark ? 'Light Mode' : 'Dark Mode'}}</span>
          </v-tooltip>
        </v-toolbar-items>
      </v-toolbar>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    dark: true,
    isHomePage: true
  }),
  watch: {
    $route () {
      console.log(this.$route.path)
      this.isHomePage = this.$route.path === '/'
    }
  },
  mounted () {
    this.isHomePage = this.$route.path === '/'
  }
}
</script>

<style>
</style>
