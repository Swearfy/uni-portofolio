export function setUpProjects() {
  fetch("./files/data.json")
    .then((response) => response.json())
    .then((data) => uploadProjects(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}

const cardContainer = document.getElementById("container-cards");

// Loading and uploading projects in the project section
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
