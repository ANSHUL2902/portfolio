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

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show/hide on scroll
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  
  // On click: scroll to top + bounce animation
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    // Add bounce class
    scrollTopBtn.classList.add("bounce-on-click");
  
    // Remove class after animation to reset
    setTimeout(() => {
      scrollTopBtn.classList.remove("bounce-on-click");
    }, 500);
  });
