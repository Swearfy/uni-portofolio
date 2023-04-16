import { animateBackground } from "./js/background.js";
import { setUpContactButtons } from "./js/contacts.js";
import { submitButtonFeedBack } from "./js/form.js";
import { setUpIntroButtons } from "./js/intro.js";
import { checkMediaQuery, setUpNavBar } from "./js/navbar.js";
import { setUpProjects } from "./js/projects.js";
export const body = document.querySelector("body");

// change navbar  based on size
const mediaQuery = window.matchMedia(" (min-width: 700px)");
window.addEventListener("resize", () => checkMediaQuery(mediaQuery));
checkMediaQuery(mediaQuery);

animateBackground();
setUpContactButtons();
setUpIntroButtons();
submitButtonFeedBack();
setUpNavBar();
setUpProjects();
