const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
gretting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", SHOWING_ON = "showing";
function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    gretting.classList.add(SHOWING_ON);
    gretting.innerText = `Hello ${text}`;
}
function loadName(){
const currentUser = localStorage.getItem(USER_LS);
if(currentUser === null) {

}
else{
    paintGreeting(currentUser);
}
}

function init() {
loadName();
}

init();