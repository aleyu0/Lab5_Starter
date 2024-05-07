// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // repopulate when the list of available speech synthesis voices change
  speechSynthesis.onvoiceschanged = populateVoices;

  // Event listener to the "Press to Talk" button
  const button = document.querySelector('button');
  button.addEventListener('click', speakText); 
}

function populateVoices() {
  const selectVoice = document.getElementById('voice-select');
  // Get available voices
  const voices = speechSynthesis.getVoices();
  // Clear existing options
  selectVoice.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
  // Populate the "Select Voice" dropdown
  voices.forEach((voice) => {
    const option = new Option(voice.name, voice.name);
    selectVoice.appendChild(option);
  });
}

function speakText() {
  const text = document.getElementById('text-to-speak').value;
  const selectVoice = document.getElementById('voice-select');
  const voice = selectVoice ? selectVoice.value : '';
  const faceImage = document.querySelector('img[alt="Smiling face"]');

  // Check if SpeechSynthesis is supported
  if ('speechSynthesis' in window && voice) {
    // Create a new SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Set the selected voice
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find((v) => v.name === voice);
    if (selectedVoice) {
      utterance.voice = selectedVoice;

      faceImage.src = 'assets/images/smiling-open.png';

      utterance.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };

      // Speak the text
      speechSynthesis.speak(utterance);

    } else {
      console.error('Selected voice not found');
    }
  } else {
    console.error('SpeechSynthesis not supported or voice not selected');
  }
  // faceImage.src = 'assets/images/smiling.png';
}
