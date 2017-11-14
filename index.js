bg = document.getElementById("background");

function resizeBackgroud() {
  bg.style.height = document.documentElement.clientHeight + 60 + "px";
}

window.addEventListener("resize", resizeBackgroud);
resizeBackgroud();
