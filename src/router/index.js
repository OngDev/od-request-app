import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue"
import VideoRequest from "../pages/VideoRequest.vue"
import UdemyRequest from "../pages/UdemyRequest.vue"
import QnARequest from "../pages/QnARequest.vue"
import Callback from "../pages/Callback.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/video", component: VideoRequest },
    { path: "/udemy", component: UdemyRequest },
    { path: "/qna", component: QnARequest },
    { path: "/callback", component: Callback, props: route => ({ token: route.query.token })}
]
export default createRouter({
    history: createWebHistory(),
    routes
})