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
  document.querySelector('.copypaste').addEventListener('click', function() {
    const textarea = document.querySelector('textarea');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    this.textContent = 'Copied! ✅';
    setTimeout(() => {
        this.textContent = 'Copy 📋';
    }, 2000);
});
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
    setTimeout(type, 100); // typing speed
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50); // deleting speed
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000); // pause before deleting
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500); // pause before typing next word
    }
  }
}

type();