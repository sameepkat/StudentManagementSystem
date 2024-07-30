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
  const url = `../php/loginInfo.php?username=${username}&password=${password}`;
  console.log(url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }

      let validUser = false;
      if (data.data.length > 0) {
        for (const eachRow of data.data) {
          console.log("Each row: ", eachRow);

          if (username === eachRow.username && password === eachRow.password) {
            window.location.href = `../admin/admin_en.html`;
            validUser = true;
            break;
          }
        }
      }

      if (!validUser) {
        if (data.data.some(row => row.username === username)) {
          setWrongLoginMessage("Invalid Password");
          passwordInput.focus();
        } else {
          setWrongLoginMessage("Invalid Username");
          usernameInput.focus();
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      setWrongLoginMessage("Invalid username or password. Try again");
    });
}

//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // usernameInput.focus();
    validate();
  });
});


// Dark mode functionality
const modeBtn = document.getElementById("modeBtn");
const buttons = document.querySelectorAll("button");
const formContainer = document.querySelector(".container");
const info = document.getElementById("info");
let darkmode = false;

modeBtn.addEventListener("click",event=>{
  darkmode = !darkmode;
  if(darkmode){
    modeBtn.textContent = "Light Mode";
    document.body.style.backgroundColor = "#28282B"; //0 1B1212
    document.body.style.color="white";
    info.style.color = "blue";
    buttons.forEach((button,index)=>{
      button.style.backgroundColor = "darkgreen";
    })
  }
  else{
    modeBtn.textContent = "Dark Mode";
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    formContainer.style.backgroundColor = "";
    info.style.color = "";
    buttons.forEach((button,index)=>{
      button.style.backgroundColor = ""; //resets the color back to default
    })
  }
})
