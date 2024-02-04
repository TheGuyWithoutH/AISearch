class SpeechGenerator {
  voices: SpeechSynthesisVoice[];

  constructor() {
    // this.voices = window.speechSynthesis.getVoices();
  }

  speak(message: string) {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(message);
    this.voices = window.speechSynthesis.getVoices();

    // Select a voice
    utterance.voice = this.voices[2]; // Choose a specific voice

    // Speak the text
    window.speechSynthesis.speak(utterance);
  }
}

export default SpeechGenerator;
