let currentSlide = 0;

const banners = document.querySelectorAll(".moving-banner");

function showSlide(index) {
    if (index >= banners.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = banners.length - 1;
    }

    banners.forEach((banner) => {
        banner.style.display = "none";
    });

    banners[currentSlide].style.display = "block";
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Show the first image
showSlide(currentSlide);
