bg = document.getElementById("background");

function resizeBackgroud() {
  bg.style.height = document.documentElement.clientHeight + "px";
}

window.addEventListener("resize", resizeBackgroud);
resizeBackgroud();
