export function loadResume() {
  // about me buttons and div
  const resumebutton = document.getElementById("resume-btn");
  const resumeContent = document.getElementById("colapse");

  resumebutton.addEventListener("click", () => {
    if (resumeContent.style.display === "block") {
      resumeContent.style.display = "none";
    } else {
      resumeContent.style.display = "block";
      document.getElementById("resume-btn");
    }
  });
}
