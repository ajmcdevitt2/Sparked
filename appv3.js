// ==== HAMBURGER MENU ====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents the click event from propagating to the document
  navLinks.classList.toggle("show"); // Toggle the side nav visibility
  hamburger.classList.toggle("hide"); // Hide the hamburger icon when nav is open
});

// Close the side nav when clicking anywhere outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("show"); // Close the nav if clicked outside
    hamburger.classList.remove("hide"); // Show the hamburger icon again
  }
});

// ==== REVIEW SLIDER ====
const reviews = document.querySelectorAll('.review');
const dots = document.querySelectorAll('.dot');

let currentReview = 0;

// Function to show a specific review
function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

// Show first review by default
showReview(currentReview);

// Function to change the review every 3 seconds
function autoChangeReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

// Automatically switch the review every 3 seconds
setInterval(autoChangeReview, 3000);

// Make dots clickable to change the review manually
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentReview = index;
    showReview(index);
  });
});

// ==== FOOTER YEAR ====
document.getElementById("year").textContent = new Date().getFullYear();

// ==== ACCORDION FUNCTIONALITY ====
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    // Close all open accordions
    document.querySelectorAll('.accordion-content').forEach((el) => {
      if (el !== content) {
        el.style.maxHeight = null;
      }
    });

    // Toggle the clicked one
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
