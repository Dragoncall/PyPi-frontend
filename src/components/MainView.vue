<template>
  <v-container fluid>
    <v-layout wrap id="app">
      <v-flex xs12 sm6 md4 class="pa-3">
        <v-btn to="/state" class="img-button" block large color="black">
          <span class="title">Manage State</span>
          <div class="state-button"></div>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-3">
        <v-btn to="/sound" class="img-button" block large color="black">
          <span class="title">Manage Sound</span>
          <div class="music-button"></div>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-3">
        <div style="width: 100%; height: 100%">
          <v-btn to="/tracks" class="img-button" block large color="black">
            <span class="title">Manage Tracks</span>
            <div class="track-button"></div>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-3">
        <div style="width: 100%; height: 100%">
          <v-btn to="/environment" class="img-button" block large color="black">
            <span class="title">Manage Environment</span>
            <div class="environment-button"></div>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-3">
        <div style="width: 100%; height: 100%">
          <v-btn to="/calendar" class="img-button" block large color="black">
            <span class="title">Manage Calendar</span>
            <div class="calendar-button"></div>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-3">
        <!--color="green darken-4"-->
        <v-btn class="img-button" style="" block large color="black">
          <span class="title">To Be Released</span>
          <div class="lights-button"></div>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MainView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

  >>> .v-btn__content {
    position: static !important;
  }

  .img-button{
    /*width:30vw;*/
    height: 30vw;
    color: white;
  }

  .state-button {
    background: url("../assets/markus-spiske-507983-unsplash.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.4;
  }

  .music-button{
    background: url("../assets/markus-spiske-530811-unsplash.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
  }

  .track-button{
    background: url("../assets/luke-chesser-50-unsplash.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.4;
  }

  .environment-button{
    background: url("../assets/jason-blackeye-295313-unsplash.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
  }

  .calendar-button{
    background: url("../assets/maddi-bazzocco-1178337-unsplash.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.4;
  }

  .lights-button{
    background: url("../assets/guilherme-stecanella-366390-unsplash.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
  }
</style>
