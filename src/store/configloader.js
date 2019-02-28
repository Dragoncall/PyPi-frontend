import ConfigurationStore from './configstore'

export default function loadJson (json) {
  console.log(json)
  ConfigurationStore.getInstance().configMap = json
}
