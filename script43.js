function generatePassword() {
    const length = document.getElementById("passwordLength").value;

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("generatedPassword").value = password;
}

function copyPassword() {
    const password = document.getElementById("generatedPassword");

    if (password.value === "") {
        alert("Please generate a password first.");
        return;
    }

    navigator.clipboard.writeText(password.value);

    alert("Password copied to clipboard!");
}

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





