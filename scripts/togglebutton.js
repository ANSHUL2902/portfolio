  // Toggle navigation links visibility
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Adding animation when an element comes into the viewport
  window.addEventListener('scroll', function () {
    let elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      let position = element.getBoundingClientRect();
      // Check if element is in the viewport
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible');
      }
    });
  });