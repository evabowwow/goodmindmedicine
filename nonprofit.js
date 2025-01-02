// Carousel functionality
let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel img');
  currentIndex += step;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
  moveSlide(0);  // Display the first image on load
});

// Handle form submissions for donation and volunteer forms
document.getElementById('donationForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent default form submission
  alert('Thank you for your donation!');
  // Add any logic for submitting form data to a server or handling it
});

document.getElementById('volunteerForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent default form submission
  alert('Thank you for volunteering!');
  // Add any logic for submitting form data to a server or handling it
});
// JavaScript for dynamic typing effect
window.onload = function () {
  const text = "Peer Support & Wellness Consulting"; // Text to type
  const targetElement = document.getElementById("typing-effect");

  let i = 0;
  const speed = 100; // Speed of typing (ms)

  // Function to type out the text
  function typeWriter() {
      if (i < text.length) {
          targetElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }

  // Start typing when the page loads
  typeWriter();
};
