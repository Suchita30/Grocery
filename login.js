function showLogin() {
    document.getElementById('login').style.left = '50px';
    document.getElementById('register').style.left = '450px';
}

function showRegister() {
    document.getElementById('login').style.left = '-400px';
    document.getElementById('register').style.left = '50px';
}

function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    var passwordPattern = /^\d{8}$/;  // Pattern for exactly 8 digits
    return passwordPattern.test(password);
}

function validateLogin() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!validatePassword(password)) {
        alert("Password must be exactly 8 digits.");
        return false;
    }

    // If validation passes, redirect to another website's home page
    window.location.href = "index.html"; // Replace with the actual URL
    return false; // Prevent form submission to allow redirection
}

function validateRegister() {
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('register-confirm-password').value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!validatePassword(password)) {
        alert("Please enter a password with exactly 8 digits.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If validation passes, form can be submitted
    return true;
}