const deg = 6;
const hour = document.querySelector("#hour-hand");
const minute = document.querySelector("#minute-hand");
const second = document.querySelector("#second-hand");

setInterval(() => {
  let day = new Date();
  let h = (day.getHours() + 5) * 30;
  let m = (day.getMinutes() + 30) * deg;
  let s = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${h + m / 12}deg)`;
  minute.style.transform = `rotateZ(${m}deg)`;
  second.style.transform = `rotateZ(${s}deg)`;
});