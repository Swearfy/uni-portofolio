const formSubmit = document.getElementById("submitButton");

formSubmit.addEventListener("click", () => {
  document.getElementById("email-confirm").style.display = "block";
  setTimeout(() => {
    document.getElementById("email-confirm").style.display = "none";
  }, 1500);
});
