/* Wallpaper Animation */
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const moveX = (x - 0.5) * 20;
    const moveY = (y - 0.5) * 20;

    document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
});
/* H1 Bounce */
const h1 = document.querySelector('.bounce-underlined');
const text = h1.textContent;
h1.innerHTML = [...text].map(char =>
  `<span>${char === ' ' ? '&nbsp;' : char}</span>`).join('');
/* Copy Paste */
const copyButton = document.querySelector('.copypaste');
if (copyButton) {
  copyButton.addEventListener('click', function () {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    this.textContent = 'Copied! ✅';
    setTimeout(() => {
      this.textContent = 'Copy 📋';
    }, 2000);
  });
}
/* Typewriter Effect */
const words = ["Beautiful", "Lovely", "Gorgeous", "Stunning", "Elegant", "Exquisite", "Divine", "Radiant", "Alluring", "Enchanting", 
  "Graceful", "Ravishing", "Angelic", "Heavenly", "Fair", "Winsome", "Ethereal", "Seraphic", "Cute", "Adorable", "Charming", "Sweet", 
  "Darling", "Precious", "Delightful", "Lovable", "Snuggly", "Huggable", "Cuddly", "Tootsie", "Dainty", "Peppy", "Perky", "Bubbly", 
  "Spunky", "Twee", "Kawaii", "Chibi", "Snazzy", "Ducky", "Pretty", "Fine", "Hot", "Fly", "Lit", "Slay", "Drippy", "Bad", "Fire", 
  "Glowy", "Sleek", "Vogue", "Classy", "Glam", "Beauteous", "Pulchritudinous", "Resplendent", "Luminous", "Magnificent", "Sublime", 
  "Fetching", "Mesmeric", "Dazzling", "Blooming", "Dreamy", "Picturesque", "Idyllic", "Refined", "Delicate", "Soft-featured", 
  "Petal-like", "Moonlit"];
const typedText = document.getElementById("typed-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typedText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 135);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 135);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
  }
}

type();

/* On Lost Focus Retitle Page */
const quotes = [
  "COME BACK!!",
  "I LOVE YOU!",
  "I CAN GIVE YOU COOKIES!",
  "I MISS YOU!"
];

const originalTitle = document.title;
let titleInterval = null;

function showRandomTitle() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.title = randomQuote;
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    showRandomTitle();
    titleInterval = setInterval(showRandomTitle, 5000);
  } else {
    clearInterval(titleInterval);
    document.title = originalTitle;
  }
});