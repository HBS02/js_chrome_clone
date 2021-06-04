
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
