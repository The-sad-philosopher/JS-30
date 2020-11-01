/* 
		In progress
*/

window.addEventListener("keydown", handleKeyDownEvent);

function handleKeyDownEvent(e) {
  // 	animate

  // ** add animation class
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.add("animate");

  // ** remove animation class
  key.addEventListener("animationend", removeTransition);

  //	play audio

  // ** get audio
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;

  // ** play audio
  audio.currentTime = 0;
  audio.play();
}

function removeTransition() {
  // console.log(this);
  this.classList.remove("animate");
}
