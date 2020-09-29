import { createApp, h } from 'vue'
import ElementUI from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import routes from "./router/index";
import store from "./store/index";

const App = {
    data: () => ({
        currentRoute: window.location.pathname,
        shareState: store.state
    }),
    mounted() {
        store.removeUserOutOfState()
    },

    computed: {
        CurrentComponent() {
            const matchingPage = routes[this.currentRoute] || '404'
            return require(`./pages/${matchingPage}.vue`).default
        },
    },

    render() {
        return h(this.CurrentComponent);
    },
};

createApp(App).use(ElementUI).mount('#app')
