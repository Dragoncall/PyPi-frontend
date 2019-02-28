<template>
  <div>
    <v-dialog lazy v-model="enabled" max-width="90vw">
      <v-card>
        <v-card-title>
          Add Soundcloud Track
        </v-card-title>
        <v-card-text>
          <toast-component ref="toast_loading" message="Sending song..." type="info"></toast-component>
          <toast-component ref="toast" message="Added song" type="success"></toast-component>
          <searchbar @searched="updateSearch"></searchbar>
          <!--<v-text-field v-model="url" label="SoundCloud Video URL" placeholder=""></v-text-field>
          <v-btn block color="accent" dark @click="sendSong">Save</v-btn>-->
          <v-list>
            <song-result-view :track="track" v-for="track in searchResults" v-bind:key="track.uri" @click="addSong">

            </song-result-view>
            <!--<v-list-tile @click="addSong(track.url)" v-for="track in searchResults" v-bind:key="track.uri">
              <v-list-tile-avatar>
                <img :src="track.image">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="track.title"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>add</v-icon>
              </v-list-tile-action>
            </v-list-tile>-->
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn color="accent" flat @click.stop="enabled=false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import Searchbar from '../../misc/SearchBar.vue'
import RequestFormatter from '../../../js/RequestFormatter'
import ToastComponent from '../../sharedComponents/ToastComponent'
import SongResultView from './SongResultView'

export default {
  components: {SongResultView, ToastComponent, Searchbar},
  name: 'soundcloud-add',
  data: () => ({
    url: '',
    searchResults: []
  }),
  watch: {
    enabled () {
      if (!this.enabled) {
        this.onClose()
      }
    }
  },
  methods: {
    sendSong () {
      console.log(this.url)
      // https://soundcloud.com/viktor_dub/big-bug-dub
      axios.post(RequestFormatter.createRequest('songs/add/soundcloud'), {song: this.url})
      this.enabled = false
    },
    async updateSearch (input) {
      let tracks = await axios.get(RequestFormatter.createRequest('songs/search-soundcloud?query=' + input))
      console.log(tracks)
      this.searchResults = null
      this.searchResults = tracks.data
    },
    async addSong (url) {
      this.$refs.toast_loading.setActive(true)
      this.$emit('addSong', await axios.post(RequestFormatter.createRequest('songs/add/soundcloud'), {song: url}))
      this.$refs.toast.setActive()
      this.$refs.toast_loading.setActive(false)
    }
  },
  props: {
    enabled: Boolean,
    onClose: Function
  }
}
</script>

<style>

</style>
