<template>
  <div>
    <v-dialog lazy v-model="enabled" max-width="90vw">
      <v-card>
        <v-card-title>
          Add Youtube Track
        </v-card-title>
        <v-card-text>
          <toast-component ref="toast" message="Added song" type="success"></toast-component>
          <search-bar :disabled="isLoading" @searched="updateSearch"></search-bar>
          <!--<v-text-field v-model="id" label="Youtube Video ID" placeholder="AQBh9soLSkI"></v-text-field>-->
          <!--<v-btn block color="accent" dark @click="id = id">Save</v-btn>-->

          <v-list>
            <v-list-tile v-for="track in searchResults" v-bind:key="track.uri">
              <v-list-tile-avatar>
                <img :src="track.image">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="track.title"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn block icon @click="addSong(track)"><v-icon>add</v-icon></v-btn>
              </v-list-tile-action>
            </v-list-tile>
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
import RequestFormatter from '../../../js/RequestFormatter'
import SearchBar from '../../misc/SearchBar.vue'
import ToastComponent from '../../sharedComponents/ToastComponent'

export default {
  name: 'youtube-add',
  components: {
    ToastComponent,
    SearchBar
  },
  data: () => ({
    id: '',
    isLoading: false
  }),
  methods: {
    async updateSearch (input) {
      this.isLoading = true
      let tracks = await axios.get(RequestFormatter.createRequest('songs/search-youtube?query=' + input))
      console.log(tracks)
      this.searchResults = null
      this.searchResults = tracks.data
      this.isLoading = false
    },
    async addSong (track) {
      this.$emit('addSong', await axios.post(RequestFormatter.createRequest('songs/add'), {song: track}))
      this.$refs.toast.setActive()
    }
  },
  watch: {
    enabled () {
      if (!this.enabled) {
        this.onClose()
      }
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
