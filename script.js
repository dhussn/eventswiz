document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".button");
  const inputBoxes = document.querySelectorAll(".input-box");
  
  // Function to switch pages
  function switchPage(targetPageId) {
    pages.forEach(page => {
      if (page.id === targetPageId) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  }

  // Event listeners for navigation buttons
  document.getElementById("signupBtn").addEventListener("click", () => {
    switchPage("signupPage");
  });

  document.getElementById("loginBtn").addEventListener("click", () => {
    switchPage("loginPage");
  });

  document.getElementById("loginSubmitBtn").addEventListener("click", () => {
    switchPage("homePage");
  });

  document.getElementById("backSignupBtn").addEventListener("click", () => {
    switchPage("welcomePage");
  });

  document.getElementById("backLoginBtn").addEventListener("click", () => {
    switchPage("welcomePage");
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    // Reset all input fields
    inputBoxes.forEach(box => (box.value = ""));
    // Go back to the login screen
    switchPage("loginPage");
  });
});
