
/*

const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleEnter: function() {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeave: function() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleSelect: function() {
    h2.innerText = "You're selecting me!";
    h2.style.color = colors[3];
  },
  handleContext: function() {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[4];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);


const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = "title.style.color";
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

*/
/*
const title = document.querySelector("#title");

const Move_Class = "second";

function handleMove() {
  const hasClass = title.classList.contains(Move_Class);
  if(!hasClass) {
    title.classList.add(Move_Class);
  }else{
    title.classList.remove(Move_Class);
  }
}

function init() {
  title.addEventListener("resize", handleMove);
}
init();
*/

const title = document.querySelector("#title");

const Move_Class = "second";
const Move_Class_last = "third";

function handleMove() {
  const hasClass = title.classList.contains(Move_Class);
  const hasClass_last = title.classList.contains(Move_Class_last);
  if(!hasClass&&!hasClass_last) {
    title.classList.add(Move_Class);
    title.classList.add(Move_Class_last);
  }else{
    title.classList.remove(Move_Class);
    title.classList.remove(Move_Class_last);
  }
}

function init() {
  window.addEventListener("resize", handleMove);
}
init();
