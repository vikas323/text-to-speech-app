const textInput = document.getElementById("text");
    const languageSelect = document.getElementById("language");
    const speakButton = document.getElementById("speak");

    // Populate the language dropdown with available voices
    function populateLanguages() {
      const voices = window.speechSynthesis.getVoices();
      const uniqueLanguages = new Set(voices.map(voice => voice.lang));
      
      uniqueLanguages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
      });
    }

    // Trigger voice population after the voices are loaded
    window.speechSynthesis.onvoiceschanged = populateLanguages;

    // Speak the text in the selected language
    speakButton.addEventListener("click", () => {
      const text = textInput.value;
      const language = languageSelect.value;

      if (text.trim() === "") {
        alert("Please enter some text to speak.");
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      
      // Find a matching voice for the language
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(voice => voice.lang === language);
      if (voice) utterance.voice = voice;

      window.speechSynthesis.speak(utterance);
    });