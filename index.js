bg = document.getElementById("background");

function resizeBackgroud() {
  bg.style.height = window.screen.height + "px";
}

window.addEventListener("resize", resizeBackgroud);
resizeBackgroud();
