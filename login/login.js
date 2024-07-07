//Id selectors for Language
const usernameTxt = document.getElementById("usernameLabel");
const passwordTxt = document.getElementById("passwordLabel");
const loginBtn = document.getElementById("loginBtn");

//Input box selectors for Validation
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const wrongLogin = document.getElementById("wrongUsernameOrPassword");
/*Variables*/
//For Authentication

/*Functions*/

//Set language
const setLanguage = (lang) => {
  document.documentElement.lang = lang;
  usernameTxt.textContent = lang == "ne" ? "प्रयोगकर्ता नाम:" : "Username:";
  passwordTxt.textContent = lang == "ne" ? "पासवर्ड:" : "Password:";
  loginBtn.textContent = lang == "ne" ? "लगइन:" : "Login";
};

//Show message for incorrect login
function setWrongLoginMessage(message) {
  wrongLogin.style.display = "block";
  wrongLogin.style.color = "red";
  wrongLogin.textContent = message;
  const inputBoxes = document.querySelectorAll(".form-control");
  inputBoxes.forEach(
    (inputBox) => (inputBox.style.cssText = "border: 2px solid red;")
  );
}
//Validate username and password
function validate() {
  const userName = usernameInput.value;
  const passWord = passwordInput.value;
  if (!userName || !passWord) {
    setWrongLoginMessage("Username or password is empty");
    return;
  }
  if (passWord.length < 8) {
    setWrongLoginMessage("Password is less than 8 letters long");
    passwordInput.focus();
    return;
  }
  wrongLogin.style.display = "none";
  fetchData(userName, passWord);
}
//fetch username and password from users database
function fetchData(username, password) {
  const adminDatabase = "admin";
  const url = `../php/adminLoginInfo.php?table=${adminDatabase}&username=${username}&password=${password}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (admin in data) {
        if (username == data[admin]["username"] && password == data[admin]["password"]) {
          window.location.href = `../admin/admin_en.html`;
        } else {
          if (
            username !== data[admin]["username"]
          ) {
            setWrongLoginMessage("Invalid Username");
            usernameInput.focus();
            return;
          } else if (password !== data[admin]["password"]) {
            setWrongLoginMessage("Invalid Password");
            passwordInput.focus();
            return;
          } else {
            setWrongLoginMessage("Invalid username or password. Try again");
            usernameInput.focus();
            return;
          }
        }
      }
    })
    .catch(() => {
      setWrongLoginMessage("Invalid username or password. Try again");
    });
}
//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    usernameInput.focus();
    validate();
  });
});
