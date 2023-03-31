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

const mediaQuery = window.matchMedia(" (min-width: 700px)");
let style;

window.addEventListener(
  "resize",
  function (e) {
    checkMediaQuery(mediaQuery);
  },
  true
);

function checkMediaQuery(mediaQuery) {
  if (!mediaQuery.matches) {
    window.onresize = (e) => {
      navBar.style.width = "0%";
      style = "0%";
    };
    navBar.style.width = "0%";
    style = "0%";
  } else if (mediaQuery.matches) {
    window.onresize = (e) => {
      navBar.style.width = "100%";
      style = "100%";
    };
    navBar.style.width = "100%";
    style = "100%";
  }
}

checkMediaQuery(mediaQuery);

homeButton.addEventListener("click", function () {
  document.getElementById("introPage").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = style;
  body.style.overflow = "auto";
});

aboutButton.addEventListener("click", function () {
  document.getElementById("mySkills").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = style;
  body.style.overflow = "auto";
});

projectsButton.addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  navBar.style.width = style;
  body.style.overflow = "auto";
});
contactButton.addEventListener("click", function () {
  document
    .getElementById("contact-Section")
    .scrollIntoView({ behavior: "smooth" });
  navBar.style.width = style;
  body.style.overflow = "style";
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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let previouseTime;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(effect) {
    this.effect = effect;
    this.x = Math.floor(Math.random() * 2);
    this.y = Math.floor(Math.random() * 2);
    this.height = Math.random() * 5;
    this.width = Math.random() * 5;
    this.speedX = Math.random() * 2;
    this.speedY = Math.random() * 2;
    this.speed = Math.floor(Math.random() * 10);
    this.path = [{ x: this.x, y: this.y }];
    this.max = Math.floor(Math.random() * 200);
    this.angle = 0;
    this.timer = this.max * 2;
  }
  update(delta) {
    this.timer--;
    if (this.timer >= 1) {
      let x = Math.floor(this.x / this.effect.cellSize);
      let y = Math.floor(this.y / this.effect.cellSize);
      let index = y * particles.cols + x;
      this.angle = particles.flow[index];

      this.speedX = Math.cos(this.angle) * this.speed;
      this.speedY = Math.sin(this.angle) * this.speed;

      this.x += this.speedX * delta * this.speed;
      this.y += this.speedY * delta * this.speed;
      this.path.push({ x: this.x, y: this.y });

      if (this.path.length > this.max) {
        this.path.shift();
      }
    } else if (this.path.length > 1) {
      this.path.shift();
    } else {
      this.reset();
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fill();
    ctx.moveTo(this.path[0].x, this.path[0].y);

    for (let i = 0; i < this.path.length; i++) {
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.path = [{ x: this.x, y: this.y }];
    this.timer = this.max * 2;
  }
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particleArray = [];
    this.particle = new Particle();
    this.particleNumber = 100;
    this.cellSize = 20;
    this.rows;
    this.cols;
    this.flow = [];
    this.init();

    window.addEventListener("resize", (e) => {
      this.resizeBy(e.target.innerWidth, e.target.innerHeight);
    });
  }
  init() {
    this.rows = Math.floor(this.height / this.cellSize);
    this.cols = Math.floor(this.width / this.cellSize);
    this.flow = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let angle = (Math.cos(x) + Math.sin(y)) * (Math.random() * 5);
        this.flow.push(angle);
      }
    }

    for (let i = 0; i < this.particleNumber; i++) {
      this.particleArray.push(new Particle(this));
    }
  }
  resizeBy(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = canvas.width;
    this.height = canvas.height;
  }
  update(delta) {
    this.particleArray.forEach((particle) => {
      particle.update(delta);
    });
  }
  draw(ctx) {
    this.particleArray.forEach((particle) => {
      particle.draw(ctx);
    });
    this.particle.draw(ctx);
  }
}

const particles = new Effect(canvas);

function animate(currentTime) {
  const delta = currentTime - previouseTime;
  previouseTime = currentTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.update(delta);
  particles.draw(ctx);
  requestAnimationFrame(animate);
}

animate();
