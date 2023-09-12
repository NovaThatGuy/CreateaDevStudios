// JavaScript for multi-image slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentSlide = 0;

// Function to show the current slides within the visible area
function showSlides() {
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}

// Event listener for previous button
prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 3;
    }
    showSlides();
});

// Event listener for next button
nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide > slides.length - 3) {
        currentSlide = 0;
    }
    showSlides();
});

// Show the initial set of slides
showSlides();
