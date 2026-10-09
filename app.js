const scene = document.querySelector('.desktop-scene');
const motionToggle = document.querySelector('#motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;

function showMotionState() {
  scene.classList.toggle('motion-paused', paused);
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.textContent = paused ? '움직임 재생 ▷' : '움직임 멈추기 Ⅱ';
  motionToggle.disabled = reducedMotion.matches;
  if (reducedMotion.matches) motionToggle.textContent = '움직임 줄이기 적용됨';
}
showMotionState();
motionToggle.addEventListener('click', () => { paused = !paused; showMotionState(); });
reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; showMotionState(); });
for (const puff of document.querySelectorAll('[data-greeting]')) {
  puff.addEventListener('click', () => {
    document.querySelector('#greeting').textContent = puff.dataset.greeting;
  });
}
