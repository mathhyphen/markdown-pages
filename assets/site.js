
document.addEventListener('DOMContentLoaded', function () {
  const deck = document.querySelector('.deck-container');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.deck-dot'));
  if (!deck || !slides.length) return;

  const setActive = (idx) => {
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
  };

  const goTo = (idx) => {
    if (idx < 0 || idx >= slides.length) return;
    slides[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(idx);
  };

  dots.forEach((dot, idx) => dot.addEventListener('click', () => goTo(idx)));

  let current = 0;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        current = slides.indexOf(entry.target);
        setActive(current);
      }
    });
  }, { root: deck, threshold: 0.6 });

  slides.forEach(slide => io.observe(slide));

  window.addEventListener('keydown', (e) => {
    const key = e.key;
    if (['ArrowDown', 'PageDown', ' '].includes(key)) {
      e.preventDefault();
      goTo(Math.min(current + 1, slides.length - 1));
    } else if (['ArrowUp', 'PageUp'].includes(key)) {
      e.preventDefault();
      goTo(Math.max(current - 1, 0));
    } else if (key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (key === 'End') {
      e.preventDefault();
      goTo(slides.length - 1);
    }
  }, { passive: false });
});
