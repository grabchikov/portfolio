function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// script.js
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const scrollContainer = document.querySelector('.slides');

// Show the current slide
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    scrollContainer.style.transform = `translateX(${offset}%)`;
}

// Handle scroll event
scrollContainer.addEventListener('scroll', () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const slideWidth = scrollContainer.clientWidth;
    const newSlideIndex = Math.round(scrollLeft / slideWidth);
    
    if (newSlideIndex !== slideIndex) {
        slideIndex = newSlideIndex;
        showSlide(slideIndex);
    }
});

// Initialize the slider
showSlide(slideIndex);

// Add touch event listeners
let touchStartX = 0;
let touchEndX = 0;

scrollContainer.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

scrollContainer.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchEndX < touchStartX - 50) {
        moveSlide(1); // Swipe left
    }
    if (touchEndX > touchStartX + 50) {
        moveSlide(-1); // Swipe right
    }
}

// Functions to move slides
function moveSlide(direction) {
    showSlide(slideIndex + direction);
}
