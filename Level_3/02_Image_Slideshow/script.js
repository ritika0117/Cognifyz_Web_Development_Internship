
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pauseBtn = document.getElementById("pauseBtn");

let currentSlide = 0;
let slideshowInterval;
let isPlaying = true;

// Create navigation dots
slides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.classList.add("dot");
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

    dot.addEventListener("click", () => {
        showSlide(index);
        restartSlideshow();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Display selected slide
function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

// Next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Previous slide
function previousSlide() {
    showSlide(currentSlide - 1);
}

// Start automatic slideshow
function startSlideshow() {
    clearInterval(slideshowInterval);

    slideshowInterval = setInterval(() => {
        if (isPlaying) {
            nextSlide();
        }
    }, 3000);
}

// Restart timer after manual navigation
function restartSlideshow() {
    if (isPlaying) {
        startSlideshow();
    }
}

// Pause or resume slideshow
pauseBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;

    pauseBtn.textContent = isPlaying
        ? "Pause Slideshow"
        : "Play Slideshow";

    if (isPlaying) {
        startSlideshow();
    } else {
        clearInterval(slideshowInterval);
    }
});

// Button events
nextBtn.addEventListener("click", () => {
    nextSlide();
    restartSlideshow();
});

prevBtn.addEventListener("click", () => {
    previousSlide();
    restartSlideshow();
});

// Initialize slideshow
showSlide(0);
startSlideshow();
