<template>
    <div class="redirect">
        <a href="/udemy">
            Udemy requests page <span class="dot">.</span>
            <i class="el-icon-right move-right"></i>
        </a>
        <br>
        <a href="/qna">
            Q&A page <span class="dot">.</span>
            <i class="el-icon-right move-right"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: "RedirectMessage",
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