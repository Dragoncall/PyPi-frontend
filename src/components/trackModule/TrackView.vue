<template>
  <v-container>
    <p class="display-1 ma-3 text-xs-center">Track Module</p>

    <v-btn :disable="disableBluetooth" style="height: 10vh" color="accent" block @click="enableBluetooth">
      {{'Enable ' + (tracks ? 'Bluetooth' : 'Tracks')}}
    </v-btn>

    <v-jumbotron v-if="!tracks" src="/static/bluetooth.gif">
      <v-container fill-height>
        <v-layout align-center wrap>
          <v-flex xs12 text-xs-center>
            <h3 class="display-3 white--text" style="font-weight: 800; text-shadow: 0px 2px black">
              Streaming Bluetooth</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-card class="ma-3 pa-5" v-if="tracks">
      <v-card-title class="display-1">Current Tracks</v-card-title>
      <v-card-text v-if="currentTracks.length > 0">
        <v-layout wrap>
          <v-flex xs12 md6 lg6>
            <song-view :track="currentTracks[currentIndex]" @updateTracks="getTracks" :active="true"></song-view>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-subheader style="margin-bottom: 10px">Upcoming tracks</v-subheader>
            <div style="overflow-y: scroll; height: 50vh;">
              <div v-for="(track, i) in currentTracks" class="pa-3" style="display: block"
                   :key="track.id">
                <song-card :track="track" :active="currentIndex === i" :index="i" @selected="selectedSong"></song-card>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>

      <v-speed-dial style="position: absolute; right: 10px; bottom: 10px;"
                    v-model="fab"
                    direction="top"
                    open-on-hover
                    transition="scale-transition"
      >
        <v-btn slot="activator" color="blue darken-2" dark fab hover v-model="fab">
          <v-icon>add</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <!--TODO: add routes for this-->
        <v-btn @click="dialogs.youtube = true" fab dark small color="red">
          <i class="fab fa-youtube"></i>
        </v-btn>
        <v-btn @click="dialogs.spotify = true" fab dark small color="green">
          <i class="fab fa-spotify"></i>
        </v-btn>
        <v-btn @click="dialogs.soundcloud = true" fab dark small color="orange">
          <i class="fab fa-soundcloud"></i>
        </v-btn>
      </v-speed-dial>
    </v-card>

    <v-btn @click="resetBackend" block style="height: 10vh;">
      <span>
        <span class="display-1">Reset</span>
        <br>
        <span class="caption">(Cause sometimes, crashes happen)</span>
      </span>
    </v-btn>

    <v-card class="ma-3">
      <v-card-title class="display-1">Radios</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-tile style="margin-bottom: 100px" v-for="radio in radios" :key="radio.name">
            <v-list-tile-avatar tile size="100" style="margin-right: 10px">
              <img :src="radio.imageUrl">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title style="padding-bottom: 10px" class="title" v-text="radio.name"></v-list-tile-title>
              <a :href="radio.url" class="subheader" v-text="radio.url"></a>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon flat>
                <v-icon>play_circle_outline</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- DIALOGS -->
    <youtube-add :onClose="() => { this.dialogs.youtube = false }" :enabled="dialogs.youtube"></youtube-add>
    <soundcloud-add :addSong="(song) => {addTrack(song)}" :onClose="() => {this.dialogs.soundcloud = false; getTracks()}" :enabled="dialogs.soundcloud"></soundcloud-add>

  </v-container>
</template>

<script>
import YoutubeAdd from './trackViews/YoutubeAdd.vue'
import SoundcloudAdd from './trackViews/SoundcloudAdd.vue'
import SongView from './SongView.vue'
import axios from 'axios'
import RequestFormatter from '../../js/RequestFormatter'
import SongCard from './SongCard.vue'

export default {
  components: {
    SoundcloudAdd,
    YoutubeAdd,
    SongView,
    SongCard
  },
  data: () => ({
    currentTracks: [],
    currentIndex: 0,
    currentTrackProgress: (60 * 4 + 20),
    radios: [{
      title: 'King Dub Radio',
      url: 'http://kingdub.radio.net/',
      imageUrl: 'http://static.radio.net/images/broadcasts/94/e1/17830/c175.png'
    }],
    fab: false,
    tracks: true,
    dialogs: {
      youtube: false,
      spotify: false,
      soundcloud: false
    },
    disableBluetooth: false
  }),
  mounted () {
    this.getTracks()
    setInterval(() => { this.getTracks(); this.getBluetoothState() }, 5000)
  },
  methods: {
    formatTime (number) {
      number = Math.floor(number / 1000)
      return Math.floor(number / 60) + ':' + number % 60
    },
    refillFromSongInfo (songInfo) {
      this.currentIndex = songInfo.data['index']
      this.currentTracks = null
      let x = []
      for (let i = 0; i < Object.keys(songInfo.data['songs']).length; i++) {
        x.push(songInfo.data['songs'][i])
      }
      this.currentTracks = x
      console.log(this.currentTracks)
      this.$forceUpdate()
    },
    async getTracks () {
      let songInfo = await axios.get(RequestFormatter.createRequest('songs'), {header: {'Accept': 'application/json'}})
      console.log(songInfo)
      this.refillFromSongInfo(songInfo)
    },
    addTrack (track) {
      let tracks = this.currentTracks
      this.currentTracks = null
      tracks.push(track)
      this.currentTracks = tracks
    },
    async selectedSong (index) {
      console.log('selected song')
      this.currentIndex = index
      await axios.post(RequestFormatter.createRequest('songs/play'), {index: index}, {header: {'Accept': 'application/json'}})
    },
    async resetBackend () {
      let songInfo = await axios.post(RequestFormatter.createRequest('songs/reset'), {}, {header: {'Accept': 'application/json'}})
      this.refillFromSongInfo(songInfo)
    },
    async enableBluetooth () {
      this.disableBluetooth = true
      console.log(this.tracks)
      await axios.post(RequestFormatter.createRequest('songs/bluetooth'), {'bluetooth': this.tracks})
      this.disableBluetooth = false
      this.tracks = !this.tracks
    },
    async getBluetoothState () {
      let data = await axios.get(RequestFormatter.createRequest('songs/bluetooth'))
      console.log(data['data']['bluetooth'])
      this.tracks = !data['data']['bluetooth']
    }
  },
  computed: {
  }
}
</script>
