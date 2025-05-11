document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Add New Event Button (Placeholder functionality)
    const addEventButton = document.querySelector(".add-event");
    addEventButton.addEventListener("click", function () {
        alert("Feature to add new events will be implemented soon!");
    });

    // Gallery Image Modal
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("image-modal");
            modal.innerHTML = `<div class='modal-content'><img src='${img.src}'><span class='close-modal'>&times;</span></div>`;
            document.body.appendChild(modal);
            document.querySelector(".close-modal").addEventListener("click", function () {
                modal.remove();
            });
        });
    });

    // Cadet Details Modal (Placeholder functionality)
    const cadetCards = document.querySelectorAll(".cadet-card");
    cadetCards.forEach(card => {
        card.addEventListener("click", function () {
            alert("Cadet details modal will be implemented soon!");
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", function (event) {
        const inputs = contactForm.querySelectorAll("input, textarea");
        let valid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "";
            }
        });
        if (!valid) {
            event.preventDefault();
            alert("Please fill out all fields in the contact form.");
        }
    });
});
