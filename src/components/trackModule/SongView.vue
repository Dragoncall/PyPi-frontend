<template>
  <v-jumbotron :src="track.image">
    <v-container fill-height>
      <v-layout wrap align-center align-content-center>
        <v-flex xs12>
          <div class="text-xs-center">
            <h3 class="display-1 white--text hidden-xs-only" style="font-weight: 800; text-shadow: 0px 2px black">{{track.title}}</h3>
            <h3 class="body-1 white--text hidden-sm-and-up" style="font-weight: 800; text-shadow: 0px 2px black">{{track.title}}</h3>
          </div>
        </v-flex>
        <v-flex xs12 text-xs-center>
          <!--<a :href="track.url"
             class="subheading text-xs-center white--text"
             style="text-decoration: none;font-weight: 600; text-shadow: 0px 2px black">{{track.url}}</a>-->
          <div v-if="active">
            <p class="title ma-2" style="font-weight: 800; text-shadow: 0px 2px black">
              Length: {{formatTime(track.length)}}</p>
            <v-layout wrap align-center align-content-center>
              <v-flex>
                <v-btn icon v-if="active" @click="previous">
                  <v-icon>skip_previous</v-icon>
                </v-btn>
              </v-flex>

              <v-flex>
                <v-btn icon v-if="active" @click="pause">
                  <v-icon>{{playingIcon}}</v-icon>
                </v-btn>
              </v-flex>

              <v-flex>
                <v-btn icon v-if="active" @click="next">
                  <v-icon>skip_next</v-icon>
                </v-btn>
              </v-flex>

            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
import axios from 'axios'
import RequestFormatter from '../../js/RequestFormatter'

export default {
  components: {},
  props: ['track', 'active'],
  data: () => ({
    currentTrackProgress: (60 * 4 + 20),
    isPlaying: true
  }),
  mounted () {
  },
  methods: {
    formatTime (number) {
      number = Math.floor(number / 1000)
      return Math.floor(number / 60) + ':' + (number % 60)
    },
    async previous () {
      await axios.post(RequestFormatter.createRequest('songs/previous'))
      this.$emit('updateTracks', -1)
      this.isPlaying = true
    },
    async pause () {
      await axios.post(RequestFormatter.createRequest('songs/pause'))
      this.isPlaying = !this.isPlaying
      this.$emit('updateTracks', 0)
    },
    async next () {
      await axios.post(RequestFormatter.createRequest('songs/next'))
      this.$emit('updateTracks', +1)
      this.isPlaying = true
    },
    async deleteSong () {
      await axios.post(RequestFormatter.createRequest('songs/song'), {'title': this.track.title})
      this.$emit('updateTracks', 0)
      this.isPlaying = true
    }
  },
  computed: {
    playingIcon () {
      return (this.isPlaying ? 'pause' : 'play_arrow')
    }
  }
}
</script>
