const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('Speech recognition activated!');
}

recognition.onresult = (event) => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.innerHTML += `"${transcript}" <br>`;
}

btn.addEventListener('click', () => {
    recognition.start();
});
