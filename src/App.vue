<template>
  <div class="page-container">
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  font-family: "Roboto", sans-serif;
}

body {
  height: 100vh;
  min-height: 1080px;
}
#app {
  height: 100%;
  width: 100%;
  position: relative;
}

.page-container {
  background-color: #f2f2f2;
  color: #262626;
  height: 100%;
}

.content-container {
  margin: auto;
  height: 100%;
  background-color: #fbf7f5;
  max-width: 1440px;
}

.highlight {
  color: #ffb347;
}
.highlight:hover {
  text-decoration: underline;
}
#page-name {
  font-size: 0.915em;
  letter-spacing: 0.025rem;
  font-weight: 600;
  text-align: end;
}

.request-page {
    padding: 20px;
}

@media only screen and (min-width: 1440px) {
  .content-container {
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    height: calc(100vh - 60px);
    min-height: 1020px;
  }

  .page-container {
    padding-top: 30px;
    padding-bottom: 30px;
    height: calc(100% - 60px);
  }
}

@media only screen and (min-height: 1000px) {
  .page-container {
    height: 100vh;
  }
  #app {
    overflow-y: hidden;
  }
}


@media only screen and (max-width: 768px) {
  .page-container {
    min-height: unset;
  }
}

.el-tabs__item {
  font-weight: 500 !important;
  font-size: 21px !important;
  line-height: 29px !important;
  color: #000000 !important;
}
</style>
