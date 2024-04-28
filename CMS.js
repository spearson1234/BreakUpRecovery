document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById("theme-switch");
    const loginContainer = document.querySelector(".login-container");
    const usernameInput = document.getElementById("username-input");
    const passwordInput = document.getElementById("password-input");
    const loginButton = document.getElementById("login-button");
  
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark") {
        themeSwitch.checked = true;
      }
    }
  
    // Theme toggle event listener
    themeSwitch.addEventListener("change", function() {
      if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    });
  
    // Login button click event listener
    loginButton.addEventListener("click", function() {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      if (username === "CrazyPigeonMan" && password === "Admin") {
        // Username and password are correct, redirect to another page
        window.location.href = "CMSHome.html"; // Change "dashboard.html" to the URL of your dashboard page
      } else {
        // Username or password is incorrect, notify the user
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  