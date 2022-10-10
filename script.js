// Raccolgo dalla pagina gli elementi //
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigure = document.querySelector('figure');

playButton.addEventListener('click', function() {
   const textLength = textArea.value.trim().length;
   if(textLength > 0){
    talk();
   }
});

function talk(){
    const text = textArea.value;
    const pitch = pitchBar.value;

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = pitch;

    speechSynthesis.speak(utterance);

    utterance.addEventListener('start', function () {
        // Blocco tutti i controlli
        textArea.disabled = true;
        pitchBar.disabled = true;
        playButton.disabled = true;
    
        // animiamo la paperella
        duckFigure.classList.add('talking');
      });

    utterance.addEventListener('end', function(){
        textArea.disabled = false;
        pitchBar.disabled = false;
        playButton.disabled = false;
        duckFigure.classList.remove('talking');
    })
}

