import './assets/main.css'

// FontAwesome - moved to top
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { 
  faHome, 
  faGraduationCap, 
  faCode, 
  faBriefcase, 
  faLaptopCode,
  faTrophy, 
  faCertificate, 
  faNewspaper,
  faDownload,
  faPhone,
  faLocationDot,
  faEnvelope,
  faMicrochip, 
  faRobot,
  faDatabase,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

import { 
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(
  faHome, 
  faGraduationCap, 
  faCode, 
  faBriefcase, 
  faLaptopCode,
  faTrophy, 
  faCertificate, 
  faNewspaper,
  faDownload,
  faPhone,
  faLocationDot,
  faEnvelope,
  faMicrochip, 
  faRobot,
  faDatabase,
  faSun,
  faMoon,
  faLinkedin,
  faGithub
)

// Create the app after Font Awesome setup
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Register FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

// Enable devtools in development mode
app.config.devtools = true
app.config.performance = true

// Use router and mount the app
app.use(router)
app.mount('#app')
