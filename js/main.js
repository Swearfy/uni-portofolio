document.getElementById("navButton").addEventListener("click", function () {
  document.getElementById("navBar").style.width = "100%";
  document.querySelector("body").style.overflow = "hidden";
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("navBar").style.width = "0%";
  document.querySelector("body").style.overflow = "auto";
});
