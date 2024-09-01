document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai dari form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validasi username dan password
    if (username === 'admin' && password === 'admin123') {
        // Jika login berhasil, arahkan ke halaman beranda
        window.location.href = 'index.html';
    } else {
        alert('Username atau password salah!');
    }
});
