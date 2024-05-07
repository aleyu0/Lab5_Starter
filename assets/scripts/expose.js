// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const honkVolume = document.getElementById('volume');
  const audio = document.querySelector('audio');
  const image = document.querySelector('img');
  const volumeIcon = document.querySelector('div img');
  const honkButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', (event) => {
    const horn = event.target.value;
    audio.src = `assets/audio/${horn}.mp3`;
    image.src = `assets/images/${horn}.svg`;
  });

  honkVolume.addEventListener('input', (event) => {
    const volume = event.target.value;
    audio.volume = volume / 100;
    volumeIcon.src = volume == 0 ? 'assets/icons/volume-level-0.svg' : volume < 33 ? 'assets/icons/volume-level-1.svg' : volume < 67 ? 'assets/icons/volume-level-2.svg' : 'assets/icons/volume-level-3.svg';
  });

  honkButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value == 'party-horn' && honkVolume.value > 0) {
      jsConfetti.addConfetti();
    }
  });
}