import { createApp } from "vue"
import App from "./App.vue"
import installElementPlus from "./plugins/element.js"
import store from "./store/index"
import router from "./router/index";

const app = createApp(App)
app.config.devtools = true
installElementPlus(app)
app.use(router)
app.use(store)
app.mount("#app")