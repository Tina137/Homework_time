const hour = document.querySelector("span.hour");
const min = document.querySelector("span.min");
const sec = document.querySelector("span.sec");
const btn = document.querySelector(".save-time");
const list = document.querySelector(".list");

function change() {
  let now = new Date();

  hour.textContent = now.getHours();
  min.textContent = now.getMinutes();
  sec.textContent = now.getSeconds();
}
setInterval(change, 1000);

btn.addEventListener("click", function add() {
  let a = document.createElement("li");
  a.textContent =
    hour.textContent + ":" + min.textContent + ":" + sec.textContent;
  list.append(a);
});
