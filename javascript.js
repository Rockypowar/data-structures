// Add this JavaScript code to a separate script.js file

const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
        const dropdown = this.parentElement.querySelector(".dropdown-content");
        dropdown.classList.toggle("show");
    });
});

document.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
});