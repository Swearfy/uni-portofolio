const navBar = document.getElementById("navBar");
const body = document.querySelector("body");

document.getElementById("navButton").addEventListener("click", function () {
  navBar.style.width = "100%";
  body.style.overflow = "hidden";
});

document.getElementById("closeButton").addEventListener("click", function () {
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document.getElementById("scrollDown").addEventListener("click", function () {
  document.getElementById("mySkills").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("mainPage").addEventListener("click", function () {
  document.getElementById("welcomePage").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document.getElementById("skillPage").addEventListener("click", function () {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document.getElementById("projectPage").addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document.getElementById("contactPage").addEventListener("click", function () {
  document
    .getElementById("contactSection")
    .scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});
