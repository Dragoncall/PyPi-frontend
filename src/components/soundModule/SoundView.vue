<template>
  <v-container>
    <p class="display-1 ma-3 text-xs-center">Sound Module</p>
    <v-card>
      <v-card-title class="display-1" style="font-weight: 600; text-align: center">Sound Settings</v-card-title>

      <v-subheader class="title">Media volume</v-subheader>
      <v-card-text>
        <v-slider prepend-icon="volume_up" v-model="soundLevel" color="accent"></v-slider>
      </v-card-text>

      <v-subheader class="title">Media Input/Output</v-subheader>
      <v-layout>
        <v-flex xs12 sm6>
          <v-subheader>Media Input</v-subheader>
          <v-card-text>
            <v-select :items="input" v-model="soundInput" prepend-icon="headset" color="accent"></v-select>
          </v-card-text>
        </v-flex>
        <v-flex xs12 sm6>
          <v-subheader>Media Output</v-subheader>
          <v-card-text>
            <v-select :items="output" v-model="soundOutput" prepend-icon="headset" color="accent"></v-select>
          </v-card-text>
        </v-flex>
      </v-layout>

    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // TODO: get from backend
    soundLevel: 50,
    input: ['Local', 'MusicCast', 'Bluetooth'],
    output: ['Speaker', 'USB-Headset'],
    soundInput: 'Local',
    soundOutput: 'Speaker'
  })
}
</script>
