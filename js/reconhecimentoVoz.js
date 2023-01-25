window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

const button = document.getElementById('voice');
const item = document.getElementById('addItem');

button.addEventListener('click', () => {
    recognition.start();
    recognition.addEventListener('result', onSpeak)
})

function onSpeak(item) {
    const result = item.results[0][0].transcript;
    showResult(result);
    getResult(result);
}

function showResult(result) {
    item.innerHTML = `
    <h2 class="container__result-title">Adicionando: </h2>
                <span class="container__result-text">${result}</span>
    `;
}
