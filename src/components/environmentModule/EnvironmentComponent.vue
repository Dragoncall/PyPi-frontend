<template>
    <div>

      <!--
      <v-card color="cyan darken-2" class="white--text mb-3 mt-3">
        <v-layout>
          <v-flex xs5>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
              height="125px"
              contain
            ></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">Supermodel</div>
                <div>Foster the People</div>
                <div>(2014)</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          Rate this album
          <v-spacer></v-spacer>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
        </v-card-actions>
      </v-card>
      -->

      <v-layout class="mb-3 mt-3" justify-center>
        <v-flex xs12 sm8 md6>
          <graph-sheet
            :labels="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
            :values="[0, 1, 4, 0, 9, 4, 10, 6, 4, 20 , 30]"
            title="Temperature Graph"
            :gradient="['white']"
            :autodraw="true"
            :fill="false"
            color="red darken-4"
          ></graph-sheet>
        </v-flex>
      </v-layout>

      <v-layout class="mb-3 mt-3" justify-center>
        <v-flex xs12 sm8 md6>
          <graph-sheet
            :labels="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
            :values="[0, 1, 4, 0, 9, 4, 10, 6, 4, 20 , 30]"
            title="Humidity Graph"
            :gradient="['white']"
            :autodraw="true"
            :fill="false"
            color="blue darken-3"
          ></graph-sheet>
        </v-flex>
      </v-layout>

      <v-layout class="mb-3 mt-3" justify-center>
        <v-flex xs12 sm8 md6>
          <graph-sheet
            :labels="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
            :values="[0, 1, 4, 0, 9, 4, 10, 6, 4, 20 , 30]"
            title="Pressure Graph"
            :gradient="['white']"
            :autodraw="true"
            :fill="false"
            color="dark"
          ></graph-sheet>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import GraphSheet from './GraphSheet'

export default {
  name: 'EnvironmentComponent',
  components: {GraphSheet}
}
</script>

<style scoped>
</style>
