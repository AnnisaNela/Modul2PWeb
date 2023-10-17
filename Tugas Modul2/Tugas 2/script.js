document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username === "" || email === "" || password === "") {
            alert("Silakan isi semua kolom!");
        } else {
            // Di sini Anda dapat mengirim data ke server atau melakukan tindakan lain sesuai dengan pendaftaran.
            alert("Pendaftaran berhasil!");
            registrationForm.reset(); // Membersihkan formulir setelah pendaftaran berhasil
        }
    });
});
