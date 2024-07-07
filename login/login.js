//Id selectors for Language
const usernameTxt = document.getElementById("usernameLabel");
const passwordTxt = document.getElementById("passwordLabel");
const loginBtn = document.getElementById("loginBtn");

//Input box selectors for Validation
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const wrongLogin = document.getElementById('wrongUsernameOrPassword');
/*Variables*/
//For Authentication

/*Functions*/

//Set language
const setLanguage = (lang) => {
  document.documentElement.lang = lang;
  console.log(lang + "?");
  usernameTxt.textContent = lang == "ne" ? "प्रयोगकर्ता नाम:" : "Username:";
  passwordTxt.textContent = lang == "ne" ? "पासवर्ड:" : "Password:";
  loginBtn.textContent = lang == "ne" ? "लगइन:" : "Login";
};

//Validate username and password

//fetch username and password from users database
function fetchData() {
  const userName = usernameInput.value;
  const passWord = passwordInput.value;
  if (!userName || !passWord) {
    console.log("Username or password is empty");
    return;
  }
  const adminDatabase = "users";
  //   const url = `../php/adminLoginInfo.php?table=users&username=Sameep&password=imhash20`;
  const url = `../php/adminLoginInfo.php?table=${adminDatabase}&username=${userName}&password=${passWord}`;
  console.log("Fetching data from url\n", url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Data is working\n`, data);
      for (admin in data)
        console.log(`${data[admin]["first_name"]}:${data[admin]["password"]}`);
    })
    .catch((error) => {
      console.log("Fetch error: ", error);
      wrongLogin.style.display = 'block';
      wrongLogin.textContent = "Incorrect Username or password!";
    });
}

//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData();
  });
});
