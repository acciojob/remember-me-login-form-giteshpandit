// Function to handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    // Show alert for logged in user
    alert(`Logged in as ${username}.`);

    // Save or remove user credentials based on the checkbox state
    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Check if there are saved details
    checkSavedCredentials();
});

// Function to check if user credentials exist in local storage
function checkSavedCredentials() {
    const savedUsername = localStorage.getItem('username');

    if (savedUsername) {
        document.getElementById('existing').style.display = 'block'; // Show existing user button
    }
}

// Event listener for the existing user button
document.getElementById('existing').addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}.`);
});

// Check saved credentials when the page loads
window.onload = checkSavedCredentials;


