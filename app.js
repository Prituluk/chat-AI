const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const typingIndicator = document.getElementById('typing-indicator');
const connectionStatus = document.getElementById('connection-status');
const modelSelect = document.getElementById('model-select');

let isConnected = false;
// guardamos el historial del chat.

let conversationHistory = []; 
// aquí podemos introducir algun promp especifico. Por ej: explicamos como hacer un registro en una app o servicio 
// y asi crear una AI que sea un asistente personalizado.
let internalPrompt = "Solo respuestas en español";

// establecemos o actualizamos el prompt interno.
function toggleInternalPrompt(newPrompt) {
  internalPrompt = newPrompt;
}


checkOllamaConnection();

//manejamos el evento para enviar
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && messageInput.value.trim() !== '') {
    sendMessage();
  }
});

sendButton.addEventListener('click', sendMessage);

// verificamos la conexión con Ollama.
async function checkOllamaConnection() {
  try {
    const response = await fetch('http://localhost:11434');
    if (response.ok) {
      isConnected = true;
      connectionStatus.textContent = 'Ollama conectado';
      connectionStatus.classList.replace('disconnected', 'connected');
      sendButton.disabled = false;
    }
  } catch (error) {
    isConnected = false;
    connectionStatus.textContent = 'Ollama no conectado - Ejecuta "ollama serve"';
    connectionStatus.classList.replace('connected', 'disconnected');
    sendButton.disabled = true;
    setTimeout(checkOllamaConnection, 5000);
  }
}

// envia los mensajes
async function sendMessage() {
  if (!isConnected || messageInput.value.trim() === '') return;

  const userMessage = messageInput.value.trim();
  messageInput.value = '';

  
  conversationHistory.push({ role: 'user', content: userMessage });

  addMessage(userMessage, 'user');
  typingIndicator.classList.add('active');

  try {
    const selectedModel = modelSelect.value;

    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: selectedModel,
        messages: [
          { role: "system", content: internalPrompt },
          ...conversationHistory
        ],
        stream: false,
      })
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    let aiResponse = data.message.content.trim();

    conversationHistory.push({ role: 'assistant', content: aiResponse });

    addMessage(aiResponse, 'ai');
  } catch (error) {
    addMessage(`Error: ${error.message}`, 'ai');
    checkOllamaConnection();
  } finally {
    typingIndicator.classList.remove('active');
  }
}

// imprimimos el mensaje y le damos el formato adecuado por que si no se ve feo.
function addMessage(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');

  text = text
      .replace(/\n\n/g, "<br><br>") 
      .replace(/\n/g, "<br>")  
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")

  messageElement.innerHTML = text;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}




messageInput.addEventListener('input', () => {
  sendButton.disabled = !isConnected || messageInput.value.trim() === '';
});
