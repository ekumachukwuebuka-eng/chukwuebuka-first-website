document.addEventListener("DOMContentLoaded", function () {

    const homePage = "/chukwuebuka-first-website/";

    // Handle all elements with the class "back-home"
    const backButtons = document.querySelectorAll(");

    backButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = homePage;
        });
    });

});
