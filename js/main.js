fetch("/files/data.json")
  .then((response) => response.json())
  .then((data) => uploadProjects(data))
  .catch((error) => {
    console.error("Error:", error);
  });

const githubURL = "https://github.com/Swearfy";
const linkedinURL = "https://www.linkedin.com/in/dennispaulpuscasu/";
const email = "swearfy@gmail.com";

const navBar = document.getElementById("navBar");
const body = document.querySelector("body");
const popup = document.getElementById("popup");
const cardContainer = document.getElementById("container-cards");

//burger buttons
const burgerButton = document.getElementById("burgerButton");
const burgerClose = document.getElementById("burgerClose");

// navbar buttons
const homeButton = document.getElementById("home-btn");
const aboutButton = document.getElementById("about-btn");
const projectsButton = document.getElementById("projects-btn");
const contactButton = document.getElementById("contact-btn");

// intro page buttons
const scrollDownButton = document.getElementById("scrollDown");
const contactMeButton = document.getElementById("contactMe-btn");

// about me buttons and div
const resumebutton = document.getElementById("resume-btn");
const resumeContent = document.getElementById("colapse");

// contact section buttons
const githubProfile = document.getElementById("github-profile");
const linkedinProfile = document.getElementById("linkedin-profile");
const emailLink = document.getElementById("email-profile");

burgerButton.addEventListener("click", function () {
  navBar.style.width = "100%";
  body.style.overflow = "hidden";
});

burgerClose.addEventListener("click", function () {
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

scrollDownButton.addEventListener("click", function () {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

contactMeButton.addEventListener("click", function () {
  document
    .getElementById("contact-Section")
    .scrollIntoView({ behavior: "smooth" });
});

homeButton.addEventListener("click", function () {
  document.getElementById("introPage").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

aboutButton.addEventListener("click", function () {
  document.getElementById("mySkills").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

projectsButton.addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

contactButton.addEventListener("click", function () {
  document
    .getElementById("contact-Section")
    .scrollIntoView({ behavior: "smooth" });
  navBar.style.width = "0%";
  body.style.overflow = "auto";
});

githubProfile.addEventListener("click", function () {
  window.open(githubURL);
});

linkedinProfile.addEventListener("click", function () {
  window.open(linkedinURL);
});
emailLink.addEventListener("click", function () {
  popup.classList.add("emailAnim");
  navigator.clipboard.writeText(email);
  setTimeout(() => {
    popup.classList.remove("emailAnim");
  }, 1500);
});

resumebutton.addEventListener("click", function () {
  if (resumeContent.style.display === "block") {
    resumeContent.style.display = "none";
  } else {
    resumeContent.style.display = "block";
    document.getElementById("resume-btn");
  }
});

function uploadProjects(data) {
  data.forEach((element) => {
    const projectCard = createProject(element);
    cardContainer.appendChild(projectCard);
  });
}

function createProject(element) {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";

  // add image
  const projectImage = document.createElement("img");
  projectImage.className = "projectImage";
  projectImage.alt = element.alt;
  projectImage.src = element.img;

  const projectDesc = createProjectDesc(element);

  projectCard.appendChild(projectImage);
  projectCard.appendChild(projectDesc);

  return projectCard;
}

function createProjectDesc(element) {
  //add description
  const projectDesc = document.createElement("div");
  projectDesc.className = "project-desc";

  // description left side
  const projectDescLeft = document.createElement("div");
  projectDescLeft.className = "project-desc-left";

  // title and description of project
  const title = document.createElement("h2");
  title.innerText = element.title;
  const desc = document.createElement("p");
  desc.innerText = element.description;

  //description right side
  const projectDescRight = document.createElement("div");
  projectDescRight.className = "project-desc-right";

  // project buttons github and live code
  const githubButton = document.createElement("button");
  githubButton.className = "github-button";
  githubButton.addEventListener("click", function () {
    window.open(element.url);
  });

  const buttonImg = document.createElement("img");
  buttonImg.src = "/img/github.svg";
  buttonImg.alt = "github logo";

  githubButton.appendChild(buttonImg);

  const liveCode = document.createElement("button");
  liveCode.innerText = "Live Code";

  // checks if live server url exist otherwise uses github url
  liveCode.addEventListener("click", function () {
    if (element.liveUrl === "") {
      window.open(element.url);
    } else {
      window.open(element.liveUrl);
    }
  });

  projectDescLeft.appendChild(title);
  projectDescLeft.appendChild(desc);

  projectDescRight.appendChild(githubButton);
  projectDescRight.appendChild(liveCode);

  projectDesc.appendChild(projectDescLeft);
  projectDesc.appendChild(projectDescRight);

  return projectDesc;
}
