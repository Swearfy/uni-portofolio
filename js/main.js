const navBar = document.getElementById("navBar");
const body = document.querySelector("body");
const popup = document.getElementById("popup");

document.getElementById("burgerButton").addEventListener("click", function () {
  navBar.style.width = "100%";
  body.style.overflow = "hidden";
});

document.getElementById("burgerClose").addEventListener("click", function () {
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document.getElementById("scrollDown").addEventListener("click", function () {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactMe-btn").addEventListener("click", function () {
  document
    .getElementById("contact-Section")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("home-btn").addEventListener("click", function () {
  document.getElementById("introPage").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document.getElementById("about-btn").addEventListener("click", function () {
  document.getElementById("mySkills").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document.getElementById("projects-btn").addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document.getElementById("contact-btn").addEventListener("click", function () {
  document
    .getElementById("contact-Section")
    .scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

document
  .getElementById("github-profile")
  .addEventListener("click", function () {
    window.open("https://github.com/Swearfy");
  });

document
  .getElementById("linkedin-profile")
  .addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/dennispaulpuscasu/");
  });

document.getElementById("email-profile").addEventListener("click", function () {
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
