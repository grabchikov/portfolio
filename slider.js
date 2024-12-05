document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    function updateSliderPosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        isDragging = true;
    }

    function handleTouchMove(event) {
        if (!isDragging) return;
        const currentX = event.touches[0].clientX;
        const diffX = currentX - startX;
        
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
            } else {
                currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
            }
            updateSliderPosition();
            isDragging = false;
        }
    }

    function handleTouchEnd() {
        isDragging = false;
    }

    slides.addEventListener('touchstart', handleTouchStart);
    slides.addEventListener('touchmove', handleTouchMove);
    slides.addEventListener('touchend', handleTouchEnd);
});
