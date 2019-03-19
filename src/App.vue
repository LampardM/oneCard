<template>
    <div id="app">
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>

export default {
  name: "App",
  computed: {}
};
</script>

<style>
/* some common styles here */
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
  /* font-size: 100%; */
  /* font: inherit; */
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

body,
html {
  line-height: 1;
  width: 100%;
  height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: #f5f5f5;
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

/* flex */ /*FLEX布局*/
.flex {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: -webkit-box;
  display: -moz-box;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  width: 100%;
}
.inline-flex {
  display: inline-flex;
}
[flex~="1"] {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
[flex~="2"] {
  -webkit-box-flex: 2;
  -moz-box-flex: 2;
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
}
[flex~="2.5"] {
  -webkit-box-flex: 2.5;
  -moz-box-flex: 2.5;
  -webkit-flex: 2.5;
  -ms-flex: 2.5;
  flex: 2.5;
}
[flex~="3"] {
  -webkit-box-flex: 3;
  -moz-box-flex: 3;
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
}
[flex~="4"] {
  -webkit-box-flex: 4;
  -moz-box-flex: 4;
  -webkit-flex: 4;
  -ms-flex: 4;
  flex: 4;
}
[flex~="5"] {
  -webkit-box-flex: 5;
  -moz-box-flex: 5;
  -webkit-flex: 5;
  -ms-flex: 5;
  flex: 5;
}
[flex~="9"] {
  -webkit-box-flex: 9;
  -moz-box-flex: 9;
  -webkit-flex: 9;
  -ms-flex: 9;
  flex: 9;
}
[flex~="row"],
[flex~="col"] {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: flex;
}
[flex~="col"] {
  -webkit-box-orient: vertical;
  -webkit-flex-flow: column nowrap;
  flex-flow: column nowrap;
}
[flex~="row"] {
  -webkit-box-orient: horizontal;
  -webkit-flex-flow: row nowrap;
  flex-flow: row nowrap;
} /*flex 两端对齐*/
[flex~="justify"] {
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-box-pack: justify;
  box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
} /*flex 居中*/
[flex~="around"] {
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-box-pack: justify;
  box-pack: justify;
  -webkit-justify-content: space-around;
  -moz-justify-content: space-around;
  -ms-justify-content: space-around;
  justify-content: space-around;
} /*flex 四边居中 [flex~= "center" ]*/ /*flex 水平居中*/
[flex~="h-center"],
[flex~="center"] {
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-box-pack: center;
  box-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
} /*flex 垂直居中*/
[flex~="v-center"],
[flex~="center"] {
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
} /*flex 列-垂直往下,行-水平往右*/
[flex~="col"][flex~="v-bottom"],
[flex~="row"][flex~="h-right"] {
  -webkit-box-pack: end;
  -moz-box-pack: end;
  -ms-box-pack: end;
  box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-justify-content: flex-end;
  -ms-justify-content: flex-end;
  justify-content: flex-end;
} /*flex 行-垂直往下,列-水平往右*/
[flex~="row"][flex~="v-bottom"],
[flex~="col"][flex~="h-right"] {
  -webkit-box-align: end;
  -moz-box-align: end;
  -ms-box-align: end;
  box-align: end;
  -webkit-align-items: flex-end;
  -moz-align-items: flex-end;
  -ms-align-items: flex-end;
  align-items: flex-end;
}
input,
button,
select,
textarea {
  outline: none;
}
textarea {
  resize: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  background: #f5f5f5;
}
.v-modal {
  opacity: 0.7 !important;
}
[v-cloak] {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
