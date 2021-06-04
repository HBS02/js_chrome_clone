/*
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

}
function init() {
getTime();
}
init();
*/

const body = document.querySelector("body");
const timer = document.createElement("h2");
const title = document.createElement("h1");
body.prepend(timer);
body.prepend(title);

function getTime() {
  const target = new Date("2021-12-24 00:00:00+0900");
  const today = new Date();
  const gap = target - today;
  const d = Math.floor(gap / (1000 * 60 * 60 * 24)); // 일
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24); // 시
  const m = Math.floor(((gap / 1000) * 60) % 60); // 분
  const s = Math.floor((gap / 1000) % 60); // 초
  if (gap <= 0) {
    title.innerText = "D-day";
    timer.innerText = "";
  } else {
    title.innerText = "Time Until Christmas";
    timer.innerText = `${d}d ${h}h ${m}m ${s}s`;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();