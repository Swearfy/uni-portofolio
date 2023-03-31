fetch("/files/data.json")
  .then((response) => response.json())
  .then((data) => uploadProjects(data));

const navBar = document.getElementById("navBar");
const body = document.querySelector("body");
const popup = document.getElementById("popup");
const resumeContent = document.getElementById("colapse");
const cardContainer = document.getElementById("container-cards");

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

document.getElementById("resume-btn").addEventListener("click", function () {
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
