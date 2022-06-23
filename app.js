//const loginForm = document.getElementById("login-form"); 
//const loginInput = loginForm.querySelector("input");
///const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


/* 연습 function onLoginBtnClick(){
    const userName = loginInput.value;
    if(userName === ""){
        alert("Please Write your name"); 
     } else if(userName.length > 15){
            alert("please write your smalll name")
        }
    }

loginButton.addEventListener("click", onLoginBtnClick); */

function onLoginBtnClick(){
    const userName = loginInput.value;
    console.log(userName); 
}
loginButton.addEventListener("click", onLoginBtnClick); 