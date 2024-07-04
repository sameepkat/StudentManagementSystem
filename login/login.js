//Id selectors for Language
const usernameTxt = document.getElementById('usernameLabel');
const passwordTxt = document.getElementById('passwordLabel');
const loginBtn = document.getElementById('loginBtn');

//Input box selectors for Validation
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

//Variables
const numbers = [0,1,2,3,4,5,,6,7,8,9];

//Functions

//Set language
const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    console.log(lang+'?');
    usernameTxt.textContent = (lang=='ne') ? 'Nepali Username:' : 'English Username';
    passwordTxt.textContent = (lang=='ne') ? 'Nepali Password:' : 'English Password';
    loginBtn.textContent = (lang=='ne') ? 'Nepali Login:' : 'English Login';
}

//Validate username and password
const validate = () => {
    let userInput = usernameInput.value.split('');
    if(userInput.contains(numbers)) alert("contains numbers");
    console.log("Password: "+passwordInput.value);        
}

//Event Listeners
loginBtn.addEventListener('click', validate);
