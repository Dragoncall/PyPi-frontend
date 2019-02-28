<template>
    <div>
      <v-layout justify-center>
        <v-btn style="min-width: 50vw;" @click="updateWeather" class="info"><span>Update Weather <v-icon>refresh</v-icon></span></v-btn>
      </v-layout>
      <v-layout v-if="weatherData !== 0" class="mb-3 mt-3" justify-center>
        <v-flex xs12 sm8 md6>
          <v-sheet dark elevation="12" class="pa-3">
            <v-layout wrap justify-center class="text-xs-center">
              <v-flex xs12 sm6 md4>
                <skycon color="white" :width="200" :height="200" condition="clear-day" ></skycon>
              </v-flex>
              <v-flex xs12 sm6 md8 class="text-xs-left pl-3">
                <p class="hidden-xs-only display-3">{{weatherData['currently']['summary']}}</p>
                <p class="hidden-sm-and-up title">{{weatherData['currently']['summary']}}</p>
                <!--<span class="mr-3"><v-icon>fa-thermometer-half</v-icon></span>-->
                <p class="display-1">{{weatherData['currently']['temperature']}}˚C | {{weatherData['currently']['pressure']}} Bar</p>
                <v-layout wrap>
                  <v-flex xs12 lg6>
                    <p class="title"><span class="mr-3"><v-icon>fa-tint</v-icon></span> {{weatherData['currently']['precipIntensity']}} mm | {{weatherData['currently']['precipProbability']}}%</p>
                  </v-flex>
                  <v-flex xs12 lg6>
                    <p class="title"><span class="mr-3"><v-icon>fa-water</v-icon></span>{{weatherData['currently']['humidity'] * 100}}% Humidity</p>
                  </v-flex>
                  <v-flex xs12 lg6>
                    <p class="title"><span class="mr-3"><v-icon>fa-wind</v-icon></span> {{weatherData['currently']['windSpeed']}} Km/H</p>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-sheet>
        </v-flex>
      </v-layout>
      <environment-component></environment-component>
    </div>
</template>

<script>
import EnvironmentComponent from './EnvironmentComponent'
import axios from 'axios'
import RequestFormatter from '../../js/RequestFormatter'
export default {
  name: 'GlobalEnvironmentComponent',
  components: {EnvironmentComponent},
  mounted () {
    this.updateWeather()
  },
  data: () => ({
    weatherData: 0
  }),
  methods: {
    updateWeather () {
      this.getWeather().then((x) => {
        this.weatherData = x['data']
        console.log(this.weatherData)
      })
    },
    async getWeather () {
      return axios.get(RequestFormatter.createRequest('weather'))
    }
  }
}
</script>

<style scoped>

</style>
