const scroller = document.querySelectorAll('.scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller.forEach((scroller) => {
    scroller.setAttribute('data-animation', true);
  });
}

