import { Effect } from "./js/effect.js";
import { checkMediaQuery } from "./js/navbar.js";
export const body = document.querySelector("body");

// change navbar  based on size
const mediaQuery = window.matchMedia(" (min-width: 700px)");
window.addEventListener("resize", () => checkMediaQuery(mediaQuery));
checkMediaQuery(mediaQuery);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let previouseTime;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
