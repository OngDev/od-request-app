<template>
    <div class="redirect" v-if="this.type==='videos'">
        <a :href="`${VideoRedirect[0].href}`">
            {{ VideoRedirect[0].text }} <span class="dot">.</span>
            <i class="el-icon-right move-right"></i>
        </a>
        <br>
        <a :href="`${VideoRedirect[1].href}`">
            {{ VideoRedirect[1].text }} <span class="dot">.</span>
            <i class="el-icon-right move-right"></i>
        </a>
    </div>

    <div class="redirect" v-else-if="this.type==='udemy'">
        <a :href="`${UdemyRedirect[0].href}`">
            {{ UdemyRedirect[0].text }} <span class="dot">.</span>
            <i class="el-icon-right move-right"></i>
        </a>
        <br>
        <a :href="`${UdemyRedirect[1].href}`">
            {{ UdemyRedirect[1].text }} <span class="dot">.</span>
            <i class="el-icon-right move-right"></i>
        </a>
    </div>

    <div class="redirect" v-else>
        <a :href="`${QnARedirect[0].href}`">
            {{ QnARedirect[0].text }} <span class="dot">.</span>
            <i class="el-icon-right move-right"></i>
        </a>
        <br>
        <a :href="`${QnARedirect[1].href}`">
            {{ QnARedirect[1].text }} <span class="dot">.</span>
            <i class="el-icon-right move-right"></i>
        </a> 
    </div>
</template>

<script>
export default {
    props: ["type"],
    name: "RedirectMessage",
    data() {
        return {
            VideoRedirect: [
                { href: "/udemy", text: "Udemy requests page" },
                { href: "/qna", text: "Q&A page" }
            ],
            UdemyRedirect: [
                { href: "/video", text: "Video requests page" },
                { href: "/qna", text: "Q&A page" }
            ],
            QnARedirect: [
                { href: "/video", text: "Video requests page" },
                { href: "/udemy", text: "Udemy request page" }
            ]
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #262626;
    }
    .redirect {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        padding-bottom: 2.125em;
        text-align: end;
    }
    .dot {
        font-size: 1.375em;
        color: #ffb347;
        margin-left: -0.15rem;
    }
    .el-icon-right {
        font-weight: 600;
        transition: 0.2s ease;
    }
    a:hover .move-right {
        transform: translate(10px, 0);
    }
</style>