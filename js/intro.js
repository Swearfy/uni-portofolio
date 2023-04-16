// intro page buttons
const scrollDownButton = document.getElementById("scrollDown");
const contactMeButton = document.getElementById("contactMe-btn");

scrollDownButton.addEventListener("click", () => {
  document
    .getElementById("project-Section")
    .scrollIntoView({ behavior: "smooth" });
});

contactMeButton.addEventListener("click", () => {
  document
    .getElementById("contact-Section")
    .scrollIntoView({ behavior: "smooth" });
});
