import { createApp } from "vue"
import ElementUI from "element-plus";
import store from "./store/index"
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue"
import router from "./router/index";

const app = createApp(App)
app.config.devtools = true
app.use(ElementUI)
app.use(router)
app.use(store)
app.mount("#app")

export default app