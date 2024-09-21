// Login Form Validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    let email = document.getElementById('login-email').value;
    if (!validateEmail(email)) {
        alert('Invalid Email');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}