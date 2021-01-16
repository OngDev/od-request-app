import { createApp } from "vue"
import App from "./App.vue"
import installElementPlus from "./plugins/element.js"
import { initKeycloak } from "./keycloak/index";
import store from "./store/index"
import router from "./router/index";
import logger from "./logger/index";

const app = createApp(App)
app.config.devtools = true
installElementPlus(app)
app.use(router)
app.use(store)
app.use(logger)
initKeycloak(app);
app.mount("#app")

