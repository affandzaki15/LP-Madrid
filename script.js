// Definisikan username dan password
const correctUsername = 'admin';
const correctPassword = 'admin123';

// Event listener untuk login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        // Redirect ke halaman home
        window.location.href = 'home.html';
    } else {
        // Tampilkan pesan error
        document.getElementById('errorMsg').textContent = 'Username atau password salah!';
    }
});
