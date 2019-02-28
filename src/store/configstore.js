export default class ConfigurationStore {
  static instance = undefined
  configMap = {};

  getValue (name) {
    return this.configMap[name]
  }

  setValue (name, value) {
    this.configMap[name] = value
  }

  removeValue (name) {
    delete this.configMap[name]
  }

  static getInstance () {
    if (ConfigurationStore.instance === undefined) {
      ConfigurationStore.instance = new ConfigurationStore()
    }
    return ConfigurationStore.instance
  }
}
