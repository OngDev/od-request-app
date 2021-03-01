<template>
  <div class="redirect" v-if="type === 'videos'">
    <a class="navigation-item"
      @click.prevent="redirectToPage(0, 'videos')"
    >
      {{ VideoRedirect[0].text }} <span class="dot">.</span>
      <i class="el-icon-right move-right"></i>
    </a>
    <br />
    <a class="navigation-item" @click.prevent="redirectToPage(1, 'videos')">
      {{ VideoRedirect[1].text }} <span class="dot">.</span>
      <i class="el-icon-right move-right"></i>
    </a>
  </div>

  <div class="redirect" v-else-if="type === 'udemy'">
    <a class="navigation-item" @click.prevent="redirectToPage(0, 'udemy')">
      {{ UdemyRedirect[0].text }} <span class="dot">.</span>
      <i class="el-icon-right move-right"></i>
    </a>
    <br />
    <a class="navigation-item" @click.prevent="redirectToPage(1, 'udemy')">
      {{ UdemyRedirect[1].text }} <span class="dot">.</span>
      <i class="el-icon-right move-right"></i>
    </a>
  </div>

  <div class="redirect" v-else>
    <a class="navigation-item" @click.prevent="redirectToPage(0, 'qna')">
      {{ QnARedirect[0].text }} <span class="dot">.</span>
      <i class="el-icon-right move-right"></i>
    </a>
    <br />
    <a class="navigation-item" @click.prevent="redirectToPage(1, 'qna')">
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
        { href: "udemy", text: "Udemy requests page" },
        { href: "qna", text: "Q&A page" },
      ],
      UdemyRedirect: [
        { href: "video", text: "Video requests page" },
        { href: "qna", text: "Q&A page" },
      ],
      QnARedirect: [
        { href: "video", text: "Video requests page" },
        { href: "udemy", text: "Udemy request page" },
      ],
    };
  },
  methods: {
    redirectToPage(index, type) {
      switch (type) {
        case "videos":
          this.$router.push(this.VideoRedirect[index].href);
          break;
        case "udemy":
          this.$router.push(this.UdemyRedirect[index].href);
          break;
        case "qna":
          this.$router.push(this.QnARedirect[index].href);
          break;
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #262626;
}
.redirect {
  font-family: "Nunito", sans-serif;
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

.navigation-item {
  cursor: pointer;
}
</style>