//const loginForm = document.getElementById("login-form"); 
//const loginInput = loginForm.querySelector("input");
///const loginButton = loginForm.querySelector("button");
/*
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

 /*연습 function onLoginBtnClick(){
    const userName = loginInput.value;
    if(userName === ""){
        alert("Please Write your name"); 
     } else if(userName.length > 15){
            alert("please write your smalll name")
        }
    }

loginButton.addEventListener("click", onLoginBtnClick); */

/*
function onLoginBtnClick(){
    const userName = loginInput.value;
    console.log(userName); 
}
loginButton.addEventListener("click", onLoginBtnClick); 
*/

/*
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(){
    const userName = loginInput.value;
    console.log(userName);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
}
loginForm.addEventListener("submit",onLoginSubmit);
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME =  "hidden"; 
const USERNAME_KEY = "username"; 

function onLoginBtnSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
   //greeting.innerText = "Hello " + userName;
   paintGreetings(username);
}
loginForm.addEventListener("submit", onLoginBtnSubmit)

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnSubmit);
} else {
    paintGreetings(savedUsername);
}

console.log(savedUsername);
