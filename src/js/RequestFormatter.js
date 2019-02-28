import ConfigurationStore from '../store/configstore'

export default class RequestFormatter {
  static createRequest (endpoint) {
    let store = ConfigurationStore.getInstance()
    let ip = store.getValue('ip')
    let port = store.getValue('port')
    return 'http://' + ip + ':' + port + '/' + endpoint
  }
}
