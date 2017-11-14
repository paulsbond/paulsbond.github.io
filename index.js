bg = document.getElementById("background");

function resizeBackgroud() {
  bg.style.height = document.documentElement.clientHeight + 100 + "px";
}

window.addEventListener("resize", resizeBackgroud);
resizeBackgroud();
