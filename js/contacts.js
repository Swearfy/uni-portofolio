export function setUpContactButtons() {
  const githubURL = "https://github.com/Swearfy";
  const linkedinURL = "https://www.linkedin.com/in/dennispaulpuscasu/";
  const email = "swearfy@gmail.com";

  // contact section buttons
  const githubProfile = document.getElementById("github-profile");
  const linkedinProfile = document.getElementById("linkedin-profile");
  const emailLink = document.getElementById("email-profile");

  const popup = document.getElementById("popup");

  githubProfile.addEventListener("click", () => {
    window.open(githubURL);
  });

  linkedinProfile.addEventListener("click", () => {
    window.open(linkedinURL);
  });
  emailLink.addEventListener("click", () => {
    popup.classList.add("emailAnim");
    navigator.clipboard.writeText(email);
    setTimeout(() => {
      popup.classList.remove("emailAnim");
    }, 1500);
  });
}
