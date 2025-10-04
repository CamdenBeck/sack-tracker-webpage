// Load and display the contents of privacy_policy.txt
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('privacy-policy-text');
    if (!target) return;

    fetch('privacy_policy.txt')
        .then((response) => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then((data) => {
            target.textContent = data;
        })
        .catch((error) => {
            console.error('Failed to load privacy policy:', error);
            target.textContent = 'Failed to load privacy policy.';
        });
});