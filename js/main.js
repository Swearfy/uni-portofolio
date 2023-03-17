const navBar = document.getElementById("navBar");
const body = document.querySelector("body");
const popup = document.getElementById("popup");

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

document.getElementById("contactme").addEventListener("click", function () {
  document
    .getElementById("contactSection")
    .scrollIntoView({ behavior: "smooth" });
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

document.getElementById("gitHubProfile").addEventListener("click", function () {
  window.open("https://github.com/Swearfy");
});

document
  .getElementById("linkedinProfile")
  .addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/dennispaulpuscasu/");
  });

document.getElementById("emailLink").addEventListener("click", function () {
  popup.classList.add("emailAnim");
  navigator.clipboard.writeText("swearfy@gmail.com");
  setTimeout(() => {
    popup.classList.remove("emailAnim");
  }, 1500);
});

document.getElementById("project1").addEventListener("click", function () {
  window.open("https://github.com/Swearfy/Project-GameV2");
});

document.getElementById("project2").addEventListener("click", function () {
  window.open("https://github.com/Swearfy/SurveyApp");
});

document.getElementById("project3").addEventListener("click", function () {
  window.open("https://github.com/Swearfy/Module_Chooser");
});
