function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Show the current slide
function showSlide(index, sliderId) {
  const scrollContainer = document.querySelector(`#slider-${sliderId} .slides`);
  const slides = document.querySelectorAll(
    `#slider-${sliderId} .slides .slide`
  );
  console.log(slideIndexes[sliderId]);
  console.log(scrollContainer);
  if (index >= slides.length) {
    slideIndexes[sliderId] = 0;
  } else if (index < 0) {
    slideIndexes[sliderId] = slides.length - 1;
  } else {
    slideIndexes[sliderId] = index;
  }
  const offset = -slideIndexes[sliderId] * 100;
  scrollContainer.style.transform = `translateX(${offset}%)`;
}

// Functions to move slides
function moveSlide(direction, sliderId) {
  showSlide(slideIndexes[sliderId] + direction, sliderId);
}

// inicialize slide indexes
let slidesCount = document.querySelectorAll(".slider").length;
let slideIndexes = [];
console.log("Slides Count: " + slidesCount);

for (let i = 0; i < slidesCount; i++) {
  slideIndexes[i] = 0;
  showSlide(slideIndexes[i], i);
}
// Initialize the slider

// // Handle scroll event
// scrollContainer.addEventListener('scroll', () => {
//     const scrollLeft = scrollContainer.scrollLeft;
//     const slideWidth = scrollContainer.clientWidth;
//     const newSlideIndex = Math.round(scrollLeft / slideWidth);

//     if (newSlideIndex !== slideIndex) {
//         slideIndex = newSlideIndex;
//         showSlide(slideIndex);
//     }
// });

// // Add touch event listeners
// let touchStartX = 0;
// let touchEndX = 0;

// scrollContainer.addEventListener('touchstart', function(event) {
//     touchStartX = event.changedTouches[0].screenX;
// });

// scrollContainer.addEventListener('touchend', function(event) {
//     touchEndX = event.changedTouches[0].screenX;
//     handleGesture();
// });

// function handleGesture() {
//     if (touchEndX < touchStartX - 50) {
//         moveSlide(1); // Swipe left
//     }
//     if (touchEndX > touchStartX + 50) {
//         moveSlide(-1); // Swipe right
//     }
// }
