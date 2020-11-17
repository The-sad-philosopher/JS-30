setInterval(() => {
  animateClock(getAngleOfHands(getLocalTime()), getHands());
}, 500);

function getHands() {
  const hands = {
    hour: document.querySelector("#hour-hand"),
    minute: document.querySelector("#minute-hand"),
    second: document.querySelector("#second-hand"),
  };
  return hands;
}

function getLocalTime() {
  const day = new Date();
  const time = {
    hour: day.getHours(),
    minute: day.getMinutes(),
    second: day.getSeconds(),
  };
  return time;
}

function getAngleOfHands(time) {
  const angle = {
    hour: time.hour * 30, // 1 hour = 30deg
    minute: time.minute * 6, // 1 minute = 6deg
    second: time.second * 6, // 1 second = 6deg
  };
  return angle;
}

function animateClock(angle, hands) {
  hands.hour.style.transform = `rotateZ(${angle.hour + angle.minute / 12}deg)`;
  hands.minute.style.transform = `rotateZ(${angle.minute}deg)`;
  hands.second.style.transform = `rotateZ(${angle.second}deg)`;
}
