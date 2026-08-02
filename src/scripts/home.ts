// Sweeyam Life — homepage interactions (hero video, parallax).
// Scroll reveals are handled globally by scripts/reveal.ts (loaded in Base).

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Overlay header turns navy once the hero video has been scrolled past
const nav = document.querySelector<HTMLElement>('header.site-header.overlay');
if (nav) {
  const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.9);
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}

// Hero video scroll treatment (CSS custom properties only)
const videoContainer = document.querySelector<HTMLElement>('.video-container');
const heroContent = document.getElementById('hero-content');
if (videoContainer && heroContent && !reduceMotion) {
  videoContainer.style.overflow = 'hidden';
  const onScroll = () => {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      videoContainer.style.setProperty('--hero-scale', String(Math.max(0.65, 1 - scrolled * 0.0008)));
      videoContainer.style.setProperty('--hero-radius', `${scrolled * 0.15}px`);
      videoContainer.style.setProperty('--hero-blur', `${scrolled * 0.005}px`);
      heroContent.style.transform = `translateY(${scrolled * -0.5}px)`;
      heroContent.style.opacity = String(Math.max(0, 1 - scrolled * 0.004));
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Promise section parallax
const promiseSection = document.getElementById('promise');
const parallaxWin = document.querySelector<HTMLElement>('.parallax-window');
const parallaxImg = document.querySelector<HTMLElement>('.parallax-img');
if (promiseSection && parallaxWin && !reduceMotion) {
  const onScroll = () => {
    if (window.innerWidth <= 980) return;
    const rect = promiseSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top <= 0 && rect.bottom >= windowHeight) {
      const scrollableDistance = promiseSection.offsetHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
      parallaxWin.style.setProperty('--para-scale', String(0.7 + progress * 0.55));
      if (parallaxImg) parallaxImg.style.setProperty('--para-y', `${progress * -30}px`);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}
