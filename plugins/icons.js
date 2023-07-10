import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaintBrush, faFan, faEyeDropper, faChild } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTelegramPlane, faBehance } from '@fortawesome/free-brands-svg-icons'

library.add(
  faPaintBrush,
  faFan,
  faEyeDropper,
  faChild,
  faInstagram,
  faTelegramPlane,
  faBehance
)
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})