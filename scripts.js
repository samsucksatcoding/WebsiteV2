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