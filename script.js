// Wait for the page to load
window.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-progress');

    skills.forEach(skill => {
        // Get the progress value from data attribute
        const value = skill.getAttribute('data-progress');
        // Set the width to trigger the CSS animation
        skill.style.width = value;
    });
});

// Contact Form Validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Simple email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // If all validations pass
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you! Your message has been sent.';

    // Reset form
    form.reset();
});