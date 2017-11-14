bg = document.getElementById("background");

function resizeBackgroud() {
  bg.style.height = window.outerHeight + "px";
}

window.addEventListener("resize", resizeBackgroud);
resizeBackgroud();
