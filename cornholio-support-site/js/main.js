// Handles interactive elements on the index.html page, such as form submissions.

function handleFormSubmission(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Thank you for your feedback, ${name}! We will get back to you soon.`);

    document.getElementById('supportForm').reset();
}

// Safely attach the listener after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('supportForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
});