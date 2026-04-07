document.addEventListener('DOMContentLoaded', function () {
  // Testimonial carousel functionality
  const carousel = document.querySelector('.testimonial-carousel');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = dots.length;
  let currentIndex = 0;
  let interval;

  function goToSlide(index) {
    currentIndex = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      goToSlide(parseInt(dot.dataset.index));
      interval = setInterval(autoSlide, 5000); // Restart timer
    });
  });

  interval = setInterval(autoSlide, 5000);


  
  // Mobile menu toggle functionality
  const menuIcon = document.querySelector('.custom-menu-icon'); // The hamburger icon
  const menuLinks = document.querySelector('.topbar-responsive-links'); // Menu container

  menuIcon.addEventListener('click', () => {
    // Toggle the menu on and off
    menuLinks.classList.toggle('is-active');
  });

  // Feature box hover effect (Text on hover)
  const featureBoxes = document.querySelectorAll('.grid-container.text-center .grid-x .cell');

  featureBoxes.forEach(box => {
    const text = box.querySelector('h4');
    const img = box.querySelector('img');

    box.addEventListener('mouseenter', () => {
      img.style.opacity = '0'; // Hide the image instantly on hover
      text.style.opacity = '1'; // Show the text
      box.style.transform = 'scale(1.05)'; // Zoom effect on hover
      box.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Stronger shadow
      box.style.backgroundColor = '#F44336'; // Change background to red on hover
      text.style.transform = 'translate(-50%, -50%)'; // Center the text perfectly
      text.style.position = 'absolute'; // Absolute positioning of the text
      text.style.top = '50%'; // Center it vertically
      text.style.left = '50%'; // Center it horizontally
    });

    box.addEventListener('mouseleave', () => {
      img.style.opacity = '1'; // Show the image again instantly
      text.style.opacity = '0'; // Hide the text when not hovered
      box.style.transform = 'scale(1)'; // Reset zoom effect
      box.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)'; // Reset shadow
      box.style.backgroundColor = '#ffffff'; // Reset background color
      text.style.transform = 'translate(-50%, -50%)'; // Keep text centered, if needed
      text.style.position = 'absolute'; // Ensure text remains positioned correctly
    });

    // Optional: Click-to-expand feature (If you want to add it)
    box.addEventListener('click', () => {
      alert(`Feature: ${text.textContent}`); // Example click action
    });
  });
});
