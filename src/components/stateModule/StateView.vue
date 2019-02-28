<template>
    <div>
      <p class="display-1 ma-3 text-xs-center">State Module</p>

      <v-layout class="mt-3 mb-3" justify-center>
        <v-flex xs12 sm8 md6>
          <v-card>
            <v-card-text>
              <p class="title">IP-Adress</p>
              <p class="display-1 text-xs-center" @click="copyToClipboard">{{ip}}</p>
            </v-card-text>
            <toast-component ref="toast" message="Copied IP to clipboard" type="info"></toast-component>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import axios from 'axios'
import RequestFormatter from '../../js/RequestFormatter'
import ToastComponent from '../sharedComponents/ToastComponent'
export default {
  name: 'StateView',
  components: {ToastComponent},
  data: () => ({
    ip: ''
  }),
  mounted () {
    this.setIP()
  },
  methods: {
    setIP () {
      this.getIP().then(ip => { this.ip = ip })
    },
    async getIP () {
      let ip = await axios.get(RequestFormatter.createRequest('state'))
      console.log(ip['data']['ip'])
      return ip['data']['ip']
    },
    async copyToClipboard () {
      await navigator.clipboard.writeText(this.ip)
      this.$refs.toast.setActive()
    }
  }
}
</script>

<style scoped>

</style>
