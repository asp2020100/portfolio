
const phrases = ["Hello, I'm Yasas Pamudu !"];
let index = 0;
let phraseIndex = 0;
const typingDelay = 100; // Delay between each character typing
const eraseDelay = 3000; // Delay before erasing the text
const phraseDelay = 2000; // Delay before typing the next phrase

const textElement = document.querySelector('.typing .text');

function type() {
  if (index < phrases[phraseIndex].length) {
    textElement.textContent += phrases[phraseIndex].charAt(index);
    index++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, eraseDelay);
  }
}

function erase() {
  if (index > 0) {
    textElement.textContent = phrases[phraseIndex].substring(0, index - 1);
    index--;
    setTimeout(erase, typingDelay);
  } else {
    phraseIndex++;
    if (phraseIndex >= phrases.length) {
      phraseIndex = 0;
    }
    setTimeout(type, phraseDelay);
  }
}

// Start the typing effect
type();