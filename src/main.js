import { createApp } from "vue"
import VueLogger from "vuejs3-logger";
import App from "./App.vue"
import installElementPlus from "./plugins/element.js"
import { initKeycloak } from "./keycloak/index";
import store from "./store/index"
import router from "./router/index";

const { NODE_ENV } = process.env

const options = {
    isEnabled: true,
    logLevel : NODE_ENV === "production" ? "error" : "debug",
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: "|",
    showConsoleColors: true
};

const app = createApp(App)
app.config.devtools = true
installElementPlus(app)
app.use(router)
app.use(store)
app.use(VueLogger, options)
initKeycloak(app);
app.mount("#app")

