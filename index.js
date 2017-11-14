bg = document.getElementById("background");

function resizeBackgroud() {
  bg.style.height = window.innerHeight + 60 + "px";
}

window.addEventListener("resize", resizeBackgroud);
resizeBackgroud();
