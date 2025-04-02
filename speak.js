let speechInstance;

document.getElementById('speak-button').addEventListener('click', () => {
  if (speechInstance) {
    speechSynthesis.cancel();
  }
  const lastAiMessage = document.querySelector('.ai-message:last-child');
  if (lastAiMessage) {
    speakResponse(lastAiMessage.textContent);
  }
});

document.getElementById('stop-button').addEventListener('click', () => {
  speechSynthesis.cancel();
});

function speakResponse(text) {
  speechInstance = new SpeechSynthesisUtterance(text);
  speechInstance.lang = 'es-ES';
  speechInstance.rate = 1;
  speechInstance.pitch = 1;
  speechSynthesis.speak(speechInstance);
}