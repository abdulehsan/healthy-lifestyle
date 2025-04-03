// "Learn More" Button Click Event
document.addEventListener("DOMContentLoaded", function () {
    const learnMoreButton = document.getElementById("learn-more");
    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", function () {
            alert("Healthy living is all about balance! Eat well, stay active, and keep a positive mindset.");
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const formMessage = document.getElementById("form-message");

            if (name && email && message) {
                formMessage.textContent = "Thank you for your message, " + name + "!";
                formMessage.style.color = "green";
                contactForm.reset();
            } else {
                formMessage.textContent = "Please fill in all fields.";
                formMessage.style.color = "red";
            }
        });
    }
});
