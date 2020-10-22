import { createRouter, createWebHashHistory } from "vue-router"

import Home from "../pages/Home.vue"
import VideoRequest from "../pages/VideoRequest.vue"
import UdemyRequest from "../pages/UdemyRequest.vue"
import QnARequest from "../pages/QnARequest.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/video", component: VideoRequest },
    { path: "/udemy", component: UdemyRequest },
    { path: "/qna", component: QnARequest }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})