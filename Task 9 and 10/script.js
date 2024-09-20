// Get the image element by its ID
var image = document.getElementById('hoverImage');

// Function to hide the image by setting opacity to 0
function hideImage() {
    image.style.opacity = '0';
}

// Function to show the image by setting opacity to 1
function showImage() {
    image.style.opacity = '1';
}

// Add event listeners for mouseenter and mouseleave
image.addEventListener('mouseenter', hideImage);
image.addEventListener('mouseleave', showImage);

// Function to check if two passwords match
function validatePasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.color = "red";
        return false;
    }
    return true;
}