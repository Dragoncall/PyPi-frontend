<template>
  <div>
    <v-card ref="card">
      <v-layout>
        <v-flex xs3 lg3>
          <div v-if="active" :style="'position: relative;top: 50%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);transform: translateY(-50%);' + (isDark ? '' : 'filter: brightness(0%);')">
            <v-layout justify-center>
              <img style="margin-right: auto; margin-left: auto; width: 100%;" src="../../assets/sound_spinner.svg"/>
            </v-layout>
          </div>
          <div v-else style="height: 100%">
            <v-btn @click="onSelect" flat large style="margin-right: auto; margin-left: auto; width: 100%; height: 100%">
              <v-icon large>play_arrow</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-divider
          class="mx-0"
          vertical
        ></v-divider>
        <v-flex xs3 lg5 style="padding-right: 8px; padding-left: 8px; padding-bottom: 8px;">
          <img :src="track.image" style="width: 100%; height: 100%;"/>
        </v-flex>
        <v-flex xs6 lg4 align-self-center>
          <p class="display-5" style="display: flex;justify-content: center;height: 100%; text-align: center">{{track.title}}</p>
        </v-flex>
      </v-layout>
    <!-- FOOTER -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['track', 'active', 'index'],
  methods: {
    onSelect () {
      this.active = true
      this.$emit('selected', this.index)
    }
  },
  computed: {
    isDark () {
      return true; // TODO: fix this
      // this.$refs.card.isDark
    }
  }
}
</script>
