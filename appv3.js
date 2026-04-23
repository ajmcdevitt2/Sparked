// ==== HAMBURGER MENU ====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("hide");
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("show");
      hamburger.classList.remove("hide");
    }
  });
}

// ==== REVIEW SLIDER ====
const reviews = document.querySelectorAll('.review');
const dots = document.querySelectorAll('.dot');
let currentReview = 0;
let reviewInterval;

function showReview(index) {
  if (reviews.length === 0) return;
  
  reviews.forEach((review, i) => {
    review.classList.toggle('active', i === index);
  });
  
  // Only loop dots if they exist and match the review count
  if (dots.length === reviews.length) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
}

function startAutoSlide() {
  stopAutoSlide(); // Clear any existing timer first
  reviewInterval = setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(reviewInterval);
}

// Initialize Slider
if (reviews.length > 0) {
  showReview(currentReview);
  startAutoSlide();
}

// Click events for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentReview = index;
    showReview(currentReview);
    startAutoSlide(); // Restart timer after manual click
  });
});

// ==== FOOTER YEAR ====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ==== ACCORDION FUNCTIONALITY (Hover & Click) ====
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach((btn) => {
  const content = btn.nextElementSibling;
  if (!content) return;

  const openAccordion = () => {
    // Close others
    document.querySelectorAll('.accordion-content').forEach((el) => {
      if (el !== content) el.style.maxHeight = null;
    });
    content.style.maxHeight = content.scrollHeight + "px";
  };

  const closeAccordion = () => {
    content.style.maxHeight = null;
  };

  // HOVER (Desktop)
  btn.addEventListener('mouseenter', openAccordion);
  btn.addEventListener('mouseleave', closeAccordion);
  
  // Keep open while hovering the content itself
  content.addEventListener('mouseenter', openAccordion);
  content.addEventListener('mouseleave', closeAccordion);

  // CLICK (Mobile)
  btn.addEventListener('click', (e) => {
    // If it's already open, close it. Otherwise, open it.
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      closeAccordion();
    } else {
      openAccordion();
    }
  });
});
