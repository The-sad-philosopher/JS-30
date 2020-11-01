/****		Library	🔥️		****/

// universal

function getNode(selector, keyCode) {
  return document.querySelector(`${selector}[data-key="${keyCode}"]`);
}

// audio

function getAudio(keyCode) {
  return getNode("audio", keyCode);
}

function playAudio(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function handleAudio(keyCode) {
  return playAudio(getAudio(keyCode));
}

// animation

function getKey(keyCode) {
  return getNode("div", keyCode);
}

function addAnimationClass(node, className) {
  if (!node) return;
  node.classList.add(className);
  node.addEventListener("animationend", handleAnimationEnd);
}

function handleAnimationEnd() {
  this.classList.remove("animate");
}

function handleAnimation(keyCode) {
  addAnimationClass(getKey(keyCode), "animate");
}

/****	  Event Handlers   ****/

function handleKeyDownEvent(e) {
  handleAnimation(e.keyCode);
  handleAudio(e.keyCode);
}

// global

window.addEventListener("keydown", handleKeyDownEvent);
