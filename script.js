let speech = new SpeechSynthesisUtterance();

let voices = []; 

let voicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voice = window.speechSynthesis.getVoices();
    speech.voices = [0];

    voices. forEach((voice, i) => (voicesSelect.options[i] = new options(voice.name, i)));


}
voicesSelect.addEventListener("change",() => {
    speech.voices[voicesSelect.value];

})
document.querySelector("button").addEventListener("click", () =>{
speech.text = document.querySelector("textarea").value;
window.speechSynthesis.speak(speech);
})
